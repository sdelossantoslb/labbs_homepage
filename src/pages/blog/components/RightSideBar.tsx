import React from 'react';
import SearchInput from 'src/components/ui/SearchInput';

const RightSideBar = () => {
  return (
    <aside className="widget-area" id="secondary">
      {/* <section className="widget widget_search">
        <SearchInput />
      </section> */}
      <section className="widget widget_techvio_posts_thumb">
        <h3 className="widget-title">Popular Posts</h3>
        <article className="item">
          <a href="#" className="thumb">
            <span className="fullimage cover bg1" role="img"></span>
          </a>
          <div className="info">
            <span>June 10, 2021</span>
            <h4 className="title usmall">
              <a href="#">5 Technology Considerations for Office Relocations</a>
            </h4>
          </div>
        </article>
        <article className="item">
          <a href="#" className="thumb">
            <span className="fullimage cover bg2" role="img"></span>
          </a>
          <div className="info">
            <span>June 15, 2021</span>
            <h4 className="title usmall">
              <a href="#">Everything you need to know about geo-blocking</a>
            </h4>
          </div>
        </article>
        <article className="item">
          <a href="#" className="thumb">
            <span className="fullimage cover bg3" role="img"></span>
          </a>
          <div className="info">
            <span>June 25, 2021</span>
            <h4 className="title usmall">
              <a href="#">Machine Learning Applications for Every Industry</a>
            </h4>
          </div>
        </article>
      </section>
      <section className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>
        <ul>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Guide</a>
          </li>
          <li>
            <a href="#">Uncategorized</a>
          </li>
        </ul>
      </section>
      <section className="widget widget_recent_entries">
        <h3 className="widget-title">Recent Posts</h3>
        <ul>
          <li>
            <a href="#">Machine Learning Applications for Every Industry</a>
          </li>
          <li>
            <a href="#">5 Technology Considerations for Office Relocations</a>
          </li>
          <li>
            <a href="#">5 Technology Considerations for Office Relocations</a>
          </li>
          <li>
            <a href="#">A business guide to purchasing technology</a>
          </li>
          <li>
            <a href="#">Announcing Our New Smiles for Success Charity</a>
          </li>
        </ul>
      </section>
      <section className="widget widget_archive">
        <h3 className="widget-title">Archives</h3>
        <ul>
          <li>
            <a href="#">June 2021</a>
          </li>
          <li>
            <a href="#">July 2021</a>
          </li>
          <li>
            <a href="#">August 2021</a>
          </li>
        </ul>
      </section>
      <section className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>
        <div className="tagcloud section-bottom">
          <a href="#">
            IT
            <span className="tag-link-count"> (7)</span>
          </a>
          <a href="#">
            Technology
            <span className="tag-link-count"> (10)</span>
          </a>
          <a href="#">
            Applications
            <span className="tag-link-count"> (15)</span>
          </a>
          <a href="#">
            Solutions
            <span className="tag-link-count"> (30)</span>
          </a>
          <a href="#">
            Overview
            <span className="tag-link-count"> (10)</span>
          </a>
          <a href="#">
            Industry
            <span className="tag-link-count"> (12)</span>
          </a>
          <a href="#">
            Marketing
            <span className="tag-link-count"> (7)</span>
          </a>
          <a href="#">
            Guide
            <span className="tag-link-count"> (3)</span>
          </a>
        </div>
      </section>
    </aside>
  );
};

export default RightSideBar;
