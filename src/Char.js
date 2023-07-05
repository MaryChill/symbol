// export default class Character {
//     constructor(name, type, attack, defence) {
//       if (typeof name === 'string' && name.length > 2 && name.length < 10) {
//         this.name = name;
//         this.type = type;
//         this.health = 100;
//         this.level = 1;
//         this.attack = attack;
//         this.defence = defence;
//       } else {
//         throw new Error('некорректное имя');
//       }
//     }
//   }

export default class Char {
  constructor(obj) {
    this.name = obj.name;
    this.type = obj.type;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = obj.attack;
    this.defense = obj.defense;
  }
}
