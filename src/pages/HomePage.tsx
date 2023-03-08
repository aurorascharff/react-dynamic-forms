import { Box, Typography } from '@mui/material';
import React from 'react';

export default function HomePage() {
  return (
    <div className="page-container">
      <Box>
        <Typography variant="h5" component="h1" sx={{ mb: '2rem' }}>
          Home
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: '2rem' }}>
          Dynamic form rendering based on JSON schema with Material UI and React Hook Forms
        </Typography>
      </Box>
    </div>
  );
}
