import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingPage from '../../auth0/LoadingPage';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    isAuthenticated && (
      <div
        style={{
          height: '603px',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <img src={user.picture} alt={user.name} />
        <h2>{`Name: ${user.name}`}</h2>
        <p>{`Email: ${user.email}`}</p>
        <p>
          {user.email_verified ? 'Email verified: ✔️' : 'Email verified: ❌'}
        </p>
        {/* <p>{`User Information: ${JSON.stringify(user, null, 2)}`}</p> */}
      </div>
    )
  );
};

export default Profile;
