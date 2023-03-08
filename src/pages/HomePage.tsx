import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="page-container">
      <Box>
        <Typography variant="h5" component="h1" sx={{ mb: '2rem' }}>
          Home
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: '2rem' }}>
          Dynamic form rendering based on JSON schema with React Query, React Hook Forms and Material UI
        </Typography>
        <Box>
          <Link
            color="inherit"
            href="
          https://github.com/aurorawalberg/react-dynamic-forms
          "
          >
            GitHub repo
          </Link>
          <br />
          <Link
            color="inherit"
            href="
          https://my-json-server.typicode.com/aurorawalberg/json-server
          "
          >
            Json server
          </Link>
        </Box>
      </Box>
    </div>
  );
}
