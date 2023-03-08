import { Box } from '@mui/material';
import React from 'react';
import AddCustomFieldButton from '../components/AddCustomFieldButton';
import FormSubmission from '../components/FormSubmission';

export default function FormPage() {
  return (
    <div className="page-container">
      <Box>
        <AddCustomFieldButton />
        <FormSubmission />
      </Box>
    </div>
  );
}
