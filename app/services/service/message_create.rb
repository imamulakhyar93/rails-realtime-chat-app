module Service
  class MessageCreate < BaseService
    step Transaction {
      step :permit_params
      step :create
    }

    def create
      model = Message.create!(permit_params)
      @errors += model.errors.full_messages if model.errors.present?
      model
    end

    def permit_params
      params.require(:message).permit(:sender, :body)
    end
  end
end
