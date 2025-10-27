import InputBox from "../input/InputBox";

const LoginForm = () => {
  return (
    <div className="w-full mx-auto mb-[24rem] flex flex-col gap-[1rem] items-center">
      {/* 아이디 입력 */}
      <div className="w-full max-w-[33.5rem]">
        <InputBox placeholder="아이디를 입력해주세요" />
      </div>

      {/* 비밀번호 입력 */}
      <div className="relative w-full max-w-[33.5rem]">
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          className="w-full px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition"
        />

        {/* 아이디 / 비밀번호 찾기 */}
        <div className="absolute right-0 bottom-[-2.8rem] flex gap-[1.6rem] text-[1.2rem] text-gray-500">
          <a
            href="/find-id"
            className="hover:text-green-600 hover:underline transition"
          >
            아이디 찾기
          </a>
          <span>|</span>
          <a
            href="/find-password"
            className="hover:text-green-600 hover:underline transition"
          >
            비밀번호 찾기
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
