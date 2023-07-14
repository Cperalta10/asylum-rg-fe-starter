import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { colors } from '../../styles/data_vis_colors';
const { primary_accent_color } = colors;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      style={{
        color: '#E2F0F7',
        textDecoration: 'none',
        backgroundColor: primary_accent_color,
        border: 'none',
        // paddingRight: '75px',
        cursor: 'pointer',
      }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
