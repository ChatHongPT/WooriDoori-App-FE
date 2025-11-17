import { useCookies } from 'react-cookie';

export const useCookieManager = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

  // 쿠키 설정
  const setCookies = (accessToken: string, refreshToken: string) => {
    // 모바일 브라우저 호환성을 위해 SameSite 속성 추가
    const cookieOptions = {
      path: '/',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7일
      sameSite: 'lax' as const, // 모바일 브라우저 호환성을 위해 SameSite 설정
      // HTTPS 환경에서는 secure: true 추가 가능
      // secure: window.location.protocol === 'https:',
    };
    
    setCookie('accessToken', accessToken, cookieOptions);
    setCookie('refreshToken', refreshToken, cookieOptions);
  };

  // 쿠키 값 가져오기
  const getCookies = () => {
    return {
      accessToken: cookies.accessToken,
      refreshToken: cookies.refreshToken,
    };
  };

  // 쿠키 삭제
  const removeCookies = () => {
    const cookieOptions = {
      path: '/',
      sameSite: 'lax' as const,
    };
    removeCookie('accessToken', cookieOptions);
    removeCookie('refreshToken', cookieOptions);
  };

  return {
    setCookies,
    getCookies,
    removeCookies,
  };
};

