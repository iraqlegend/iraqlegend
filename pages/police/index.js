const Police = () => {
  return (
    <>
      <section className="rules bg-background-500 h-screen">
        <div className="banner flex flex-col justify-center items-center bg-police w-full h-[25rem] bg-cover bg-center">
          <h2 className="text-[40.0pt]">𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 𝖱𝖯</h2>
          <h2 className="text-[40.0pt]">وزارة الداخلية</h2>
        </div>
        <div className="flex flex-col gap-4 m-5">
          <div tabIndex={0} className="collapse collapse-arrow bg-[#141415]">
            <div className="collapse-title text-[24.0pt] text-white font-black flex items-center justify-center">
              قوانين وزارة الداخلية 👮
            </div>
            <div className="collapse-content">
              <div className="text-center text-[24px]">
                : 𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 القوانين الاساسية بـ وزارة الداخلية
              </div>
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  يجب على كل عسكري الحفاظ على أمن المدينة وعدم الخيانة ببيع
                  مركبات الدولة أو الأسلحة أو الذخائر ومن يخالف ذلك ينفذ فيه
                  أقصى العقوبات العسكرية.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  الصبر وعدم التقليل من شأن المواطن وعدم التعالي في الرتب
                  العسكرية.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نظام الترقيات يعتمد على تواجدك وجهدك في القطاع.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع الخروج عن الرول بلاي في المدينة لأي سبب كان لا بوجود
                  إداري (أدمن).
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يسمح للعسكري بتفتيش المواطن وحقيبته داخل مركز الشرطة
                  والاستيلاء على الممنوعات ولا يسمح خارج المركز.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  لا يحق لأي عسكري سجن الشخص بدون ذكر سبب السجن وإخباره بالمدة
                  المحددة له.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  الحد الأقصى للسجن هو 15 شهرًا فقط.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع اطلاق النار الفوري لأي سبب كان التعامل يكون بل تيزر فقط.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  مدة المطاردة الشخصية تكون 40 ثانية ويمنع اطلاق النار على
                  الشخص، الاطلاق يكون فقط ع كفر السيارة والصدم الاحترافي كل 15
                  ثانية.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع اطلاق النار في المناطق الآمنة لأي سبب.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يجب تلبية جميع مطالب الخاطفين غير التعجيزية.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  حالات الانتحار يتم التعامل معاها بشكل سلس وفي حين تم التعامل
                  مع المنتحر يسجن 15 شهرًا مع غرامة 100 ألف.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  الالتزام بقوانين المرور وعدم قطع الإشارات إلا في الحالات
                  الطارئة.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حالة اشتباه في شخص يتم إيقاف سيارة مشتبه بها والتحقق من
                  الأوراق المطلوبة.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع في الهروب الآمن الصدم الاحترافي أو الطلق الفوري ومن
                  يخالف يعتبر مخالفًا إداريًا.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع من جميع العساكر طلب من العصابات عمل سيناريو متفق محاسبة
                  جميع العصابات في السيناريوهات.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  اي عصابة لا تلبس القناع في حالة السرقة تكدر تتعرف عليها بعد
                  السيناريو في حال انتصار العصابة يتم اعتقالها.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال وجود رهينة أو سيارة عسكرية في السيناريو يمنع التخلي
                  عنهم والحفاظ على حياة المواطن.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حالة سرقة سيارة عسكرية يحاسب صاحب السيارة ودفع غرامة خمسين
                  ألف.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع دخول جهاز القطاعات الأخرى إلى المدينة إلا بطلب الدعم من
                  وزير الداخلية أو نائب الوزير أو قائد الشرطة فقط.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  الالتزام بنداءات الراديو وعدم الخروج عن الرول بلاي وعدم المزاح
                  أو التكلم بشيء خارج السياق العسكري.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يسمح دخول القطاعات الأخرى إلى المدينة لغرض التجوال فقط.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  الرهينة 60 ألف.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  الرهينة العسكري 70 ألف.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  السيارة العسكرية 50 ألف.
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع منعا باتا طلب استقالة قبل مدة أسبوع وبخلاف ذلك يجب عليك
                  دفع غرامة 3 مليون وسجن 30 شهرًا مع إعطائك رتبة مستقيل.
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
                  وزير الداخلية
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نائب وزير الداخلية
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  مستشار وزير الداخلية
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  قائد الشرطة
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نائب قائد الشرطة
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  مسؤول الشرطة
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  نائب مسؤول الشرطة
                </li>
              </ol>
              <div className="text-center text-[24px]">الرتب العسكرية :</div>
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">فريق أول</li>
                <li className="mb-4 text-[13.999999999999998pt]">فريق</li>
                <li className="mb-4 text-[13.999999999999998pt]">لواء</li>
                <li className="mb-4 text-[13.999999999999998pt]">عميد</li>
                <li className="mb-4 text-[13.999999999999998pt]">عقيد</li>
                <li className="mb-4 text-[13.999999999999998pt]">مقدم</li>
                <li className="mb-4 text-[13.999999999999998pt]">رائد</li>
                <li className="mb-4 text-[13.999999999999998pt]">نقيب</li>
                <li className="mb-4 text-[13.999999999999998pt]">ملازم أول</li>
                <li className="mb-4 text-[13.999999999999998pt]">ملازم</li>
                <li className="mb-4 text-[13.999999999999998pt]">رئيس عرفاء</li>
                <li className="mb-4 text-[13.999999999999998pt]">عريف</li>
                <li className="mb-4 text-[13.999999999999998pt]">نائب عريف</li>
                <li className="mb-4 text-[13.999999999999998pt]">شرطي أول</li>
                <li className="mb-4 text-[13.999999999999998pt]">شرطي</li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  شرطي تحت التدريب
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Police;
