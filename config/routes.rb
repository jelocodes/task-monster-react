Rails.application.routes.draw do
  resources :task_lists
  resources :tasks
  resources :monsters
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
