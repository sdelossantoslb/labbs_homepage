import React from 'react';

interface SkillItemProps {
  textTitle: string;
  rightText?: string;
  children: JSX.Element | JSX.Element[] | React.ReactChildren;
}

export const SkillItem: React.FC<SkillItemProps> = ({
  textTitle,
  rightText,
  children
}) => {
  return (
    <div className="skill-item">
      <h6>
        {textTitle} {rightText && <em>{rightText}</em>}
      </h6>
      {children}
    </div>
  );
};

const SkillContent: React.FC<{
  children:
    | React.ReactElement<typeof SkillItem>
    | React.ReactElement<typeof SkillItem[]>
    | JSX.Element[];
}> = ({ children }) => {
  return <div className="skills">{children}</div>;
};
export default SkillContent;
