import React from 'react';
import PostBlogCar from 'src/components/blog/PostBlogCar';
import SectionContainer from 'src/components/SectionContainer';
import tmpBlogImage from 'src/assets/images/blog/blog-2.jpg';
import { GridRow } from 'src/components/ui/Bootstrap';
const BlogSection = () => {
  return (
    <SectionContainer
      sectionSubTitle="Blog & Article"
      sectionTitle="Recent Blog"
    >
      <GridRow>
        <div className="col-lg-4 col-md-6">
          <PostBlogCar
            PostImgURL={tmpBlogImage}
            Author="Author"
            PostDate={'20 Jun 2022'}
            PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
            PostTitle="Announcing Our New Smiles for Success Charity"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <PostBlogCar
            PostImgURL={tmpBlogImage}
            Author="Author"
            PostDate={'20 Jun 2022'}
            PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
            PostTitle="Announcing Our New Smiles for Success Charity"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <PostBlogCar
            PostImgURL={tmpBlogImage}
            Author="Author"
            PostDate={'20 Jun 2022'}
            PostResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt"
            PostTitle="Announcing Our New Smiles for Success Charity"
          />
        </div>
      </GridRow>
    </SectionContainer>
  );
};

export default BlogSection;
