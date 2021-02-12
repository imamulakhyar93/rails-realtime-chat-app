class RemoveOldMessages
  class << self
    def run
      total_message = Message.count
      return if total_message <= 5000

      Message.select(:id).limit(total_message - 5000).order(created_at: :asc).destroy_all
    end
  end
end
