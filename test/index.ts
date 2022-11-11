import "../src/date"

const test = (name: string, fn: () => void) => {
  fn()

  console.log(`${name} passed.`)
}

const assert = (a: any, b: any) => {
  if (a !== b) throw Error(`${a} does not equal with ${b}`)
}

test("test string formatter", () => {
  const result = "2022-11-11 15:30".toKorISOString()

  assert(result, "2022-11-11T15:30:00.000Z")
})

test("test Date formatter", () => {
  const result = new Date("2022-11-11 15:30").toKorISOString()

  assert(result, "2022-11-11T15:30:00.000Z")
})

test("test number formatter", () => {
  const result = (2533125421).toKorISOString()

  assert(result, "1970-01-30T16:38:45.421Z")
})

