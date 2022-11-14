// eslint-disable-next-line prettier/prettier
export {};

declare global {
  interface Date {
    /**
     * Asia/Seoul의 오프셋을 가진 iso 8601 포맷의 datestring을 얻습니다.
     * */
    toISOStringWithKorOffset(): string;
  }
}

Date.prototype.toISOStringWithKorOffset = function () {
  return new Date(this.getTime() + 9 * 60 * 60 * 1000).toISOString().replace("Z", "+09:00");
};
