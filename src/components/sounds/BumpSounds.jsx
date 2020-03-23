import React from 'react';
import ReactHowler from 'react-howler';

import { useSfx } from 'contexts/sfxContext';
import bumpMp3 from 'assets/sounds/bump.mp3';

const BumpSounds = () => {
  const { bumpSounds } = useSfx();

  return (
    <>
      {bumpSounds.map(() => (
        <ReactHowler
          src={bumpMp3}
          volume={0.7}
          key={`bump-sound-${Math.random()}`}
        />
      ))}
    </>
  );
};

export default BumpSounds;
