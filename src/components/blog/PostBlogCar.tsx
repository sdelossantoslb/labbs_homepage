import React from 'react';
import { FaCalendarWeek, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BaseComponentProps } from 'src/types';

interface PostBlogCarProps extends BaseComponentProps {
  PostImgURL?: string;
  PostTitle: string;
  PostLink?: string;
  isExternalLink?: boolean;
  PostResume?: string;
  Author?: string;
  PostDate?: Date | string;
  PostIdentification?: string;
}

interface PostLinkProps {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  link: string;
  isExternalLink?: boolean;
}

const PostLinkComponent = ({
  children,
  link,
  className,
  isExternalLink
}: PostLinkProps) =>
  isExternalLink ? (
    <a href={link} target={'_blank'} className={className}>
      {children}
    </a>
  ) : (
    <Link to={link} className={className}>
      {children}
    </Link>
  );

const PostBlogCar = ({
  Author,
  PostDate,
  PostResume,
  PostImgURL,
  PostTitle,
  isExternalLink = true,
  PostLink = '',
  className
}: PostBlogCarProps) => {
  return (
    <div className={`${className} blog-item`}>
      {PostImgURL && (
        <div className="blog-image">
          <PostLinkComponent isExternalLink={isExternalLink} link={PostLink}>
            <img src={PostImgURL} />
          </PostLinkComponent>
        </div>
      )}
      <div className="single-blog-item">
        <ul className="blog-list">
          {Author && (
            <li>
              <a href="#">
                <FaUserAlt /> {Author}
              </a>
            </li>
          )}
          {PostDate && (
            <li>
              <a href="#">
                <FaCalendarWeek />
                {PostDate}
              </a>
            </li>
          )}
        </ul>
        <div className="blog-content">
          <h3>
            <PostLinkComponent isExternalLink={isExternalLink} link={PostLink}>
              {PostTitle}
            </PostLinkComponent>
          </h3>
          <p>{(PostResume || '').substring(0, 250)}...</p>
          <div className="blog-btn">
            <PostLinkComponent
              isExternalLink={isExternalLink}
              link={PostLink}
              className="blog-btn-one"
            >
              Ver Mas
            </PostLinkComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBlogCar;
