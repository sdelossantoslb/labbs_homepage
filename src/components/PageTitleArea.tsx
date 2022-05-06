import React from 'react';
import { BaseComponentProps } from 'src/types';
interface PageTitlePros extends BaseComponentProps {
  imgSrc: string;
  title: string;
  enableLabbsBg?: boolean;
}
const PageTitleArea = ({
  title,
  imgSrc,
  enableLabbsBg = true
}: PageTitlePros) => {
  return (
    <div
      className="page-title-area"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={`d-table ${enableLabbsBg && 'labbs-bg'}`}>
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitleArea;
