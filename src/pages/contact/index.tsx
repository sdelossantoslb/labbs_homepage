import React from 'react';
import MapAreaContent from 'src/components/MapAreaContent';
import PageTitleArea from 'src/components/PageTitleArea';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import ContactUsForm from '../pages-components/forms/ContactUsForm';
import ContactInfo from './component/ContactInfo';

const ContactPage = () => {
  return (
    <>
      <PageTitleArea title="Contacto" imgSrc="" />
      <div className="contact-info-wrapper">
        <div className="container">
          <SectionContainer
            sectionSubTitle="Como llegar?"
            sectionTitle="Nuestra Ubicación"
          >
            <GridRow className="center-content">
              <div className="col-md-6">
                <ContactInfo
                  title="Santo Domingo Norte"
                  descripcion="Estamos ubicados en, Avenida México, #66, Gazcue, Santo Domingo, D.N. 10204, Justo detras del Ministerio de Educación Superior (MESCYT)"
                  phone="1-809-620-7462"
                  email="http://www.labbs.com.do/"
                />
              </div>
            </GridRow>
          </SectionContainer>

          <SectionContainer
            sectionSubTitle="Alguna duda?"
            sectionTitle="Escríbenos"
          >
            <GridRow className="align-items-cente">
              <ContactUsForm />
            </GridRow>
          </SectionContainer>
        </div>
      </div>
      <MapAreaContent />
    </>
  );
};

export default ContactPage;
