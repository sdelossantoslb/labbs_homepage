import React from 'react';
import { FaPlus } from 'react-icons/fa';
import AccordionContent, {
  AccordionItem
} from 'src/components/ui/AccordionContent';

const FAQSection = () => {
  return (
    <div className="faq-accordion first-faq-box">
      <AccordionContent>
        <AccordionItem title="Pregunta 1" icon={<FaPlus />}>
          <p className="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa officia deserunt mollit anim id est laborum.
          </p>
        </AccordionItem>
        <AccordionItem title="Pregunta 2" icon={<FaPlus />}>
          <p className="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa officia deserunt mollit anim id est laborum.
          </p>
        </AccordionItem>
      </AccordionContent>
    </div>
  );
};

export default FAQSection;
