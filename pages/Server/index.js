import Image from "next/image";

const Location = () => {
  return (
    <>
      <section className="rules bg-background-500 h-screen">
        <div className="banner flex flex-col justify-center items-center bg-Server w-full h-[25rem] bg-cover bg-center opacity-70">
          <h2 className="text-[40.0pt]">𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 𝖱𝖯</h2>
          <h2 className="text-[40.0pt]">كل ماهو جديد </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 p-8">
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-9.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2>كراج الملكيه </h2>
            <h2>751</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-10.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2> الملكيه </h2>
            <h2>751</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-11.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2> اضافت سكربت ساحة القتال </h2>
            <h2>241</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-13.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2> رسبون </h2>
            <h2>863</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-14.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2> فندق تقدر تشتري فيه شقه </h2>
            <h2>744</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-15.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2> مجمع الوزارات ( داخليه + قواة خاصه + مباحث ) </h2>
            <h2>709</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-16.png"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2> مقر ابطال الخارقين </h2>
            <h2></h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold"></div>
        </div>
      </section>
    </>
  );
};

export default Location;
