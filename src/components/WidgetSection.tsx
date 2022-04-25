import React from 'react';
import { Link } from 'react-router-dom';

interface WidgetSectionProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

interface WidgetItemProps {
  children?: JSX.Element | JSX.Element[];
  isPostItem?: boolean;
  postDate?: string | Date;
  postLink?: string;
  postThumbImgSrc?: string;
  postSmallDescription?: string;
}

export const WidgetLinkList = ({
  list
}: {
  list: Array<{ content: any; href: string }>;
}) => {
  return (
    <ul>
      {list.map(({ content, href }, intx) => (
        <li key={intx}>
          <Link key={intx} to={href}>
            {content}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const WidgetItem: React.FC<WidgetItemProps> = ({
  children,
  isPostItem,
  postLink = '',
  postDate,
  postSmallDescription,
  postThumbImgSrc
}) => {
  return (
    <article className="item">
      {isPostItem && (
        <>
          <Link to={postLink} className="thumb">
            <span
              style={{ backgroundImage: `url(${postThumbImgSrc})` }}
              className="fullimage cover bg2"
              role="img"
            ></span>
          </Link>
          <div className="info">
            <span>{postDate}</span>
            <h4 className="title usmall">
              <Link to={postLink}>{postSmallDescription}</Link>
            </h4>
          </div>
        </>
      )}
      {children}
    </article>
  );
};

const WidgetSection = ({ title, children }: WidgetSectionProps) => {
  return (
    <section className="widget">
      <h3 className="widget-title">{title}</h3>
      {children}
    </section>
  );
};

export default WidgetSection;
