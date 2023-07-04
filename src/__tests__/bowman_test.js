import Bowman from '../bowman';

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
