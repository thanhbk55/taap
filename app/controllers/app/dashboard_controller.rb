module App
  class DashboardController < AppController
    def index
      # render template: 'app/index'
      # render component: 'screen/Dashboard/Dashboard', props: { greeting: "Hello from react-rails." }, tag: 'div', id: 'wrapper'
      render component: 'Dashboard', props: { path: request.path }, tag: 'div', id: 'wrapper'
    end
  end
end