import React from "react"
import PropTypes from "prop-types"
import { StaticRouter, Route, Link } from "react-router-dom"

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)

class HelloWorld extends React.Component {
  render () {
    return (
      <StaticRouter location={this.props.path}>
        <div>
          <Route exact path='/app/dashboard' component={Home} />
        </div>
      </StaticRouter>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

