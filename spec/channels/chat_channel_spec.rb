require 'rails_helper'

describe ChatChannel, type: :channel do
  describe 'Subscriptions' do
    it 'successfully subscribes' do
      subscribe username: 'Imam'
      expect(subscription).to be_confirmed
    end

    it 'successfully create join message when subscribed' do
      subscribe username: 'Imamul Akhyar'
      msg = Message.first
      expect(msg.sender).to eq('Imamul Akhyar')
      expect(msg.message_type).to eq('System')
    end

    it 'successfully create left message when subscribed' do
      subscribe username: 'John'
      unsubscribe
      msg = Message.last
      expect(msg.sender).to eq('John')
      expect(msg.message_type).to eq('System')
    end
  end
end
