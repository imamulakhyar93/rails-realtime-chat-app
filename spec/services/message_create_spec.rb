require 'rails_helper'

describe Service::MessageCreate, type: :service do
  describe '#execute' do
    let :valid_params do
      { message:
        {
          sender: 'Imam',
          body: 'Test message'
        }
      }
    end

    let(:invalid_params) { { message: { sender: 'Imam' } } }

    describe 'when created with valid params' do
      let(:instance) { described_class.new(ActionController::Parameters.new(valid_params)) }
      it 'errors? must be false' do
        instance.run
        expect(instance.error?).to be_falsey
      end

      it 'error_messages must empty string' do
        instance.run
        expect(instance.error_messages).to eq('')
      end

      it 'errors array must be empty' do
        instance.run
        expect(instance.errors).to eq([])
      end
    end

    describe 'when created with invalid params' do
      let(:instance) { described_class.new(ActionController::Parameters.new(invalid_params)) }
      it 'error? must be true' do
        instance.run
        expect(instance.error?).to be_truthy
      end

      it 'error_messages must not be empty string' do
        instance.run
        expect(instance.error_messages).not_to eq('')
      end

      it 'errors array must be present' do
        instance.run
        expect(instance.errors).not_to eq([])
      end
    end
  end
end
