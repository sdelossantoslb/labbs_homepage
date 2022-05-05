import { FrecuentQuestions, PostNewsData } from 'src/types';

import $fetch, { API_URL } from '../conf/axios.http';
export const getBaseURL = (url: string) => `${API_URL}/comunity${url}`;

export async function GetFAQ(): Promise<FrecuentQuestions[]> {
  return $fetch
    .get<FrecuentQuestions[]>(getBaseURL('/faq'))
    .then((response) => response.data);
}
export async function GetNewPosts(): Promise<PostNewsData[]> {
  return $fetch
    .get<PostNewsData[]>(getBaseURL('/post/news'))
    .then((response) => response.data);
}
