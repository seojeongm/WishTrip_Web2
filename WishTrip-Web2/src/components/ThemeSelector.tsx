import parisImage from "../assets/ThemeSelector/paris_eiffel.png"
import tokyoImage from "../assets/ThemeSelector/tokyo_skytree.png"; 
import newyorkImage from "../assets/ThemeSelector/newyork_timessquare.png";
import hawaiiImage from "../assets/ThemeSelector/hawaii_beach.png";

const themes = [
  {
    city: "파리",
    theme: "여행명소",
    image: parisImage,
  },
  {
    city: "도쿄",
    theme: "스카이타워",
    image: tokyoImage,
  },
  {
    city: "뉴욕",
    theme: "타임스퀘어",
    image: newyorkImage,
  },
  {
    city: "하와이",
    theme: "해변 휴양",
    image: hawaiiImage,
  },
];

const ThemeSelector = () => {
  return (
    <section className="w-full w-[1216px] mx-auto py-16 px-4 text-center bg-[#f8fbff]">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">여행하고 싶은 리스트</h2>
      <p className="text-sm text-gray-600 mb-6">
        여행하고 싶은 모든 장소를 체크해보세요.
      </p>

      <button className="flex mx-auto items-center gap-2 text-white bg-blue-900 hover:bg-blue-800 px-6 py-4 rounded-md font-semibold">
        내 여행지 목록 보기
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="flex pt-24 flex-wrap justify-center gap-6">
        {themes.map((theme, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow aspect-square">
              <img
                src={theme.image}
                alt={theme.city}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm font-semibold text-gray-800">{theme.city}</div>
            <div className="text-xs text-gray-500">{theme.theme}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeSelector;
