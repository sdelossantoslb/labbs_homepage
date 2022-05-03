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
      <SectionContainer
        enableBgGrey={true}
        sectionSubTitle="Noticias e Informaciones"
        sectionTitle="Ultimas Noticias"
      >
        <BlogSection>
          <GridRow>
            <GridRow>
              <div className="col-lg-8 col-md-8">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <PostBlogCar
                  PostImgURL={tmpBlogImage}
                  Author="Author"
                  PostDate={'20 Jun 2022'}
                  PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
                  PostTitle="Announcing Our New Smiles for Success Charity"
                />
              </div>
            </GridRow>
            {/* <div className="col-lg-4 col-md-12">
            <RightSideBar />
          </div> */}
          </GridRow>
        </BlogSection>
      </SectionContainer>
    </>
  );
};

export default BlogPage;
