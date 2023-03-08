import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAddCustomFormField from '../hooks/useAddCustomField';
import { CustomFieldSchema } from '../validations/customField';
import type { DynamicFieldData } from '../models/dynamic-control-types';
import type { CustomFieldSchemaType } from '../validations/customField';

export default function AddCustomFieldButton() {
  const options = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
  ];

  const {
    formState: { isValid, isSubmitSuccessful },
    register,
    handleSubmit,
    reset,
  } = useForm<CustomFieldSchemaType>({
    resolver: zodResolver(CustomFieldSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const { mutate: addCustomFormField } = useAddCustomFormField();

  const onSubmitHandler = (values: CustomFieldSchemaType) => {
    console.log(values);
    addCustomFormField({
      fieldName: values.fieldName,
      inputType: values.fieldType as 'text' | 'number',
      label: values.fieldName.charAt(0).toUpperCase() + values.fieldName.slice(1),
      defaultValue: '',
    } as DynamicFieldData);
  };

  return (
    <Box
      sx={{
        mt: '2rem',
      }}
    >
      <Typography variant="h6" component="h2" sx={{ mb: '1rem' }}>
        Custom field
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Select
          sx={{ mr: 2 }}
          label="Field type"
          id="fieldType"
          {...register('fieldType', { required: true })}
          defaultValue={options[0].value}
        >
          {options.map((o, index) => {
            return (
              <MenuItem key={index} value={o.value}>
                {o.label}
              </MenuItem>
            );
          })}
        </Select>
        <TextField label="Field name" id="fieldName" {...register('fieldName', { required: true })} sx={{ mr: 2 }} />
        <Button type="submit" disabled={!isValid} variant={'outlined'}>
          Add
        </Button>
      </form>
    </Box>
  );
}
