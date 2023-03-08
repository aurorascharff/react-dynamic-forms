import axios from 'axios';
import type { DynamicFieldData } from '../models/dynamic-control-types';

export async function getFormFields() {
  return await axios.get<DynamicFieldData[]>(import.meta.env.VITE_API_URL);
}

export async function addCustomFormField(field: DynamicFieldData) {
  return await axios.post<DynamicFieldData[]>(import.meta.env.VITE_API_URL, field);
}
