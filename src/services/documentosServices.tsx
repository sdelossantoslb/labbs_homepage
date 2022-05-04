import { ArchivosDescargables } from 'src/types';
import $fetch, { API_URL } from '../conf/axios.http';
export const getBaseURL = (url: string) => `${API_URL}/docs${url}`;

export const GetDocumentosLabbs = () => {
  return $fetch
    .get<ArchivosDescargables[]>(getBaseURL('/legal/labbs'))
    .then((response) => response.data);
};
