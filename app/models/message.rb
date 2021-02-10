class Message < ApplicationRecord
  validates_presence_of :sender, :body
end
