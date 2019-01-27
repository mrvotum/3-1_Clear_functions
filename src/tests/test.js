import showHealthLevel from '../js/app';

test('should show critical level', () => {
  const input = [{ name: 'Маг', health: '10' }];

  const expected = 'Маг: critical'; // ожидает
  const received = showHealthLevel(input);
  expect(received).toBe(expected);
});

test('should show wounded level', () => {
  const input = [{ name: 'Маг', health: '50' }];

  const expected = 'Маг: wounded'; // ожидает
  const received = showHealthLevel(input);
  expect(received).toBe(expected);
});

test('should show healthy level', () => {
  const input = [{ name: 'Маг', health: '100' }];

  const expected = 'Маг: healthy'; // ожидает
  const received = showHealthLevel(input);
  expect(received).toBe(expected);
});
