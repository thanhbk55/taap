Rails.application.routes.draw do
  namespace :app do
    resources :tasks, only: %i[index]
  end
end
