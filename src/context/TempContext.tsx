import React, { createContext, useState } from "react";
import { Temp } from "../types/TempEnums";
interface IContextValues {
    tempUnit: Temp;
    toggleMode: (val : Temp) => void
}

const initialValues = {
  tempUnit: Temp.Celsius,
  toggleMode: () => {}
} as IContextValues;

export const TempContext = createContext<IContextValues>(initialValues);

const { Provider } = TempContext;

interface TempContextProviderProps {
  children: React.ReactNode;
}

export const TempContextProvider = ({ children }: TempContextProviderProps) => {
  const [tempUnit, setTempUnit] = useState<Temp>(Temp.Celsius);

  const toggleMode = (val : Temp) => {
    setTempUnit(val)
  }

  return <Provider value={{ tempUnit , toggleMode}}>{children}</Provider>;
};
