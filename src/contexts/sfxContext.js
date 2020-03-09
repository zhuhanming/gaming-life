import React, { useState } from 'react';

const SfxContext = React.createContext();

const SfxProvider = props => {
  const [bumpSounds, setBumpSounds] = useState([]);
  const [selectSounds, setSelectSounds] = useState([]);
  const [menuSounds, setMenuSounds] = useState([]);
  const [correctSounds, setCorrectSounds] = useState([]);
  const [wrongSounds, setWrongSounds] = useState([]);

  const makeBumpSound = () => {
    setBumpSounds([1]);
    setTimeout(() => {
      setBumpSounds([]);
    }, 300);
    console.log(bumpSounds);
  };

  const makeSelectSound = () => {
    setSelectSounds([1]);
    setTimeout(() => {
      setSelectSounds([]);
    }, 250);
  };

  const makeMenuSound = () => {
    setMenuSounds([1]);
    setTimeout(() => {
      setMenuSounds([]);
    }, 90);
  };

  const makeCorrectSound = () => {
    setCorrectSounds([1]);
    setTimeout(() => {
      setCorrectSounds([]);
    }, 1500);
  };

  const makeWrongSound = () => {
    setWrongSounds([1]);
    setTimeout(() => {
      setWrongSounds([]);
    }, 1000);
  };

  return (
    <SfxContext.Provider
      value={{
        bumpSounds,
        selectSounds,
        menuSounds,
        correctSounds,
        wrongSounds,
        makeBumpSound,
        makeCorrectSound,
        makeMenuSound,
        makeSelectSound,
        makeWrongSound
      }}
      {...props}
    />
  );
};

const useSfx = () => {
  const context = React.useContext(SfxContext);
  if (context === undefined) {
    throw new Error(`useSfx must be used within a SfxProvider`);
  }
  return context;
};

export { SfxProvider, useSfx };
