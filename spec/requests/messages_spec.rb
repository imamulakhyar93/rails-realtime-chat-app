require 'rails_helper'

describe 'Messages', type: :request do
  let(:message_params) { { sender: 'Imam', body: 'Hi' } }
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
