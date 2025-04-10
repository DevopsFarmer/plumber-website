import {
  HotwaterSystem,
  LeakageDetection,
  CommercialPlumbing,
  IndustrialPlumbing,
  ResidentialPlumbing,
  RemoteareaPlumbing,
  BathroomKitchen,
  AnyotherRequests,
  Gas,
  Electric,
  HeatBank
} from "./PortfolioData";

type PortfolioName =
  | "HotwaterSystem"
  | "LeakageDetection"
  | "CommercialPlumbing"
  | "IndustrialPlumbing"
  | "ResidentialPlumbing"
  | "RemoteareaPlumbing"
  | "BathroomKitchen"
  | "AnyotherRequests"
  | "Gas"
  | "Electric"
  | "HeatBank";


type PortfolioData = {
  label: string;
  herotext: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  img: string;
  GalleryImg: string[];
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
  Gas,
  Electric,
  HeatBank
};


export const getPortfolioData = (portfolioName: PortfolioName): PortfolioData => {
  return portfolioOptions[portfolioName] || HotwaterSystem;
};
