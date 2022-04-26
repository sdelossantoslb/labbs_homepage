import React from 'react';
import PageTitleArea from 'src/components/PageTitleArea';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import ContactUsForm from '../pages-components/forms/ContactUsForm';

const ContactPage = () => {
  return (
    <>
      <PageTitleArea title="Contacto" imgSrc="" />
      <SectionContainer
        sectionSubTitle="Alguna duda?"
        sectionTitle="Contactanos"
      >
        <GridRow className="align-items-cente">
          <ContactUsForm />
        </GridRow>
      </SectionContainer>
    </>
  );
};

export default ContactPage;
