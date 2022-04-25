import React from 'react';
import { Link } from 'react-router-dom';
import { BaseComponentProps } from 'src/types';
interface BoxGaleryProps extends BaseComponentProps {
  imageSr: string;
  showFooter?: boolean;
  showOverlapOptions?: boolean;
  overLapOptions?: Array<{ link: string; icon?: any; text?: string }>;
  footerTitle?: string;
  footerSubTitle?: string;
}

const BoxImageContent = ({
  imageSr,
  showFooter = false,
  showOverlapOptions = false,
  overLapOptions = [],
  footerTitle,
  footerSubTitle
}: BoxGaleryProps) => {
  return (
    <div className="single-team-box">
      <div className="team-image">
        <img src={imageSr} alt="team" />
        {showOverlapOptions && (
          <div className="team-social-icon">
            {overLapOptions.map((item, inx) => (
              <Link to={item.link} className={`social-color-${inx}`}>
                {item.icon} {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
      {showFooter && (
        <div className="team-info">
          <h3>{footerTitle}</h3>
          <span>{footerSubTitle}</span>
        </div>
      )}
    </div>
  );
};

export default BoxImageContent;
