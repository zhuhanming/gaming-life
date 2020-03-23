import React from 'react';
import ReactHowler from 'react-howler';

import { useSfx } from 'contexts/sfxContext';
import wrongMp3 from 'assets/sounds/wrong.mp3';

const WrongSounds = () => {
  const { wrongSounds } = useSfx();

  return (
    <>
      {wrongSounds.map(() => (
        <ReactHowler src={wrongMp3} key={`wrong-sound-${Math.random()}`} />
      ))}
    </>
  );
};

export default WrongSounds;
