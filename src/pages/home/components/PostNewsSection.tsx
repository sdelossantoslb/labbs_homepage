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

  const postColumn1 = postList.map((post, indx) => ({
    post,
    odd: indx % 2 > 0
  }));

  const postBody =
    postColumn1.length > 2 ? (
      <>
        <div className="col-lg-6 col-md-6">
          {postColumn1
            .filter((left) => left.odd)
            .map(({ post }, inx) => (
              <PostBlogCar
                key={inx}
                PostImgURL={post.PortraitImage}
                PostLink={post.PostUrl}
                isExternalLink={post.IsExternalLink}
                Author={post.Author}
                PostDate={post.Date}
                PostResume={post.Descripcions}
                PostTitle={post.Title}
              />
            ))}
        </div>
        <div className="col-lg-6 col-md-6">
          {postColumn1
            .filter((left) => !left.odd)
            .map(({ post }, inx) => (
              <PostBlogCar
                key={inx}
                PostImgURL={post.PortraitImage}
                PostLink={post.PostUrl}
                isExternalLink={post.IsExternalLink}
                Author={post.Author}
                PostDate={post.Date}
                PostResume={post.Descripcions}
                PostTitle={post.Title}
              />
            ))}
        </div>
      </>
    ) : postList.length === 1 ? (
      <div className="col-lg-12 col-md-12">
        <PostBlogCar
          PostImgURL={postList[0].PortraitImage}
          PostLink={postList[0].PostUrl}
          isExternalLink={postList[0].IsExternalLink}
          Author={postList[0].Author}
          PostDate={postList[0].Date}
          PostResume={postList[0].Descripcions}
          PostTitle={postList[0].Title}
        />
      </div>
    ) : (
      postList.map((post, inx) => (
        <div className="col-lg-6 col-md-6" key={inx}>
          <PostBlogCar
            PostImgURL={post.PortraitImage}
            PostLink={post.PostUrl}
            isExternalLink={post.IsExternalLink}
            Author={post.Author}
            PostDate={post.Date}
            PostResume={post.Descripcions}
            PostTitle={post.Title}
          />
        </div>
      ))
    );

  return postList.length > 0 ? (
    <SectionContainer
      sectionSubTitle="Noticias e Informaciones"
      sectionTitle="Ultimas Noticias"
    >
      <GridRow>{postBody}</GridRow>
    </SectionContainer>
  ) : null;
};

export default PostNewsSection;
