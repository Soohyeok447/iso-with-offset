// eslint-disable-next-line prettier/prettier
export { };

declare global {
  interface String {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.
     * */
    toKorISOString(): string;

    getTime(): number;
  }

  interface Number {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.
     * */
    toKorISOString(): string;

    getTime(): number;
  }

  interface Date {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.
     * */
    toKorISOString(): string;
  }
}

String.prototype.toKorISOString = function () {
  return toKorISOString(this as string);
};

String.prototype.getTime = function () {
  return new Date(this as string).getTime();
};

Number.prototype.toKorISOString = function () {
  return toKorISOString(this as number);
};

Number.prototype.getTime = function () {
  return this as number;
};

Date.prototype.toKorISOString = function () {
  return toKorISOString(this);
};

const toKorISOString = (value: string | number | Date) => {
  const local = value.getTime() - new Date().getTimezoneOffset() * 60 * 1000;

  const offset = (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000;

  const result = new Date(local + offset);

  return result.toISOString();
};
