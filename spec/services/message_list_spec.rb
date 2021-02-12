require 'rails_helper'

describe Service::MessageList, type: :service do
  describe '#execute' do
    let(:instance) { described_class.new(ActionController::Parameters.new({})) }
    before do
      FactoryBot.create_list(:message, 20)
    end

    it 'messages count must not be empty' do
      instance.run
      expect(instance.result).not_to be_empty
    end

    it 'must have pagination methods' do
      instance.run
      query = instance.results[:query]
      expect(query.limit_value).to eq(20)
      expect(query.first_page?).to be_truthy
      expect(query.current_page).to eq(1)
    end
  end
end
