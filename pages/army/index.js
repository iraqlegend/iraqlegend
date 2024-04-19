const Army = () => {
  return (
    <>
      <section className="rules bg-background-500 h-screen">
        <div className="banner flex flex-col justify-center items-center bg-army w-full h-[25rem] bg-cover bg-center opacity-70">
          <h2 className="text-[40.0pt]">𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 𝖱𝖯</h2>
          <h2 className="text-[40.0pt]">جهاز مكافحة الارهاب</h2>
        </div>
        <div className="flex flex-col gap-4 m-5">
          <div tabIndex={0} className="collapse collapse-arrow bg-[#141415]">
            <div className="collapse-title text-[24.0pt] text-white font-black flex items-center justify-center">
              قوانين جهاز مكافحة الارهاب 🦅
            </div>
            <div className="collapse-content">
              <div className="text-center text-[24px]">
                • [ تعريف جهاز مكافحة الارهاب ] •
                <p className="mb-4">
                  {" "}
                  • جهاز مكافحة الأرهاب هو المسؤول الاول مع وزارة الدفاع عن
                  المناطق الغير امنة ولا يحق لأي جهة امنية القيام بتمشيط او
                  تفاوض على عمل اجرامي بدون تنسيق مع جهاز مكافحة الأرهاب •
                </p>
                <p className="mb-4">
                  • جهاز مكافحة الأرهاب هو جهاز استخبارات وعمليات خاصة تابع الى
                  مكتب رئيس الوزراء حصراً •
                </p>
                <p className="mb-4">
                  • بعد هجومك على مقر لايحق لك الهجوم على نفس المقر الى بعد مرور
                  ساعة •
                </p>
              </div>
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  احترام المواطنين وحسن المعاملة وخلاف ذلك يتم محاسبة العنصر.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  عدم التكلم باسم أي جهة حكومية.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع ركوب سيارة مدنية وأنت لابس الزي العسكري.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع ركوب سيارة عسكرية وأنت لابس الزي المدني.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع إخراج اليات ثقيلة إلا بأمر القائد وبخلاف ذلك تعرض نفسك
                  للمخالفة.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع لبس زي القائد وإخراج سيارة القائد.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نظام الترقيات يكون كل 10 أيام للجنود وكل 15 يوم للضباط وكل شهر
                  لأصحاب المناصب.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  جميع الصلاحيات الممنوحة لعناصر جهاز مكافحة الإرهاب مقيدة داخل
                  المدينة.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع التوجه إلى السرقات داخل المدينة إلا في حال قامت وزارة
                  الداخلية بطلب دعم ويجب على عناصر جهاز مكافحة الإرهاب تنزيل
                  إعلان مساندة.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  جميع تحركات جهاز مكافحة الإرهاب يجب أن تكون باعلان.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  تمشيط المناطق الغير آمنة يجب أن يكون باعلان رسمي.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع الشخصنة أو الحقد على أفراد الوزارات الأخرى وأفراد
                  العصابات.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع منعا باتا طلب استقالة قبل مدة أسبوع وبخلاف ذلك يجب عليك
                  دفع غرامة 3 مليون وسجن 30 شهرا مع إعطائك رتبة مستقيل.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع منعا باتا الخروج عن الرول بلاي إلا في حال وجود إداري.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع للعناصر التجول بالهوية العسكرية بالملابس المدنية.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع اهانة أحد عناصر جهاز مكافحة الإرهاب وبخلاف ذلك سيتم سجنك
                  20 شهرا مع غرامة 500 ألف.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  على جميع عناصر جهاز مكافحة الإرهاب الاكتفاء بطلب الهوية فقط
                  لمنسوبي الوزارات الأخرى.
                </li>
              </ol>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow bg-[#141415]">
            <div className="collapse-title text-[24.0pt] text-white font-black flex items-center justify-center">
              السلم الوظيفي 📈
            </div>
            <div className="collapse-content">
              <div className="text-center text-[24px]">المناصب العسكرية :</div>
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  قائد جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نائب قائد جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  مستشار قائد جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  مسؤول جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نائب مسؤول جهاز مكافحة الإرهاب
                </li>
              </ol>
              <div className="text-center text-[24px]">الرتب العسكرية :</div>
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  فريق أول جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  فريق جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  لواء جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  عميد جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  عقيد جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  مقدم جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  رائد جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نقيب جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ملازم أول جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ملازم جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  رئيس عرفاء جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  عريف جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نائب عريف جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  جندي أول جهاز مكافحة الإرهاب
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  جندي جهاز مكافحة الإرهاب
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Army;
