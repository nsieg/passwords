const Iconer = require('./iconer.js')

test('vvv', () => {
    expect(Iconer.iconString("foo")).toBe("&#128700;&#128529;&#127859;");
  });