import React from 'react';
interface BlogSectionProps {
  children?: JSX.Element | JSX.Element[];
}
const BlogSection: React.FC<BlogSectionProps> = ({ children }) => {
  return (
    <section className="blog-section pt-100 pb-100">
      <div className="container">{children}</div>
    </section>
  );
};

export default BlogSection;
