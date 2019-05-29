module App
  class TasksController < AppController
    def index
      render template: 'app/index'
    end
  end
end