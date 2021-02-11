module TurboStreamSpecSupport
  def turbo_stream_headers(headers={})
    headers.merge('Accept': 'text/vnd.turbo-stream.html')
  end
end
