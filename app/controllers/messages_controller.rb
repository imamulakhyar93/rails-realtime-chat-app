class MessagesController < ApplicationController
  def index; end

  def create
    return unless turbo_stream?

    run Service::MessageCreate
    render nothing: true
  end

  # create lazyload turbo frame on page loaded
  def load
    run Service::MessageList
    @messages = result
    @next_page = results[:query].next_page

    respond_to do |format|
      format.turbo_stream
      format.html
    end
  end
end
