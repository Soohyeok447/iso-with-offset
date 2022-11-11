// eslint-disable-next-line prettier/prettier
export { };

declare global {
  interface Date {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.
     * */
    toKorISOString(): string;
  }
}

Date.prototype.toKorISOString = function () {
  return toKorISOString(this);
};

const toKorISOString = (value: Date) => {
  const local = value.getTime() - new Date().getTimezoneOffset() * 60 * 1000;

  const offset = (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000;

  const result = new Date(local + offset);

  return result.toISOString();
};
