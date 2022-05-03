import React, { useEffect, useState } from 'react';
import PageTitleArea from 'src/components/PageTitleArea';
import SectionContainer from 'src/components/SectionContainer';
import CardBoxContent from 'src/components/ui/CardBoxContent';
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
          'No se han encontrado datos con la información uministrados'
        );
        return;
      }
      setCurrentHistorico(result);
    });
  };

  console.log({ currentHistorico });
  return (
    <>
      <PageTitleArea title="Consultas" imgSrc="" />
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
