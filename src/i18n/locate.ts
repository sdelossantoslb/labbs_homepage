export interface locate {
  companyName: string;
  homeMenuText: string;
  aboutUsMenuText: string;
  servicesMenuText: string;
  comunicationsMenuText: string;
  contactUsMenuText: string;
  onlineAppointmentText: string;
  buttonContactUs: string;
  buttonAbouttUs: string;
  carrouseSolutionsHeader: string;
  carrouseSolutionDescription: string;
  ourServicesHeader: string;
  ourServicesSubHeader: string;
  ourServicesProvided: Array<{
    icon?: any;
    title: string;
    descripcion: string;
    showMoreLinks?: Array<{ label: string; link: string }>;
  }>;
  labelAboutOur: string;
  aboutOurHeader: string;
  aboutOurDescription: string;
  recentBlogHeader: string;
  recemtBlogSubHeader: string;
  companyType: string;
  companyDescripcion: string;
  aboutUsDescription: string;
  aboutUsHeader: string;
  contactUsHeader: string;
  phoneLable: string;
  addressLable: string;
}
