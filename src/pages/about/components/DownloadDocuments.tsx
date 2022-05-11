import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import SectionContainer from 'src/components/SectionContainer';
import AccordionContent, {
  AccordionItem
} from 'src/components/ui/AccordionContent';
import {
  getBaseURL,
  GetDocumentosLabbs
} from 'src/services/documentosServices';
import { ArchivosDescargables } from 'src/types';

const DownloadDocuments = () => {
  const [listFiles, setListFiles] = useState<ArchivosDescargables[]>([]);
  const api = getBaseURL('/legal/download');

  useEffect(() => {
    GetDocumentosLabbs().then((data) => {
      setListFiles(data);
    });
  }, []);

  return (
    <SectionContainer sectionTitle="Marco Legal">
      <AccordionContent>
        {listFiles.map((item, i) => {
          return (
            <AccordionItem
              openNewTab={true}
              title={item.FileName}
              href={`${api}?file=${item.FileName}`}
              icon={<FaDownload />}
            />
          );
        })}
      </AccordionContent>
    </SectionContainer>
  );
};

export default DownloadDocuments;
