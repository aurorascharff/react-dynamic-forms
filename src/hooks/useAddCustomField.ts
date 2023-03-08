import { useMutation } from 'react-query';
import { queryClient } from '../App';
import { addCustomFormField } from '../api/api-calls';
import type { DynamicFieldData } from '../models/dynamic-control-types';

export default function useAddCustomFormField() {
  return useMutation(
    field => {
      return addCustomFormField(field);
    },
    {
      onMutate: async (field: DynamicFieldData) => {
        await queryClient.cancelQueries('templates');
        const backup = queryClient.getQueryData<{ data: DynamicFieldData[] }>('templates');
        if (backup) {
          queryClient.setQueryData<{ data: DynamicFieldData[] }>(['templates'], {
            data: [...backup.data, field],
          });
        }
        return { backup };
      },
      onError: (err, hero, context) => {
        if (context?.backup) {
          queryClient.setQueryData<{ data: DynamicFieldData[] }>(['templates'], context.backup);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(['templates']);
      },
    },
  );
}
