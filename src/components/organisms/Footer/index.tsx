import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import * as React from 'react';

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={'primary'}>
                <Toolbar>
                    <Typography variant="body1" color="texstSecondary">
                        {'Copyright ©︎ OGAWORKS '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
