import { ArchivosDescargables } from 'src/types';
import $fetch from '../conf/axios.http';

export const GetDocumentosLabbs = () => {
  return $fetch
    .get<ArchivosDescargables[]>('/docs/legal/labbs')
    .then((response) => response.data);
};
