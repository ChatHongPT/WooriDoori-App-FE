const PasswordFields = () => (
  <div className="space-y-[2rem]">
    <div>
      <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
        비밀번호
      </label>
      <input
        type="password"
        placeholder="설정할 비밀번호를 입력해주세요"
        className="w-full px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition"
      />
    </div>
    <div>
      <label className="block text-[1.4rem] font-bold text-gray-700 mb-[0.8rem]">
        비밀번호 확인
      </label>
      <input
        type="password"
        placeholder="설정할 비밀번호를 재입력해주세요"
        className="w-full px-4 py-3 rounded-lg outline-none border border-gray-300 text-gray-800 bg-white focus:ring-green-300 transition"
      />
    </div>
  </div>
);

export default PasswordFields;
