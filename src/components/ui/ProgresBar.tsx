import React from 'react';

interface ProgressBarProps {
  percent: number;
}
const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="skill-progress">
      <div className="progres" data-value={`${percent}%`}></div>
    </div>
  );
};

export default ProgressBar;
