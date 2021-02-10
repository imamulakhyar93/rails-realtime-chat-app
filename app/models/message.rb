class Message < ApplicationRecord
  validates_presence_of :sender, :body, :message_type
  after_create_commit lambda { |message|
    broadcast_append_to 'messages',
    partial: 'messages/partials/message_item',
    locals: { message: message }
  }
end
