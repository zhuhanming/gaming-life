const isWithinWalls = (position, scale) => {
  const minX = -140 * scale;
  const maxX = 140 * scale;
  const maxY = 176 * scale;
  const minY = -128 * scale;
  const { x, y } = position;
  return minX <= x && x <= maxX && minY <= y && y <= maxY;
};

const isNotWithinSign = (position, scale) => {
  const signMinX = -32 * scale;
  const signMaxX = 32 * scale;
  const signMinY = -44 * scale;
  const signMaxY = 20 * scale;
  const { x, y } = position;
  return !(signMinX < x && x < signMaxX && signMinY < y && y < signMaxY);
};

const isNotWithinLeftDoor = (position, scale) => {
  const leftDoorMinX = -128 * scale;
  const leftDoorMaxX = -24 * scale;
  const leftDoorMaxY = -108 * scale;
  const { x, y } = position;
  return !(leftDoorMinX < x && x < leftDoorMaxX && y < leftDoorMaxY);
};

const isNotWithinRightDoor = (position, scale) => {
  const rightDoorMinX = 24 * scale;
  const rightDoorMaxX = 128 * scale;
  const rightDoorMaxY = -108 * scale;
  const { x, y } = position;
  return !(rightDoorMinX < x && x < rightDoorMaxX && y < rightDoorMaxY);
};

const checkIfValidPosition = (position, scale) => {
  return (
    isWithinWalls(position, scale) &&
    isNotWithinSign(position, scale) &&
    isNotWithinLeftDoor(position, scale) &&
    isNotWithinRightDoor(position, scale)
  );
};

const isNextToSign = (position, scale) => {
  const signMinX = -36 * scale;
  const signMaxX = 36 * scale;
  const signMinY = -48 * scale;
  const signMaxY = 24 * scale;
  const { x, y } = position;
  return signMinX < x && x < signMaxX && signMinY < y && y < signMaxY;
};

const isNextToLeftDoor = (position, scale) => {
  const leftDoorMinX = -132 * scale;
  const leftDoorMaxX = -20 * scale;
  const leftDoorMaxY = -104 * scale;
  const { x, y } = position;
  return leftDoorMinX < x && x < leftDoorMaxX && y < leftDoorMaxY;
};

const isNextToRightDoor = (position, scale) => {
  const rightDoorMinX = 20 * scale;
  const rightDoorMaxX = 132 * scale;
  const rightDoorMaxY = -104 * scale;
  const { x, y } = position;
  return rightDoorMinX < x && x < rightDoorMaxX && y < rightDoorMaxY;
};

export {
  checkIfValidPosition,
  isNextToSign,
  isNextToLeftDoor,
  isNextToRightDoor
};
