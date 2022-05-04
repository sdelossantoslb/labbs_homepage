import React from 'react';
import { FaPlus } from 'react-icons/fa';
import AccordionContent, {
  AccordionItem
} from 'src/components/ui/AccordionContent';
import { FrecuentQuestions } from 'src/types';

const FAQSection = ({ faqList }: { faqList: FrecuentQuestions[] }) => {
  return (
    <div className="faq-accordion first-faq-box">
      <AccordionContent>
        {faqList.map((faq) => {
          return (
            <AccordionItem title={faq.Questions} icon={<FaPlus />}>
              <p className="accordion-content">{faq.Answer}</p>
            </AccordionItem>
          );
        })}
      </AccordionContent>
    </div>
  );
};

export default FAQSection;
