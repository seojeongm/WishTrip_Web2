import romeImage from "../assets/RecommendedTrips/rome_italy.png";
import phuquocImage from "../assets/RecommendedTrips/phuquoc_vietnam.png";
import bangkokImage from "../assets/RecommendedTrips/bangkok_thailand.png";

const trips = [
  {
    tag: "로맨틱 도시",
    city: "로마",
    country: "이탈리아",
    image: romeImage,
  },
  {
    tag: "자연의 섬",
    city: "푸꾸옥",
    country: "베트남",
    image: phuquocImage,
  },
  {
    tag: "버킷리스트",
    city: "방콕",
    country: "태국",
    image: bangkokImage,
  },
];

const RecommendedTrips = () => {
  return (
<section className="w-full max-w-[1216px] mx-auto px-4 md:px-8 py-12 bg-[#F8F9FB]">

      {/* 제목 */}
      <h2 className="text-center text-[32px] font-bold leading-[48px] tracking-[-0.01em] mb-8">
        추천 여행지
      </h2>

      {/* 카드 리스트 */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="w-[264px] h-[429px] bg-white rounded-[18px] border border-[#E0E0E0] overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* 이미지 영역 */}
            <div className="relative w-full h-[340px]">
              <img
                src={trip.image}
                alt={trip.city}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 inline-flex items-center h-[34px] px-[18px] py-[9px] text-[12px] font-semibold text-white rounded-tl-[18px] rounded-br-[18px] overflow-hidden">
                <span className="absolute inset-0 bg-[#002162] opacity-60 rounded-tl-[18px] rounded-br-[18px]" />
                <span className="relative z-10">{trip.tag}</span>
              </span>
            </div>

            {/* 텍스트 영역 */}
            <div className="flex flex-col px-[16px] py-[12px] gap-[4px] text-left">
              <p className="text-[12px] text-gray-500">{trip.city}</p>
            <h3 className="text-[14px] font-bold text-gray-900">{trip.country}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedTrips;