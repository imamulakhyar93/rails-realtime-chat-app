class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :sender
      t.string :body
      t.string :message_type, default: 'User'

      t.timestamps
    end
  end
end
