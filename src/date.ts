export { }

declare global {
  interface String {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.     
     * */
    toKorISOString(): string
  }

  interface Number {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.     
     * */
    toKorISOString(): string
  }

  interface Date {
    /**
     * 타임존이 Asia/Seoul인 iso 8601 포맷의 datestring을 얻습니다.     
     * */
    toKorISOString(): string
  }
}


String.prototype.toKorISOString = function () {
  return toKorISOString(this as string)
}

Number.prototype.toKorISOString = function () {
  return toKorISOString(this as number)
}

Date.prototype.toKorISOString = function () {
  return toKorISOString(this)
}


const toKorISOString = (value: string | number | Date) => {
  const time = new Date(value).getTime();

  const diff = 9 * 60 * 60 * 1000;

  return new Date(time + diff).toISOString();
};

