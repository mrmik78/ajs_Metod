import Daemon from '../daemon';

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
