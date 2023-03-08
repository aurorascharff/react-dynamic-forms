import axios from 'axios';
import type { DynamicFieldData } from '../models/dynamic-control-types';

export async function getFormFields() {
  return await axios.get<DynamicFieldData[]>('/api/fields');
}

export async function addCustomFormField(field: DynamicFieldData) {
  return await axios.post<DynamicFieldData[]>('/api/fields', field);
}
