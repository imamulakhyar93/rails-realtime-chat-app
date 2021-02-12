module Base
  module Result
    def self.included(_base)
      attr_accessor :errors, :result, :results

      def initialize(*args)
        @errors = []
        @results = {}
      end
    end

    def error?
      @errors.present?
    end

    def error_messages
      @errors.join(',')
    end
  end
end
