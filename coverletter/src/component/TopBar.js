import React from 'react';
import { Avatar, Stack } from '@mui/material';
class TopBar extends React.Component {
  render() {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Sankaranarayanan Veeraraj"
            src="/static/images/avatar/1.jpg"
          />
          <h1>Sankaranarayanan Veeraraj</h1>
        </Stack>
        <h5>Full-Stack Developer | Tech Lead</h5>
      </>
    );
  }
}

export default TopBar;
