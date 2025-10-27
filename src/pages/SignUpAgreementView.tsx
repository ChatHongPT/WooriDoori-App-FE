import DefaultDiv from "../components/default/DefaultDiv";
import DefaultButton from "../components/button/DefaultButton";
import Header from "../components/default/Header";
import image from "../assets/login/signUp.png";
import AgreementForm from "../components/signUp/AgreementForm";
import { useNavigate } from "react-router-dom";

const SignUpAgreementView = () => {
  const navigate = useNavigate();
  return (
    <DefaultDiv>
      <Header
        title="회원가입"
        showBack
        showClose
        onBack={() => navigate(-1)}
        onClose={() => navigate("/login")}
      />

      {/* 본문 */}
      <div className="pt-[8rem] flex flex-col items-center">
        {/* 안내 문구 */}
        <div className="w-[34rem] text-left mb-[3rem]">
          <p className="text-[2rem] font-bold text-gray-800 leading-relaxed">
            아래 약관을 동의하신 후<br /> 다음을 눌러주세요.
          </p>
        </div>

        {/* 이미지 */}
        <img
          src={image}
          alt="회원가입 일러스트"
          className="w-[20rem] mb-[4rem] select-none"
        />

        {/* 약관 영역 (분리된 컴포넌트) */}
        <AgreementForm />

        {/* 다음 버튼 */}
        <div className="w-[34rem] mx-auto flex justify-center">
          <DefaultButton text="다음"
            className="max-w-[33.5rem] w-full"
            onClick={() => navigate("/signUp/signUp")}
          />
        </div>
      </div>
    </DefaultDiv>
  );
};

export default SignUpAgreementView;
