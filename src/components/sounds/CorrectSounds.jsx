import React from 'react';
import ReactHowler from 'react-howler';

import { useSfx } from 'contexts/sfxContext';
import correctMp3 from 'assets/sounds/correct.mp3';

const CorrectSounds = () => {
  const { correctSounds } = useSfx();

  return (
    <>
      {correctSounds.map(() => (
        <ReactHowler src={correctMp3} key={`correct-sound-${Math.random()}`} />
      ))}
    </>
  );
};

export default CorrectSounds;
