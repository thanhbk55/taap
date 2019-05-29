# Create app

  

### 1) Create a new Rails app:

```

$ rails new taap

$ cd taap

```

  

### 2) Add `webpacker` and `react-rails` to your gemfile:

```ruby

gem 'webpacker'

gem 'react-rails'

```

  

### 3) Run the installers:

```

$ bundle install

$ rails webpacker:install

$ rails webpacker:install:react

$ rails generate react:install

```

  

### 4) Link the JavaScript pack in Rails view using `javascript_pack_tag`:

```erb

<!-- application.html.erb in Head tag below turbolinks -->

<%= javascript_pack_tag 'application' %>

```

  

### 5) Generate dashboard component:

```

$ rails g react:component Dashboard greeting:string

```

  

### 6) [Render it in a Rails view](#view-helper):

  

```erb

<!-- erb: paste this in view -->

<%= react_component("Dashboard", { greeting: "Hello from react-rails." }) %>

```

  

# User ServerSide rending

### 1) Config

```ruby
# config/application.rb
# These are the defaults if you don't specify any yourself
module MyApp
  class Application < Rails::Application
    # Settings for the pool of renderers:
    config.react.server_renderer_pool_size  ||= 1  # ExecJS doesn't allow more than one on MRI
    config.react.server_renderer_timeout    ||= 20 # seconds
    config.react.server_renderer = React::ServerRendering::BundleRenderer
    config.react.server_renderer_options = {
      files: ["server_rendering.js"],       # files to load for prerendering
      replay_console: true,                 # if true, console.* will be replayed client-side
    }
    # Changing files matching these dirs/exts will cause the server renderer to reload:
    config.react.server_renderer_extensions = ["jsx", "js"]
    config.react.server_renderer_directories = ["/app/assets/javascripts", "/app/javascript/"]
  end
end
```

### 2) Render React components inside your Rails server with `prerender: true`
```erb
<%= react_component('HelloMessage', {name: 'John'}, {prerender: true}) %>
```

### 3) Render in controller
```ruby
class TodoController < ApplicationController
  def index
    @todos = Todo.all
    render component: 'TodoList', props: { todos: @todos }, tag: 'span', class: 'todo'
  end
end
```

# TypeScript
```
$ bundle exec rails webpacker:install:typescript
$ yarn add @types/react @types/react-dom
```

```ruby
config.react.server_renderer_extensions = ["jsx", "js", "tsx", "ts"]
```