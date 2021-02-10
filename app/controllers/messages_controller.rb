class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.create(message_params)
    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to root_path }
    end
  end

  private

  def message_params
    params.require(:message)
          .permit(:sender, :body)
  end
end
