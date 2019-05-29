module App
  class DashboardController < AppController
    def index
      render component: 'Dashboard', props: { greeting: "Hello from react-rails." }, tag: 'div', class: 'todo'
    end
  end
end