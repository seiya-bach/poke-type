import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from 'components/atoms/Logo'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ポケモンのタイプが覚えられない.com
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}