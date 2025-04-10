import {
  CIVIL,
  COMMERCIAL,
  DOMESTIC,
  LPGANDNATURALGAS,
  DRAINAGE,
  SEWERCLEANING,
  CAMERAINSPECTION,
  MAINTENANCE,
} from "./ServiceData";

type ServiceName =
  | "CIVIL"
  | "COMMERCIAL"
  | "DOMESTIC"
  | "LPGANDNATURALGAS"
  | "DRAINAGE"
  | "SEWERCLEANING"
  | "CAMERAINSPECTION"
  | "MAINTENANCE";


type ServiceData = {
  label: string;
  img: string;
  icons: string
};

const serviceOptions: Record<ServiceName, ServiceData> = {
  CIVIL,
  COMMERCIAL,
  DOMESTIC,
  LPGANDNATURALGAS,
  DRAINAGE,
  SEWERCLEANING,
  CAMERAINSPECTION,
  MAINTENANCE,
};


export const getServiceData = (serviceName: ServiceName) => {
  return serviceOptions[serviceName] || CIVIL;
};
