export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface PostConsultaHistorico {
  documento: string;
  serie: string;
  reciboPago: string;
}

export interface ResultConsultaHistorico {
  NombrePersona?: string;
  ApellidoPerson?: string;
  HistoricoPagoLabbs: Array<HistoricoPagos>;
}

export interface HistoricoPagos {
  FechaPago: Date;
  FechaLabbs: Date;
  Estado: string;
}

export interface ArchivosDescargables {
  FileUrl: string;
  FileName: string;
}

export interface PostBodyContent {
  Descripcions: string[];
  ImagesSrc?: string[];
}
export interface PostNewsData {
  Title: string;
  PostUrl: string;
  IsExternalLink: boolean;
  Descripcions?: string;
  Author?: string;
  Date?: string;
  PortraitImage?: string;
  BodyContent?: PostBodyContent[];
}
export interface FrecuentQuestions {
  Questions: string;
  Answer?: string;
}
