import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import hotelsData from "../data/HotelsData.json";

interface Hotel {
  id: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  details: string;
  price: string;
  readMore: string;
}

interface HotelsContextType {
  hotels: Hotel[];
  setCurrentHotels: Dispatch<SetStateAction<Hotel[]>>;
}

export const HotelsContext = createContext<HotelsContextType>({
  hotels: [],
  setCurrentHotels: () => {},
});

export const useHotelsContext = () => {
  const context = useContext(HotelsContext);
  if (context === undefined) {
    throw new Error("useHotelsContext must be used within a HotelsProvider");
  }
  return context;
};

interface HotelsProviderProps {
  children: ReactNode;
}

const HotelsProvider: React.FC<HotelsProviderProps> = ({ children }) => {
  const [hotels, setCurrentHotels] = useState<Hotel[]>(hotelsData as Hotel[]);

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        setCurrentHotels,
      }}>
      {children}
    </HotelsContext.Provider>
  );
};
export default HotelsProvider;
