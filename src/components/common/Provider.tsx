import { createContext, useState, ReactNode } from "react";

const INITIAL_STATE = {
  hiddenTempValue: false,
  setHiddenTempValue: () => {}
}

type Props = {
  children: ReactNode
}

export type IContextType = {
  hiddenTempValue: boolean
  setHiddenTempValue: React.Dispatch<React.SetStateAction<boolean>>
}

export const HiddenTemplateContext = createContext<IContextType>(INITIAL_STATE);

const Provider = ({ children } : Props) => {
  const [hiddenTempValue, setHiddenTempValue] = useState<boolean>(false);
  
  return (
    <HiddenTemplateContext.Provider value={{hiddenTempValue, setHiddenTempValue}}>
      {children}
    </HiddenTemplateContext.Provider>
  );
};

export default Provider;
