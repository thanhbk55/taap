import React from "react"
import PropTypes from "prop-types"
class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  greeting: PropTypes.string
};
export default Dashboard
