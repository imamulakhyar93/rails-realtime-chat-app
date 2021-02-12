module SimpleService
  attr_reader :result, :results

  def run(klass)
    raise 'Class must be an instance of BaseService' unless klass < BaseService

    klass_instance = klass.new(params)
    result = klass_instance.send(:run)
    @results = klass_instance.results
    @result = result
    result
  end
end
