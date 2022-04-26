import React from 'react';
import PostBlogCar from 'src/components/blog/PostBlogCar';
import PageTitleArea from 'src/components/PageTitleArea';
import { GridRow } from 'src/components/ui/Bootstrap';
import RightSideBar from './components/RightSideBar';
import tmpBlogImage from 'src/assets/images/blog/blog-2.jpg';
import BlogSection from '../pages-components/BlogSection';
import SectionContainer from 'src/components/SectionContainer';
import FAQSection from './components/FAQSection';

const BlogPage: React.FC = () => {
  return (
    <>
      <PageTitleArea title="Nuestra Comunidad" imgSrc="" />
      <SectionContainer
        enableBgGrey={true}
        sectionSubTitle="Que te gustaria saber?"
        sectionTitle="Preguntas Frecuetes"
      >
        <FAQSection />
      </SectionContainer>
      <BlogSection>
        <GridRow>
          <div className="col-lg-8 col-md-12">
            <GridRow>
              <div className="col-lg-12 col-md-12">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
            </GridRow>
          </div>
          <div className="col-lg-4 col-md-12">
            <RightSideBar />
          </div>
        </GridRow>
      </BlogSection>
    </>
  );
};

export default BlogPage;
