import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { colors } from '../../styles/data_vis_colors';
const { primary_accent_color } = colors;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() => logout()}
      style={{
        color: '#E2F0F7',
        textDecoration: 'none',
        backgroundColor: primary_accent_color,
        border: 'none',
        // paddingRight: '75px',
        cursor: 'pointer',
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
