const Gangs = () => {
  return (
    <>
      <section className="rules bg-background-500 h-screen">
        <div className="banner flex flex-col justify-center items-center bg-akram w-full h-[25rem] bg-cover bg-center opacity-70">
          <h2 className="text-[40.0pt]">𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 𝖱𝖯</h2>
          <h2 className="text-[40.0pt]">الاب الروحي</h2>
        </div>
        <div className="flex flex-col gap-4 m-5">
          <div tabIndex={0} className="collapse collapse-arrow bg-[#141415]">
            <div className="collapse-title text-[24.0pt] text-white font-black flex items-center justify-center">
              قوانين الاب الروحي 💀
            </div>
            <div className="collapse-content">
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع التعرض الئ الاب الروحي (من قبل العصابات)
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع التعرض او سرقة ممتلكات الأب الروحي
                </li>

                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع مداهمة او قتل الاب الروحي لانه يكون شخصية غامضة فقط
                  للعصابات
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يستطيع الأب الروحي بجمع جميع العصابات والتحالف معهم لانه(مسؤول
                  العصابات)
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  اذا دعى الاب الروحي الى اجتماع ع جميع العصابات الحضور او يتم
                  انزال ع العصابه المقصره تحذير
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال ممانعة اي عصابه من التعاون معه الاب الروحي ستصبح
                  العصابه منبوذا من جميع العصابات (بلاك ماركت مشمول )
                </li>
              </ol>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow bg-[#141415]">
            <div className="collapse-title text-[24.0pt] text-white font-black flex items-center justify-center">
              السلم الوظيفي 📈
            </div>
            <div className="collapse-content">
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  الاب الروحي
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  عائلة الاب الروحي
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gangs;
