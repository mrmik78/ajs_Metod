import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('create the character "Bowman"', () => {
  const player = new Bowman('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Bowman error levelUp', () => {
  expect(() => {
    const player = new Bowman('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('check Bowman levelUp', () => {
  const player = new Bowman('player');
  player.levelUp();
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    },
  );
});

test('check Bowman damage', () => {
  const player = new Bowman('player');
  player.damage(15);
  expect(player.health).toBeCloseTo(88.75);
});

test('check Bowman error damage', () => {
  expect(() => {
    const player = new Bowman('player');
    player.health = -1;
    player.damage(15);
  }).toThrowError('персонаж умер');
});

test('check "Bowman" error name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const player = new Bowman('p');
  }).toThrowError('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
});

test('create the character "Daemon"', () => {
  const player = new Daemon('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Daemon error type', () => {
  expect(() => {
    const player = new Daemon('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('create the character "Magician"', () => {
  const player = new Magician('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Magician error type', () => {
  expect(() => {
    const player = new Magician('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('create the character "Swordsman"', () => {
  const player = new Swordsman('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});

test('check Swordsman error type', () => {
  expect(() => {
    const player = new Swordsman('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('create the character "Undead"', () => {
  const player = new Undead('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Undead error type', () => {
  expect(() => {
    const player = new Undead('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('create the character "Zombie"', () => {
  const player = new Zombie('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Zombie',

      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});

test('check Zombie error type', () => {
  expect(() => {
    const player = new Zombie('player');
    player.health = -1;
    player.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
