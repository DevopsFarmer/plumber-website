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
};


export const getPortfolioData = (portfolioName: PortfolioName): PortfolioData => {
  return portfolioOptions[portfolioName] || HotwaterSystem;
};
