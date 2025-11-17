/**
 * 쿠키를 읽는 헬퍼 함수
 * react-cookie의 useCookies는 훅이므로 컴포넌트 외부에서 사용할 수 없어
 * document.cookie를 직접 파싱합니다.
 */
export const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
};

