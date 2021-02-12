module Service
  class MessageList < BaseService
    step :query
    step :order

    def query
      Message.all.page(params.fetch('page', 1)).per(20)
    end

    def order
      result.order(created_at: :desc)
    end
  end
end
