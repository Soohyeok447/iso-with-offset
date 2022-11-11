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


const toKorISOString = (dateFormat?: string | number | Date) => {
  const date = new Date();

  const utc = date.getTime() + date.getTimezoneOffset() * 60000;

  const timeDiff = 9 * 60 * 60 * 1000;

  const tzOffset = new Date().getTimezoneOffset() * 60000;

  const korDate = dateFormat ? new Date(new Date(dateFormat).getTime() - tzOffset) : new Date(utc + timeDiff - tzOffset);

  return korDate.toISOString();
};


