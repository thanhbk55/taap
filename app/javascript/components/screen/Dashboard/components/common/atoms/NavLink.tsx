import React, {SFC, Fragment} from 'react'

interface NavLinkProps {
  extend_class?: string;
  name: string;
  path: string;
  icon: string;
}

const NavLink: SFC<NavLinkProps> = ({extend_class, name, path, icon}) => (
  <Fragment>
    <li className={`nav-item ${extend_class}`}>
      <a className='nav-link' href={path}>
        <i className={`fas fa-fw fa-${icon}`}></i>
        <span>{name}</span></a>
    </li>
  </Fragment>
)

NavLink.defaultProps = {
  extend_class: ''
}

export default NavLink