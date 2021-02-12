require 'rails_helper'

describe Message, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:sender) }
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:message_type) }
  end

  describe 'create' do
    it 'created with required parameters' do
      message = Message.new(sender: 'Imam', body: 'Test message', message_type: 'User')
      expect(message.save).to be_truthy
    end

    it 'should not be created when parameter is empty' do
      message = Message.new
      expect(message.save).to be_falsey
    end
  end
end
