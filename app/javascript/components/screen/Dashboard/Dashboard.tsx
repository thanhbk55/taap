import React, {SFC, Fragment} from 'react'
import NavLink from './components/common/atoms/NavLink'
interface DashboardProps {
  greeting: string;
}

const Dashboard: SFC<DashboardProps> = (props) => (
  <Fragment>
    <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="dashboard">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin1 <sup>2</sup></div>
      </a>
      <hr className="sidebar-divider my-0"></hr>
      <NavLink extend_class='active' path='dashboard' name='Dashboard' icon='tachometer-alt'/>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">
        Interface
      </div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <a className="collapse-item" href="cards.html">Cards</a>
          </div>
        </div>
      </li>
    </ul>
  </Fragment>
)

export default Dashboard
