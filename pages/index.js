import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="h-screen w-full">
        <div className="flex items-center h-full">
          <div>
            <Image
              src="./logo.gif"
              alt="Logo"
              width={700}
              height={1000}
              className="rounded-full"
            />
          </div>
          <div className="text-center flex items-end w-[40rem]">
            <div className="flex items-center flex-col gap-4">
              <h2 className="font-bold text-[30px]">
                مرحبا بكم في اساطير العراق
              </h2>
              <p>
                سيرفر اساطير العراق في لعبة فايف إم هو مجتمع افتراضي يتيح
                للمشاركين اكتشاف عوالم مليئة بالمغامرات والتفاعلات الاجتماعية.
                يتميز هذا السيرفر بتنوعه وغناه بالأنشطة، حيث يمكن للاعبين
                الاستمتاع بتجارب متعددة مثل المغامرات الشيقة في الطبيعة،
                والاستكشافات الثقافية، والتفاعل مع الآخرين في بيئة مرحة وودية.
                سواء كنت ترغب في استكشاف العالم الافتراضي بمفردك أو الانضمام إلى
                مجموعات للمغامرة مع الأصدقاء، فإن سيرفر اساطير العراق يوفر فرصًا
                للمتعة والتسلية لكل اللاعبين.
              </p>
              <div className="flex gap-10 mt-5">
                <Link href="https://discord.gg/iq7">
                  <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#1f47cb] hover:bg-[#1f47cbaf] text-[#fff] rounded-md font-medium transition duration-200 ease-linear">
                    سيرفر الديسكورد
                  </button>
                </Link>
                <Link href="https://cfx.re/join/33o4l8">
                  <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-medium transition duration-200 ease-linear">
                    سيرفر فايف ام
                  </button>
                </Link>
              </div>
              <div className="flex gap-10 mt-5">
                <Link href="https://www.youtube.com/@hamoody34/videos">
                  <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#990011] hover:bg-[#008000] text-[#fff] rounded-md font-medium transition duration-200 ease-linear">
                    حمودي / Hamoody قناة اليوتيوب الخاصه
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-0 bg-[#1b1c24] h-[2rem] w-full border-0 border-t-[1px] border-t-gray-800 flex items-center justify-center font-bold z">
          <h2>© 2024 المطور اكرم التكريتي، جميع الحقوق محفوظة.</h2>
        </div>
      </section>
    </>
  );
};
export default Home;
