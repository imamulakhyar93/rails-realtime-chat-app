class MessagesController < ApplicationController
  def index

  end

  def create
    @message = Message.create(message_params)
    redirect_to root_path
  end

  private

  def message_params
    params.require(:message)
          .permit(:sender, :body)
  end
end
