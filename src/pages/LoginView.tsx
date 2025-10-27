import { Link } from "react-router-dom";
import Title1 from "../components/title/Title1";
import DefaultButton from "../components/button/DefaultButton";
import logo from "../assets/login/logo_login.png";
import DefaultDiv from "../components/default/DefaultDiv";
import LoginForm from "../components/login/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();
  return (
    <DefaultDiv>
      <div className="pt-[3rem] flex flex-col items-center">
        {/* 로고 */}
        <img
          src={logo}
          alt="login logo"
          className="w-[18rem] mb-[1.5rem] select-none"
        />

        {/* 타이틀 */}
        <div className="mb-[10rem]">
          <Title1 text="로그인" />
        </div>

        {/* 입력 영역 */}
        <LoginForm />

        {/* 하단 회원가입 링크 */}
        <p className="text-[1rem] text-gray-500 mb-[1rem]">
          아직 회원이 아니신가요?{" "}
          <Link
            to="/signup/agreement"
            className="text-green-600 font-medium hover:text-green-700 hover:underline transition"
          >
            회원가입하기
          </Link>
        </p>

        {/* 로그인 버튼 */}
        <div className="w-full max-w-[33.5rem] mx-auto">
          <DefaultButton text="로그인"
            className="max-w-[33.5rem] w-full"
            onClick={() => navigate("/home")}
          />
        </div>
      </div>
    </DefaultDiv>
  );
};

export default LoginView;
