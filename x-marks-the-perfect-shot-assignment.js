const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];


const finalPosition = function (moves) {
  let origin = [0,0];
  for (let i=0; i<moves.length; i++) {
    if (moves[i] === "north") {
      origin.splice(1, 1, origin[1] + 1);
    } else if (moves[i] === "south") {
      origin.splice(1, 1, origin[1] - 1);
    } else if (moves[i] === "east") {
      origin.splice(0, 1, origin[0] + 1);
    } else if (moves[i] === "west") {
      origin.splice(0, 1, origin[0] - 1);
    }
  }
  return origin;
}

finalPosition(moves);
// -> [-1,4]