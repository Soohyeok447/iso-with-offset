import "../src/date"

const test = (name: string, fn: () => void) => {
  fn()

  console.log(`${name} passed.`)
}

const assert = (a: any, b: any) => {
  if (a !== b) throw Error(`${a} does not equal with ${b}`)
}

const expected = process.env.TEST_EXPECTED;

test("test string formatter", () => {
  const result = "2022-01-01 00:00:00".toKorISOString()

  assert(result, expected)
})

test("test Date formatter", () => {
  const result = new Date("2022-01-01 00:00:00").toKorISOString()

  assert(result, expected)
})

test("test number formatter", () => {
  const result = (1640962800000).toKorISOString()

  assert(result, expected)
})

