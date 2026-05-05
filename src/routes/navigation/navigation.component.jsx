import {Fragment, useContext} from 'react';
import {UserContext} from '../../context/user.context';
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.css';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async() => {
      const res = await signOutUser();
      console.log(res);
      setCurrentUser(null);

    };
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
         {
           currentUser ? (
             <span className='nav-link' onClick={signOutHandler}>
               SIGN OUT
             </span>

           ) :(  
           
           <Link className='nav-links-container' to='/auth'>
            SIGN IN
            </Link> 
          )}
      </div>
    </div>
     <Outlet />
     <Fragment />
  </div>
   );
};



export default Navigation;