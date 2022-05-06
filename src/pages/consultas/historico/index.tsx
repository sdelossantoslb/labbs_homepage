import React, { useState } from 'react';
import SectionContainer from 'src/components/SectionContainer';
import useNotification from 'src/hooks/useNotification';
import { getHistoricoLabbs } from 'src/services';
import { PostConsultaHistorico, ResultConsultaHistorico } from 'src/types';
import FormConsultaHistorico from '../components/FormConsultaHistorico';
import ResultadoHistoricoView from '../components/ResultadoHistorico';

const HistoricoPage = () => {
  const notify = useNotification();
  const [currentHistorico, setCurrentHistorico] =
    useState<ResultConsultaHistorico>();

  const handleConsulta = (form: PostConsultaHistorico) => {
    getHistoricoLabbs(form).then((result) => {
      //@ts-ignore
      if (result == null || result == '') {
        notify.warning(
          'Datos no encontrados',
          'No se han encontrado datos con la información suministrados'
        );
        return;
      }
      setCurrentHistorico(result);
    });
  };

  return (
    <>
      {/* <PageTitleArea title="Consultas" imgSrc="" /> */}
      <SectionContainer
        enableBgGrey={true}
        sectionSubTitle="Consulta de Información"
        sectionTitle="Historico de Pagos"
      >
        {currentHistorico === undefined ? (
          <FormConsultaHistorico onFormSubmit={handleConsulta} />
        ) : (
          <ResultadoHistoricoView
            goBackClick={() => setCurrentHistorico(undefined)}
            result={currentHistorico}
          />
        )}
      </SectionContainer>
    </>
  );
};

export default HistoricoPage;
