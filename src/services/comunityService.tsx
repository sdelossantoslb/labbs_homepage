import { FrecuentQuestions, PostNewsData } from 'src/types';

import $fetch, { API_URL } from '../conf/axios.http';
export const getBaseURL = (url: string) => `${API_URL}/docs${url}`;

export async function GetFAQ(): Promise<FrecuentQuestions[]> {
  return [];
}
export async function GetNewPosts(): Promise<PostNewsData[]> {
  return [];
  //   return $fetch
  //     .get<ArchivosDescargables[]>(getBaseURL('/legal/labbs'))
  //     .then((response) => response.data);
}
