import {
  HotwaterSystem,
  LeakageDetection,
  CommercialPlumbing,
  IndustrialPlumbing,
  ResidentialPlumbing,
  RemoteareaPlumbing,
  BathroomKitchen,
  AnyotherRequests,
} from "./ServiceData";

type ServiceName =
  | "HotwaterSystem"
  | "LeakageDetection"
  | "CommercialPlumbing"
  | "IndustrialPlumbing"
  | "ResidentialPlumbing"
  | "RemoteareaPlumbing"
  | "BathroomKitchen"
  | "AnyotherRequests";


type ServiceData = {
  label: string;
  img: string;
  icons: string
};

const serviceOptions: Record<ServiceName, ServiceData> = {
  HotwaterSystem,
  LeakageDetection,
  CommercialPlumbing,
  IndustrialPlumbing,
  ResidentialPlumbing,
  RemoteareaPlumbing,
  BathroomKitchen,
  AnyotherRequests,
};


export const getServiceData = (serviceName: ServiceName) => {
  return serviceOptions[serviceName] || HotwaterSystem;
};
