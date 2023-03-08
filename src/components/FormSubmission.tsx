import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import useFetchFormFields from '../hooks/useFetchFormFields';
import DynamicField from './DynamicField';
import type { DynamicFieldData } from '../models/dynamic-control-types';

export default function FormSubmission() {
  const formMethods = useForm();

  const {
    formState: { isValid, errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = formMethods;

  const { status, data: fields } = useFetchFormFields();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      {status === 'loading' ? (
        <p>Loading... Please wait...</p>
      ) : (
        <Box sx={{ maxWidth: '30rem' }}>
          <Typography variant="h5" component="h1" sx={{ mb: '2rem' }}>
            Register
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
            <FormProvider {...formMethods}>
              {fields?.data.map((field: DynamicFieldData, index: number) => {
                return <DynamicField key={index} errors={errors} field={field} />;
              })}
            </FormProvider>
            <Button type="submit" disabled={!isValid}>
              Submit
            </Button>
            <Button type="reset" variant={'outlined'}>
              Reset
            </Button>
          </form>
        </Box>
      )}
    </div>
  );
}
