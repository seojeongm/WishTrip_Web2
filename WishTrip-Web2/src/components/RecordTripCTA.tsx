const RecordTripCTA = () => {
  return (
<section className="w-full py-20 px-4 text-center bg-[#F8F9FB]">

      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        여행 기록을 남겨보세요!
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-8">
        당신의 여행을 글로 남기고, 다른 사람과 공유해보세요.
      </p>
<button className="cursor-pointer flex mx-auto items-center gap-2 text-white bg-blue-900 hover:bg-blue-800 px-6 py-4 rounded-md font-semibold">
  기록 남기러 가기
  <svg
    width="24"
    height="24"
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
    </section>
  );
};


export default RecordTripCTA;

