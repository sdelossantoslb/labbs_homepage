import { locate } from './locate';

const esLang: locate = {
  homeMenuText: 'Inicio',
  aboutUsMenuText: 'Nosotros',
  servicesMenuText: 'Servicios',
  comunicationsMenuText: 'Comunidad',
  onlineAppointmentText: 'Cita Online',
  contactUsMenuText: 'Contactanos',
  carrouseSolutionsHeader: 'Empresa Soluciones de TI y servicios de negocios.',
  carrouseSolutionDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna
    aliqua, magna aliqua. ipsum is simply dummy text of the
    printing.`,
  buttonContactUs: 'Contactanos',
  buttonAbouttUs: 'Sobre Nosotros',
  ourServicesHeader: 'Nuestros Servicios',
  ourServicesSubHeader: 'Que Ofrecemos?',
  ourServicesProvided: [
    {
      icon: 'FaTools',
      title: 'Prueba Balística',
      descripcion: `La prueba balística es el requisito de mayor escala para la emisión, 
        traspaso o renovación de la licencia por porte de arma de fuego. La misma consiste en la correlación de los datos 
        del arma (modelo, marca, serie, calibre y huella balística) con los datos biométricos y las informaciones personales sociodemográficas del usuario.`,
      showMoreLinks: [
        {
          label: 'Realice su pago online(traspaso)',
          link: 'https://mipenlinea.gob.do/Servicios/Solicitudes/RenovacionArma.aspx?opc=2'
        },
        {
          label: 'Realice su pago online(renovación)',
          link: 'https://mipenlinea.gob.do/Servicios/Solicitudes/RenovacionArma.aspx?opc=1'
        }
      ]
    },
    {
      icon: 'FaConnectdevelop',
      title: 'Examen de Dopping',
      descripcion: `La prueba antidoping, es el examen químico que corresponde a la detección en la orina de sustancias químicas (drogas ilegales u otros fármacos controlados).`
    }
  ],
  aboutOurDescription: '',
  aboutOurHeader: '',
  aboutUsDescription:
    'El Laboratorio Balístico y Biométrico del Sistema Nacional de Armas (LABBS), nace como un apoyo del Plan de Seguridad Ciudadana para el Control de Armas de Fuego en la República Dominicana; enlazando las informaciones sociodemográficas y biométricas de los licenciatarios con las huellas balísticas de las armas. Estas relaciones conforman una base de datos nacional de las armas legales, que sirve como instrumento con valor estratégico para las autoridades estatales.',
  aboutUsHeader: '',
  addressLable: '',
  companyDescripcion: '',
  companyName: '',
  companyType: '',
  contactUsHeader: '',
  labelAboutOur: '',
  phoneLable: '',
  recemtBlogSubHeader: '',
  recentBlogHeader: ''
};

export default esLang;
