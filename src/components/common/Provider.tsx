import { createContext, useState } from "react";
export const HiddenTemplateContext = createContext(false);
const Provider = ({ children }) => {
  const [hiddenTempValue, setHiddenTempValue] = useState(false);
  return (
    <HiddenTemplateContext.Provider
      value={{hiddenTempValue, setHiddenTempValue}}>
      {children}
    </HiddenTemplateContext.Provider>
  );
};

export default Provider;
