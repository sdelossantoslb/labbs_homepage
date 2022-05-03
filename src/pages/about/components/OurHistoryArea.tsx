import React from 'react';
import OverViewContent from 'src/components/OverViewContent';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';

const history = `El Laboratorio Balístico y Biométrico del Sistema Nacional de Armas (LABBS), nace como un apoyo del Plan de Seguridad Ciudadana para el Control de Armas de Fuego en 
la República Dominicana; enlazando las informaciones sociodemográficas y biométricas de los licenciatarios con las huellas balísticas de las armas. Estas relaciones conforman una base 
de datos nacional de las armas legales, que sirve como instrumento con valor estratégico para las autoridades estatales. \n
El LABBS funge como un centro de servicios y atención al usuario (licenciatarios de armas de fuegos legales) conformada por una suite informática que opera con la 
integración de varios subsistemas que permite la gestión operativa con todas las funcionalidades de interconexión segura y continuidad de negocios: un subsistema de captura y 
comparación balística, un subsistema de captura y comparación biométrica, y un subsistema integrador y administrador de las bases de datos.
`;

const OurHistoryArea = () => {
  return (
    <SectionContainer
      sectionSubTitle="Cómo Iniciamos?"
      sectionTitle="Nuestra Historia"
    >
      <p>
        El Laboratorio Balístico y Biométrico del Sistema Nacional de Armas
        (LABBS), nace como un apoyo del Plan de Seguridad Ciudadana para el
        Control de Armas de Fuego en la República Dominicana; enlazando las
        informaciones sociodemográficas y biométricas de los licenciatarios con
        las huellas balísticas de las armas. Estas relaciones conforman una base
        de datos nacional de las armas legales, que sirve como instrumento con
        valor estratégico para las autoridades estatales.
      </p>
      <p>
        El LABBS funge como un centro de servicios y atención al usuario
        (licenciatarios de armas de fuegos legales) conformada por una suite
        informática que opera con la integración de varios subsistemas que
        permite la gestión operativa con todas las funcionalidades de
        interconexión segura y continuidad de negocios: un subsistema de captura
        y comparación balística, un subsistema de captura y comparación
        biométrica, y un subsistema integrador y administrador de las bases de
        datos.
      </p>
    </SectionContainer>
  );
};

export default OurHistoryArea;
