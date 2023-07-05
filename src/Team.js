// import Character from './Char';

// export default class Bowman extends Character {
//   constructor(name, type = 'Bowman') {
//     super(name, type);
//     this.attack = 25;
//     this.defence = 25;
//   }
// }
import Char from './Char';

export default class Team {
  constructor() {
    this.players = [];
    this.numberOfPlayers = 0;
  }

  add(player) {
    if (player instanceof Char) {
      this.players.push(player);
      this.numberOfPlayers += 1;
    } else {
      throw new Error('Не валидный объект!');
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const {
      players,
      numberOfPlayers,
    } = this;
    return {
      next() {
        if (current < numberOfPlayers) {
          return {
            value: players[current++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
