const BirthInput = () => (
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
);

export default BirthInput;
