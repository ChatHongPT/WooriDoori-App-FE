import { img } from "@/assets/img";
import DefaultButton from "@/components/button/DefaultButton";
import BottomButtonWrapper from "@/components/button/BottomButtonWrapper";
import IconButton from "@/components/button/IconButton";
import DefaultDiv from "@/components/default/DefaultDiv";
import InputBox from "@/components/input/InputBox";
import Title1 from "@/components/title/Title1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "@/hooks/useApi";
import { apiList } from "@/api/apiList";

const ResetPwView = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const requestTemporaryPasswordApi = useApi(apiList.requestTemporaryPassword);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid = name.trim().length > 0 && emailRegex.test(id.trim());

  const handleConfirm = async () => {
    if (!emailRegex.test(id.trim())) {
      setErrorMsg("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    if (!name.trim()) {
      setErrorMsg("이름을 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    // 임시 비밀번호 발급 API 호출
    const result = await requestTemporaryPasswordApi.call(id.trim(), name.trim());
    setIsLoading(false);

    if (result?.success) {
      // 성공 시 비밀번호 변경 페이지로 이동 (memberId를 URL 파라미터로 전달)
      navigate(`/newpw?id=${encodeURIComponent(id.trim())}`);
    } else {
      setErrorMsg(result?.resultMsg || "임시 비밀번호 발급에 실패했습니다.");
    }
  };

  return (
    <DefaultDiv>
      {/* 뒤로가기 버튼 */}
      <IconButton
        src={img.Vector}
        alt="뒤로가기"
        width={6}
        height={18}
        onClick={() => (window.location.href = "/login")}
      />

      <div className="h-8" />

      {/* 로고 */}
      <img src={img.woori_logo} alt="" className="w-60 mx-auto" />
      <div className="h-8" />

      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-start w-full max-w-[30rem] mx-auto">
        <Title1 text="비밀번호 찾기" />

        <h3 className="text-center">
          임시 비밀번호를 발급받을 계정을 입력해주세요
        </h3>

      <div className="h-8" />
        <InputBox
          placeholder="이름을 입력해주세요"
          className="mt-6"
          value={name}
          isError={errorMsg.length != 0}
          onChange={(e) => {
            setName(e.target.value);
            setErrorMsg("");
          }}
        />

        {/* 이메일 입력 */}
        <InputBox
          placeholder="이메일을 입력해주세요"
          className="mt-6"
          value={id}
          isError={errorMsg.length != 0}
          onChange={(e) => {
            setId(e.target.value);
            setErrorMsg("");
          }}
        />

        {/* 에러 메시지 */}
        {errorMsg && <p className="mt-3 text-red-500 text-start">{errorMsg}</p>}
     
        {/* 확인 버튼 */}
        <BottomButtonWrapper>
            <DefaultButton 
              text={isLoading ? "처리 중..." : "확인"}
              disabled={!isFormValid || isLoading}
              onClick={handleConfirm} 
            />
        </BottomButtonWrapper>
      </div>
    </DefaultDiv>
  );
};

export default ResetPwView;
