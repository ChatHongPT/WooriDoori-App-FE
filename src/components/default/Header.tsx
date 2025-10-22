import { img } from "@/assets/img";

const HeaderBar = ({
    title,
    showBack = false,
    showClose = true,
    onBack,
    onClose,
    className = "",
}: {
    title: string;
    showBack?: boolean;
    showClose?: boolean;
    onBack?: () => void;
    onClose?: () => void;
    className?: string;
}) => {
    return (
        <header
            className={`flex items-center justify-between w-full px-7 py-7 bg-white ${className}`}
        >
            {/* 왼쪽: 뒤로가기 버튼 */}
            <div className="flex justify-end">
                {showBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        aria-label="뒤로가기"
                        className="flex items-center justify-center"
                    >
                        <img
                            src={img.Vector}
                            alt="뒤로가기"
                            className="w-6 h-6 object-contain"
                        />
                    </button>
                )}
            </div>

            {/* 가운데: 타이틀 */}
            <h1 className="text-[1.8rem] font-semibold text-gray-900 text-center flex-1">
                {title}
            </h1>

            {/* 오른쪽: 닫기 버튼 */}
            <div className="flex justify-end">
                {showClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="닫기"
                        className="flex items-center justify-center"
                    >
                        <img
                            src={img.BsX}
                            alt="닫기"
                            className="w-10 h-1 object-contain"
                        />
                    </button>
                )}
            </div>
        </header>
    );
};

export default HeaderBar;
