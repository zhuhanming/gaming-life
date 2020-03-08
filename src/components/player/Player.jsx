import React from 'react';

import Sprite from 'components/sprite';
import * as playerSpritesheet from 'assets/sprites/player_male.png';

import './Player.scss';

const Player = ({ isMoving, direction, scale }) => {
  return (
    <div>
      <Sprite
        image={playerSpritesheet}
        totalSteps={4}
        scale={scale}
        size={{ height: 64, width: 64 }}
        framesPerStep={8}
        direction={direction}
        isMoving={isMoving}
      />
    </div>
  );
};

export default Player;
