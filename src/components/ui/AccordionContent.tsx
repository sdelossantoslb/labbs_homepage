import React from 'react';
interface AccordionItemProps {
  icon?: any;
  title: string;
  href?: string;
  openNewTab?: boolean;
  children?: JSX.Element | JSX.Element[];
  onClick?: (e: any) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  onClick,
  title,
  href = '',
  openNewTab,
  icon,
  children
}) => {
  return (
    <li onClick={onClick} className="accordion-item">
      <a
        className="accordion-title" rel="noreferrer"
        target={openNewTab ? '_blank' : '_self'}
        href={href}
      >
        {icon} {title}
      </a>
      {children}
    </li>
  );
};

interface AccordionProps {
  children?: JSX.Element | JSX.Element[];
}

const AccordionContent: React.FC<AccordionProps> = ({ children }) => {
  return (
    <div className="faq-accordion first-faq-box">
      <ul className="accordion">{children}</ul>
    </div>
  );
};

export default AccordionContent;
