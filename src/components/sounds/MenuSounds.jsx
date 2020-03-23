import React from 'react';
import ReactHowler from 'react-howler';

import { useSfx } from 'contexts/sfxContext';
import menuMp3 from 'assets/sounds/menu-toggle.mp3';

const MenuSounds = () => {
  const { menuSounds } = useSfx();

  return (
    <>
      {menuSounds.map(() => (
        <ReactHowler
          src={menuMp3}
          volume={0.7}
          key={`menu-sound-${Math.random()}`}
        />
      ))}
    </>
  );
};

export default MenuSounds;
