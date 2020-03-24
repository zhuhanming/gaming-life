/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { NUMBER_OF_QUESTIONS } from 'constants/numbers';

const initialState = {
  gameState: {},
  currentLevel: 1,
  pastRooms: [],
  currentRoom: 1,
  correctStreak: [],
  gameCompleted: false
};

// const samplePayload = {
//   option: 'right',
//   isCorrect: true,
//   question: 'This is the question.',
//   optionSelected: 'Option selected'
// };

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateGameState: (state, { payload }) => {
      state.gameState[`level-${state.currentLevel}`] = payload;
      state.pastRooms.push(state.currentRoom);
      if (payload.option === 'right') {
        state.currentRoom = state.currentRoom * 2 + 1;
      } else if (payload.option === 'left') {
        state.currentRoom *= 2;
      }
      state.correctStreak.push(payload.isCorrect);
      if (state.currentLevel === NUMBER_OF_QUESTIONS) {
        state.gameCompleted = true;
      }
      state.currentLevel += 1;
    },
    resetGameState: state => {
      state.gameState = initialState.gameState;
      state.currentLevel = initialState.currentLevel;
      state.pastRooms = initialState.pastRooms;
      state.currentRoom = initialState.currentLevel;
      state.correctStreak = initialState.correctStreak;
      state.gameCompleted = false;
    }
  }
});

export const { updateGameState, resetGameState } = game.actions;

export default game.reducer;
