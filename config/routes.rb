Rails.application.routes.draw do
  root to: 'messages#index'

  resources :messages, only: [:create] do
    collection do
      get :load
      # add post routes for turbo stream
      post :load
    end
  end
end
