Rails.application.routes.draw do
  namespace :app do
    resources :dashboard, only: %i[index]
  end
end
