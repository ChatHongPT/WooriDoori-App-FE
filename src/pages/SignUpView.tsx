import { useState } from "react";
import DefaultDiv from "../components/default/DefaultDiv";
import Header from "../components/default/Header";
import InputBox from "../components/input/InputBox";
import DefaultButton from "../components/button/DefaultButton";
import EmailVerification from "../components/signUp/EmailVerification";
import PasswordFields from "../components/signUp/PasswordFields";
import BirthInput from "../components/signUp/BirthInput";
import { useNavigate } from "react-router-dom";


const SignUpFormView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <DefaultDiv>
      <Header
        title="회원가입"
        showBack
        showClose
        onBack={() => navigate(-1)}
        onClose={() => navigate("/login")} />

      <div className="pt-[8rem] flex flex-col items-center">
        <form className="w-full max-w-[34rem] flex flex-col gap-[2rem]">
          <EmailVerification email={email} setEmail={setEmail} />
          <PasswordFields />

          <div>
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              이름
            </label>
            <InputBox placeholder="이름을 입력해주세요" />
          </div>

          <div>
            <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
              전화번호
            </label>
            <InputBox placeholder="‘-’를 제외한 숫자만 입력해주세요" />
          </div>

          <BirthInput />

          <div className="mt-[6rem] w-full">
            <DefaultButton text="완료"
              className="max-w-[33.5rem] w-full"
              onClick={() => navigate("/signUp/Success")}
            />
          </div>
        </form>
      </div>
    </DefaultDiv>
  );
};

export default SignUpFormView;