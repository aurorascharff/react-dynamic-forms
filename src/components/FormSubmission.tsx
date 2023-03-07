import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInput, formSchema } from '../validations/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputBox from './InputBox';

export default function FormSubmission() {
  const {
    control,
    register,
    formState: { isValid, errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    watch,
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<FormInput> = values => {
    console.log(values);
  };

  return (
    <Box sx={{ maxWidth: '30rem' }}>
      <Typography variant="h5" component="h1" sx={{ mb: '2rem' }}>
        Register
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <InputBox register={register} name="firstName" label="First name" errors={errors} />
        <InputBox register={register} name="lastName" label="Last name" errors={errors} />
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
        <Button type="reset" variant={'outlined'}>
          Reset
        </Button>
      </form>
      <div>({JSON.stringify(watch())})</div>
    </Box>
  );
}
