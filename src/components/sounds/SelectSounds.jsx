import React from 'react';
import ReactHowler from 'react-howler';

import { useSfx } from 'contexts/sfxContext';
import selectMp3 from 'assets/sounds/select.mp3';

const SelectSounds = () => {
  const { selectSounds } = useSfx();

  return (
    <>
      {selectSounds.map(() => (
        <ReactHowler
          src={selectMp3}
          volume={0.5}
          key={`select-sound-${Math.random()}`}
        />
      ))}
    </>
  );
};

export default SelectSounds;
