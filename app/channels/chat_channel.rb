class ChatChannel < ApplicationCable::Channel
  def subscribed
    create_join_message
  end

  def unsubscribed
    create_left_message
  end

  private

  def username
    params[:username]
  end

  def create_join_message
    return if username.nil?

    Message.create(sender: username, body: 'joined the chat', message_type: 'System')
  end

  def create_left_message
    return if username.nil?

    Message.create(sender: username, body: 'has left the chat', message_type: 'System')
  end
end
