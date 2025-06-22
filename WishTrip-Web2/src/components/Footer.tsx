import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F8F9FB] text-gray-600 text-sm py-12 px-4 ">
      <div className="max-w-[1216px] mx-auto flex justify-between items-center">
        <span>문의 이메일: UMC@example.com</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            개인정보 보호 정책
          </a>
          <a href="#" className="hover:underline">
            이용 약관
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
