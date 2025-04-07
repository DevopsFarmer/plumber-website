import {
  HotwaterSystem,
  LeakageDetection,
  CommercialPlumbing,
  IndustrialPlumbing,
  ResidentialPlumbing,
  RemoteareaPlumbing,
  BathroomKitchen,
  AnyotherRequests,
} from "./PortfolioData";

type PortfolioName =
  | "HotwaterSystem"
  | "LeakageDetection"
  | "CommercialPlumbing"
  | "IndustrialPlumbing"
  | "ResidentialPlumbing"
  | "RemoteareaPlumbing"
  | "BathroomKitchen"
  | "AnyotherRequests";


type PortfolioData = {
  label: string;
  img: string;
  icons: string
};

const portfolioOptions: Record<PortfolioName, PortfolioData> = {
  HotwaterSystem,
  LeakageDetection,
  CommercialPlumbing,
  IndustrialPlumbing,
  ResidentialPlumbing,
  RemoteareaPlumbing,
  BathroomKitchen,
  AnyotherRequests,
};


export const getPortfolioData = (portfolioName: PortfolioName) => {
  return portfolioOptions[portfolioName] || HotwaterSystem;
};
