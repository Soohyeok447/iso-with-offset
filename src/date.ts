// eslint-disable-next-line prettier/prettier
export { };

declare global {
  interface Date {
    /**
     * Asia/Seoul의 오프셋을 가진 iso 8601 포맷의 datestring을 얻습니다.
     * */
    toISOStringWithKorOffset(): string;
  }
}

Date.prototype.toISOStringWithKorOffset = function () {
  return toISOStringWithKorOffset(this);
};

const toISOStringWithKorOffset = (value: Date) => {
  const local = value.getTime() - new Date().getTimezoneOffset() * 60 * 1000;

  const offset = (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000;

  const result = new Date(local + offset);

  return result.toISOString().slice(0, -1) + "+09:00";
};
