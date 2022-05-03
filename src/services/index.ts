import { PostConsultaHistorico, ResultConsultaHistorico } from 'src/types';
import $fetch from '../conf/axios.http';

export const getHistoricoLabbs = (filter: PostConsultaHistorico) => {
  const query = Object.keys(filter)
    .map((key) => key + '=' + filter[key as keyof PostConsultaHistorico])
    .join('&');
  return $fetch
    .get<ResultConsultaHistorico>(`/labbs/get/historico?${query}`)
    .then((response) => response.data);
};
