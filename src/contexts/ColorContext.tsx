import { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextType {
  background: string;
  text: string;
  gold: string;
  setBackground: (color: string) => void;
  setText: (color: string) => void;
  setGold: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider = ({ children }: ColorProviderProps) => {
  const [background, setBackground] = useState('#fefefe');
  const [text, setText] = useState('#223865');
  const [gold, setGold] = useState('#681213');

  return (
    <ColorContext.Provider
      value={{
        background,
        text,
        gold,
        setBackground,
        setText,
        setGold,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
