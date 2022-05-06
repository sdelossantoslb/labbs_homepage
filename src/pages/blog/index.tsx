import React, { useEffect, useState } from 'react';
import PageTitleArea from 'src/components/PageTitleArea';
import SectionContainer from 'src/components/SectionContainer';
import FAQSection from './components/FAQSection';
import { FrecuentQuestions } from 'src/types';
import { GetFAQ } from 'src/services/comunityService';
import PostNewsSection from '../home/components/PostNewsSection';
import imgAbout from 'src/assets/images/about/about_team.jpeg';

const BlogPage: React.FC = () => {
  const [FAQList, setFAQList] = useState<FrecuentQuestions[]>([]);

  useEffect(() => {
    GetFAQ().then((faq) => setFAQList(faq));
  });

  return (
    <>
      <PageTitleArea title="Nuestra Comunidad" imgSrc={imgAbout} />
      {FAQList.length > 0 && (
        <SectionContainer
          enableBgGrey={true}
          sectionSubTitle="Que te gustaria saber?"
          sectionTitle="Preguntas Frecuetes"
        >
          <FAQSection faqList={FAQList} />
        </SectionContainer>
      )}
      <PostNewsSection />
    </>
  );
};

export default BlogPage;
