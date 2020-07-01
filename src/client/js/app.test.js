import { getCountryData, getURL } from './app'

test('REST Countries API returns an object', async () => {
  getCountryData({ country:'Honduras' });
  expect.objectContaining({
    population: expect.any(Number),
  });
});

test('get urls from server', async () => {
  const x = getURL();
  expect(typeof x).toBe('object');
});