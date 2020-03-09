import React from 'react';
import ReactHowler from 'react-howler';

import { useSfx } from 'contexts/sfxContext';
import bumpMp3 from 'assets/sounds/bump.mp3';
import selectMp3 from 'assets/sounds/select.mp3';
import menuMp3 from 'assets/sounds/menu-toggle.mp3';
import correctMp3 from 'assets/sounds/correct.mp3';
import wrongMp3 from 'assets/sounds/wrong.mp3';

const Sounds = () => {
  const {
    bumpSounds,
    selectSounds,
    correctSounds,
    wrongSounds,
    menuSounds
  } = useSfx();

  return (
    <>
      {bumpSounds.map(() => (
        <ReactHowler
          src={bumpMp3}
          volume={0.7}
          key={`bump-sound-${Math.random()}`}
        />
      ))}
      {selectSounds.map(() => (
        <ReactHowler
          src={selectMp3}
          volume={0.5}
          key={`select-sound-${Math.random()}`}
        />
      ))}
      {correctSounds.map(() => (
        <ReactHowler src={correctMp3} key={`correct-sound-${Math.random()}`} />
      ))}
      {wrongSounds.map(() => (
        <ReactHowler src={wrongMp3} key={`wrong-sound-${Math.random()}`} />
      ))}
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

export default Sounds;
