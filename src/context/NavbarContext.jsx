import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [newClass, setNewClass] = useState(false);

  return (
    <NavbarContext.Provider value={{ newClass, setNewClass }}>
      {children}
    </NavbarContext.Provider>
  );
};
