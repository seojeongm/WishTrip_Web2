import heroImage from "../assets/HeroSection/hero_image.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[325px] overflow-hidden">
      {/* 배경 이미지 + 밝기 필터 */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(30%)" }}
      />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[168px] pt-[101px] pb-[72px] text-white">
        <h1
          className="font-bold text-[40px] leading-[48px] tracking-[-0.01em] drop-shadow-lg"
        >
          여행을 꿈꾸는 모든 순간에
        </h1>
        <p
          className="mt-2 font-normal text-[16px] leading-[24px] tracking-[-0.01em] drop-shadow-md"
        >
          여행 가고 싶은 장소를 위시에 기록하고 체크하세요. <br />
          당신의 여행을 기록해보세요!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
