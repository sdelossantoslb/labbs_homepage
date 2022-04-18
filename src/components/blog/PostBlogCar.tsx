import React from 'react';
import { FaCalendarWeek, FaUserAlt } from 'react-icons/fa';
import { BaseComponentProps } from 'src/types';

interface PostBlogCarProps extends BaseComponentProps {
  PostImgURL?: string;
  PostTitle?: string;
  PostResume?: string;
  Author?: string;
  PostDate?: Date | string;
  PostIdentification?: string;
}

const PostBlogCar = ({
  Author,
  PostDate,
  PostResume,
  PostIdentification,
  PostImgURL,
  PostTitle,
  className,
  style
}: PostBlogCarProps) => {
  return (
    <div className={`${className} blog-item`}>
      <div className="blog-image">
        <a href="single-blog.html">
          <img src={PostImgURL} alt="image" />
        </a>
      </div>
      <div className="single-blog-item">
        <ul className="blog-list">
          <li>
            <a href="#">
              <FaUserAlt /> {Author}
            </a>
          </li>
          <li>
            <a href="#">
              <FaCalendarWeek />
              {PostDate}
            </a>
          </li>
        </ul>
        <div className="blog-content">
          <h3>
            <a href="single-blog.html">{PostTitle}</a>
          </h3>
          <p>{PostResume}</p>
          <div className="blog-btn">
            <a href="single-blog.html" className="blog-btn-one">
              Ver Mas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBlogCar;
