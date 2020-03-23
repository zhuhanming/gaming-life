import React from 'react';

import BumpSounds from './BumpSounds';
import CorrectSounds from './CorrectSounds';
import MenuSounds from './MenuSounds';
import SelectSounds from './SelectSounds';
import WrongSounds from './WrongSounds';

const Sounds = () => {
  return (
    <>
      <BumpSounds />
      <CorrectSounds />
      <MenuSounds />
      <SelectSounds />
      <WrongSounds />
    </>
  );
};

export default Sounds;
