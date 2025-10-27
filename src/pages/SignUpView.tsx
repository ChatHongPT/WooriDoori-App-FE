import { useState, useEffect } from "react";
import DefaultDiv from "../components/default/DefaultDiv";
import Header from "../components/default/Header";
import InputBox from "../components/input/InputBox";
import DefaultButton from "../components/button/DefaultButton";

const SignUpFormView = () => {
  // ✅ 상태 관리
  const [email, setEmail] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [showVerification, setShowVerification] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3분 (180초)

  // 타이머 동작
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showVerification && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [showVerification, timeLeft]);

  // 시간 포맷 (mm:ss)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // 이메일 중복 확인
  const handleEmailCheck = () => {
    if (!email) return alert("이메일을 입력해주세요.");
    const available = email !== "test@example.com"; // 예시: 중복 ID
    setIsAvailable(available);
    setShowVerification(available);
    setTimeLeft(180); // 타이머 초기화
  };

  return (
    <DefaultDiv>
      <Header
        title="회원가입"
        showBack
        showClose
        onBack={() => console.log("뒤로가기 클릭")}
        onClose={() => console.log("닫기 클릭")}
      />

      <div className="pt-[8rem] flex flex-col items-center">
        <form className="w-full max-w-[34rem] flex flex-col gap-[2rem]">
          {/* 아이디 */}
          <div>
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              아이디
            </label>
            <div className="flex gap-[1rem] items-start">
              <div className="flex-1 relative">
                <InputBox
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  borderColor={
                    isAvailable === false
                      ? "border-red-400"
                      : isAvailable === true
                      ? "border-blue-400"
                      : "border-gray-300"
                  }
                />
                {/* 상태 메시지 */}
                {isAvailable === false && (
                  <p className="text-[1.2rem] text-red-500 mt-[0.4rem]">
                    사용 중인 아이디가 있습니다.
                  </p>
                )}
                {isAvailable === true && (
                  <p className="text-[1.2rem] text-blue-500 mt-[0.4rem]">
                    사용 가능한 아이디입니다. 인증번호를 확인해주세요.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleEmailCheck}
                className="px-[1rem] py-[0.8rem] border rounded-lg text-[1rem] font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
              >
                중복확인
              </button>
            </div>
          </div>

          {/* 인증번호 입력 (아이디 사용 가능 시 표시) */}
            <div>
              <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
                인증번호
              </label>
              <div className="flex gap-[1rem] items-center">
                <div className="relative w-[20rem]">
                  <InputBox placeholder="인증번호를 입력해주세요" />
                  {timeLeft > 0 && (
                    <span className="absolute right-[1rem] top-1/2 -translate-y-1/2 text-red-500 text-[1.2rem]">
                      {formatTime(timeLeft)}
                    </span>
                  )}
                </div>

                <a
                  href="#"
                  onClick={() => setTimeLeft(180)}
                  className="text-gray-800 font-medium hover:text-gray-500 underline transition"
                >
                  재전송
                </a>
              </div>

              <button
                type="button"
                className="px-[1rem] py-[0.8rem] float-right border rounded-lg text-[1rem] font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
              >
                확인하기
              </button>
            </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="설정할 비밀번호를 입력해주세요"
              className="w-full px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition mb-[2rem]"
            />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="설정할 비밀번호를 재입력해주세요"
              className="w-full px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition mb-[2rem]"
            />
          </div>

          {/* 이름 */}
          <div className="mb-[2rem]">
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              이름
            </label>
            <InputBox placeholder="이름을 입력해주세요" />
          </div>

          {/* 전화번호 */}
          <div className="mb-[2rem]">
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              전화번호
            </label>
            <InputBox placeholder="‘-’를 제외한 숫자만 입력해주세요" />
          </div>

          {/* 생년월일 */}
          <div>
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              생년월일
            </label>

            <div className="flex items-center gap-[0.8rem]">
              <input
                type="text"
                maxLength={6}
                placeholder="YYMMDD"
                className="w-[12rem] px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition text-center"
              />
              <span className="text-gray-600">-</span>
              <input
                type="text"
                maxLength={1}
                className="w-[3.5rem] px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition text-center"
              />
              <span className="text-[2rem] tracking-[0.6rem] text-gray-400 select-none">
                • • • • • •
              </span>
            </div>
          </div>

          {/* 완료 버튼 */}
          <div className="mt-[6rem] w-full">
            <DefaultButton text="완료" className="w-full" />
          </div>
        </form>
      </div>
    </DefaultDiv>
  );
};

export default SignUpFormView;
