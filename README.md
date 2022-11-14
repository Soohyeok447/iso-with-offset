# korean extensions

한국인이라면 이 라이브러리 씁시다.

## Example
```ts
import "iso-with-offset";

const date = new Date("2022-11-11 15:30").toISOStringWithKorOffset();

console.log(date) // 2022-11-11T15:30:00.000+09:00 (UTC + seoul offset)

const date2 = new Date("2022-01-01T00:00:00+09:00").toISOStringWithKorOffset();

console.log(date2) // 2022-01-01T00:00:00.000+09:00 (UTC + seoul offset)

const date3 = new Date(date2);

console.log(date3) // 2021-12-31T15:00:00.000Z (UTC)

```