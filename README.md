# korean extensions

한국인이라면 이 라이브러리 씁시다.

## Example
```ts
import "korean-extensions";

test("test string formatter", () => {
  const result = "2022-11-11 15:30".toKorISOString()

  assert(result, "2022-11-11T15:30:00.000Z")
})

test("test number formatter", () => {
  const result = (2533125421).toKorISOString()

  assert(result, "1970-01-30T16:38:45.421Z")
})

test("test Date formatter", () => {
  const result = new Date("2022-11-11 15:30").toKorISOString()

  assert(result, "2022-11-11T15:30:00.000Z")
})
```