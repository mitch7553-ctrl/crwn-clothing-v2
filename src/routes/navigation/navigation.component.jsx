import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.css';

const Navigation = () => {
  return (
  <div>
    <div className="navigation">
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='links-container'>
        <Link className='nav-links-container' to='/shop'>
        SHOP
      </Link>
      </div>
    </div>
     <Outlet />
     <Fragment />
  </div>
   );
};



export default Navigation;