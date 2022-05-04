import React, { useEffect, useState } from 'react';
import PostBlogCar from 'src/components/blog/PostBlogCar';
import SectionContainer from 'src/components/SectionContainer';
import tmpBlogImage from 'src/assets/images/blog/blog-2.jpg';
import { GridRow } from 'src/components/ui/Bootstrap';
import { PostNewsData } from 'src/types';
import { GetNewPosts } from 'src/services/comunityService';
const PostNewsSection = () => {
  const [postList, setPostList] = useState<PostNewsData[]>([]);

  useEffect(() => {
    GetNewPosts().then((posts) => setPostList(posts));
  });

  return postList.length > 0 ? (
    <SectionContainer
      sectionSubTitle="Noticias e Informaciones"
      sectionTitle="Ultimas Noticias"
    >
      <GridRow>
        {postList.map((post, inx) => {
          return (
            <div className="col-lg-4 col-md-6" key={inx}>
              <PostBlogCar
                PostImgURL={post.PortraitImage}
                Author={post.Author}
                PostDate={post.Date}
                PostResume={post.Descripcions}
                PostTitle={post.Title}
              />
            </div>
          );
        })}
      </GridRow>
    </SectionContainer>
  ) : null;
};

export default PostNewsSection;
