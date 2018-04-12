Rails.application.routes.draw do
    root 'transactions#index'
    resources :transactions

    namespace :api do
      namespace :v1 do
        resources :transactions
      end
    end
end
