require 'rails_helper'

describe 'Messages', type: :request do
  let(:message_params) { { sender: 'Imam', body: 'Hi' } }

  context 'Create' do
    subject { post messages_path, params: { message: message_params }, headers: turbo_stream_headers }
    describe 'POST /messages' do
      it 'message count must be incremented' do
        expect { subject }.to change { Message.count }.from(0).to(1)
      end

      it 'return 200 status response' do
        subject
        expect(response).to have_http_status(200)
      end
    end
  end

  context 'Listing as Turbo Stream' do
    subject { post load_messages_path, headers: turbo_stream_headers }
    describe 'POST /messages/load' do
      before :all do
        create(:message)
      end
      it 'load more message using turbo stream' do
        subject
        messages = controller.instance_variable_get('@messages')
        expect(messages.size).not_to eq(0)
      end
      it 'return 200 status response' do
        subject
        expect(response).to have_http_status(200)
      end

    end
  end

  context 'Listing as HTML' do
    subject { get load_messages_path }
    describe 'GET /messages/load' do
      before :all do
        create(:message)
      end
      it 'load more message using HTML' do
        subject
        messages = controller.instance_variable_get('@messages')
        expect(messages.size).not_to eq(0)
      end

      it 'return 200 status response' do
        subject
        expect(response).to have_http_status(200)
      end
    end
  end

end
