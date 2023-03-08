import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import type { DynamicFieldData } from '../models/dynamic-control-types';

type Props = {
  field: DynamicFieldData;
  errors: any;
};

const DynamicField = ({ field, errors }: Props) => {
  const { register } = useFormContext();
  const { label, inputType, fieldName, defaultValue, options = [], config } = field;

  switch (inputType) {
    case 'select': {
      return (
        <FormControl fullWidth>
          <InputLabel id={fieldName}>{label}</InputLabel>
          <Select
            sx={{ mb: 2 }}
            label={label}
            defaultValue={defaultValue}
            type={inputType}
            error={!!errors[fieldName]}
            {...register(fieldName, config)}
          >
            {options.map((o, index) => {
              return (
                <MenuItem key={index} value={o.value}>
                  {o.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      );
    }
    default:
      return (
        <TextField
          sx={{ mb: 2 }}
          label={label}
          fullWidth
          defaultValue={defaultValue}
          type={inputType}
          error={!!errors[fieldName]}
          helperText={errors[fieldName] ? errors[fieldName].message : ''}
          {...register(fieldName, config)}
        />
      );
  }
};

export default DynamicField;
