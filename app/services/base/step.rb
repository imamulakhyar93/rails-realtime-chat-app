module Base
  module Step
    def self.included(base)
      base.extend ClassMethods
      # base.singleton_class.extend Forwardable

      # base.singleton_class.def_delegators base, :Transaction
    end

    def run
      res = nil
      pending_steps = self.class.steps.filter(&:present?)
      pending_steps.each do |step|
        return res = _run_array_step(step) if step.is_a? Array

        res = _run_normal_step(step)
      end
      res
    end

    def _run_array_step(step)
      ActiveRecord::Base.transaction do
        step_dup = step.dup
        last_step = step_dup.pop
        step_dup.each do |step_item|
          res = send(step_item.name)
          @result = res
          @results[step_item.name] = res
        end
        send(last_step.name)
      end
    rescue StandardError => e
      @errors << e.message
      nil
    end

    def _run_normal_step(step)
      res = send(step.name)
      @result = res
      @results[step.name] = res
      res
    rescue StandardError => e
      @errors << e.message
      nil
    end

    module ClassMethods
      def self.extended(_base)
        @steps = []
        @transaction_steps = []
      end

      def step(name)
        @steps = [] if @steps.nil?
        return @steps << activity.new(name, false) if name.is_a? Symbol

        @steps << name
      end

      def transaction_step(name)
        @transaction_steps = [] if @transaction_steps.nil?
        @transaction_steps << activity.new(name, true)
      end

      def steps
        @steps
      end

      def transaction_steps
        @transaction_steps
      end

      def Transaction
        @transaction_steps = [] # reset transacion step from previous step

        # Change step method to transaction steps
        def self.step(name)
          transaction_step(name)
        end

        yield

        # Revert step method to actual steps
        def self.step(name)
          super(name)
        end
        transaction_steps
      end

      def activity
        Struct.new(:name, :transaction)
      end
    end
  end
end
