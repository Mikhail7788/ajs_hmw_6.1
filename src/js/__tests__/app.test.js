import Character from '../app';

test('name err', () => {
  const result = new Character('Sobyanin777', 'Undead');

  expect(result).toEqual(Error('Имя должно содержать не менее 2 символов и не более 10!'));
});

test('type error', () => {
  const result = new Character('Mazay', 'Zomb');

  expect(result).toEqual(Error('Такого типа не существует!'));
});

test('new person created', () => {
  const result = new Character('Archer', 'Bowman');

  expect(result).toEqual({
    name: 'Archer',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});