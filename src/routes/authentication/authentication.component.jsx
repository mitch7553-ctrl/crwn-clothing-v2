import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { UserContext } from '../../context/user.context';
import './authentication.styles.scss';

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Navigate to='/' />;
  }

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;