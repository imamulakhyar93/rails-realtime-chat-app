FactoryBot.define do
  factory :message, class: 'Message' do
    sender { 'Imam' }
    body { 'Test' }
  end
end
