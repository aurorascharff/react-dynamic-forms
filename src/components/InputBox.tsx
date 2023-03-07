import { ErrorMessage } from '@hookform/error-message';
import type { FormInput } from '../validations/schema';
import type { FieldErrorsImpl, UseFormRegisterReturn } from 'react-hook-form';
import { TextField } from '@mui/material';

type Props = {
  register: (val: any) => UseFormRegisterReturn<any>;
  name: string;
  label: string;
  errors: any;
};

const InputBox = ({ register, name, label, errors, ...rest }: Props) => {
  return (
    <TextField
      sx={{ mb: 2 }}
      label={label}
      fullWidth
      required
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : ''}
      {...register(name)}
    />
  );
};

export default InputBox;
