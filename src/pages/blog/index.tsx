import React, { useEffect, useState } from 'react';
import PostBlogCar from 'src/components/blog/PostBlogCar';
import PageTitleArea from 'src/components/PageTitleArea';
import { GridRow } from 'src/components/ui/Bootstrap';
import RightSideBar from './components/RightSideBar';
import tmpBlogImage from 'src/assets/images/blog/blog-2.jpg';
import SectionContainer from 'src/components/SectionContainer';
import FAQSection from './components/FAQSection';
import { FrecuentQuestions, PostNewsData } from 'src/types';
import { GetFAQ, GetNewPosts } from 'src/services/comunityService';
import PostNewsSection from '../home/components/PostNewsSection';

const BlogPage: React.FC = () => {
  const [FAQList, setFAQList] = useState<FrecuentQuestions[]>([]);

  useEffect(() => {
    GetFAQ().then((faq) => setFAQList(faq));
  });

  return (
    <>
      <PageTitleArea title="Nuestra Comunidad" imgSrc="" />
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
