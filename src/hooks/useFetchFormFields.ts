import { useQuery } from 'react-query';
import { getFormFields } from '../api/api-calls';

export default function useFetchFormFields() {
  return useQuery('templates', () => {
    return getFormFields();
  });
}
