const Hasher = require('./hasher.js')

const isLower = x => /[a-z]/.test(x)
const isUpper = x => /[A-Z]/.test(x)
const isDigit = x => /[0-9]/.test(x)
const isSpecial = x => !/[a-zA-Z0-9]/.test(x)

const checks = [isLower, isUpper, isDigit, isSpecial]


test('CryptoJS hashing still works the same', () => {
  expect(Hasher.b64Hash("foo")).toBe("C+7Hteo/D9vJXQ3UfzxbwnXaijM=");
});

test('gets lower case at zero index', () => {
    expect(Hasher.firstEleOfType("foo", 0, isLower)).toBe("f");
});

test('gets lower case at later index', () => {
    expect(Hasher.firstEleOfType("C+7Hteo/D9vJXQ3UfzxbwnXaijM=", 10,isLower)).toBe("v");
});

test('gets special char at later index', () => {
    expect(Hasher.firstEleOfType("C+7Hteo/D9vJXQ3UfzxbwnXaijM=", 10, isSpecial)).toBe("=");
});

test('gets element from hash(hash) if not in hash', () => {
    expect(Hasher.firstEleOfType("foo", 10, isSpecial)).toBe("+");
});

test('works on lower and upper', () => {    
    expect(Hasher.firstIdxOfMostAvailableType("FOobar", checks)).toBe(2);
});

test('works on special char majority', () => {    
    expect(Hasher.firstIdxOfMostAvailableType("ggH+++", checks)).toBe(3);
});

test('works on digit majority', () => {    
    expect(Hasher.firstIdxOfMostAvailableType("+vBBB78944", checks)).toBe(5);
});

test('return zero on single type', () => {    
    expect(Hasher.firstIdxOfMostAvailableType("BBB", checks)).toBe(0);
});

test('order of checks breaks tie', () => {    
    expect(Hasher.firstIdxOfMostAvailableType("BBBbbb", checks)).toBe(3);
});

test('simple hash for comparison', () => {    
    expect(Hasher.b64Hash("foobar")).toBe("iEPX+SQWIR3p67lj/0zigSWTKHg=");
});

test('extended hash', () => {    
    expect(Hasher.hash("foo", "bar", 10)).toBe("ip33+/QWIR");
});

test('extended hash different input', () => {    
    expect(Hasher.hash("bar", "foo", 10)).toBe("c44++BHcBF");
});
