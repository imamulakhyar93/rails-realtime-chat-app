module TurboStreamHeader
  def turbo_stream?
    request.headers['Accept'].gsub(/\s/, '').split(',').include? 'text/vnd.turbo-stream.html'
  end
end
