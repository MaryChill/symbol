import Char from './Char';
import Team from './Team';

const player1 = new Char({
  name: 'Лучник',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
});

const player2 = new Char({
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
});

const player3 = new Char({
  name: 'Маг',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}
