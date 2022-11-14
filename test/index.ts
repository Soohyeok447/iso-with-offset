import "../src/date";

const test = (name: string, fn: () => void) => {
  fn();

  console.log(`${name} passed.`);
};

const assert = (a: any, b: any) => {
  if (a !== b) throw Error(`${a} does not equal with ${b}`);
};

const expected = process.env.TEST_EXPECTED;

test("test Date formatter", () => {
  const result = new Date("2022-01-01T00:00:00+09:00").toISOStringWithKorOffset();

  assert(result, expected);
});
