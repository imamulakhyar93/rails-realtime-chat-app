require 'active_record'

class BaseService
  include Base::Step
  include Base::Result
  attr_reader :params

  def initialize(params)
    @params = params
    super(params)
  end
end
