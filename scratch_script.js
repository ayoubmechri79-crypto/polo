/* ============================================
   REFLAX BALL — Script
   Products, Filtering, Discounts, WhatsApp
   ============================================ */

// ===== PRODUCT DATA =====
const allProducts = [

    // ════════════════════════════════════════
    // 🏠 تمارين منزلية وكالستينكس
    // ════════════════════════════════════════
    {
        id: 101, name: "حبل مقاومة", nameAr: "حبل مقاومة", price: 1200, image: "images/حبل مقاومة1.jpeg", category: "home_calisthenics", desc: "حبل مقاومة بجودة عالية لتمارين رياضية بالمنزل 💪",
        gallery: [
            "images/حبل مقاومة1.jpeg",
            "images/حبل مقاومة  .jpeg"
        ],
        variants: [
            { name: "أحمر (10kg)", price: 1200, color: "#ef4444" },
            { name: "أصفر (20kg)", price: 1500, color: "#eab308" },
            { name: "بنفسجي (25kg)", price: 1700, color: "#a855f7" },
            { name: "أخضر (30kg)", price: 2400, color: "#22c55e" }
        ]
    },
    { id: 102, name: "داعم تمارين الضغط", nameAr: "داعم تمارين الضغط", price: 3700, image: "images/داعم تمرين الضغط .png", category: "home_calisthenics", desc: "لوح تمارين الضغط متعدد الأوضاع الرياضية 🏋️" },
    {
        id: 103, name: "Barre fixe portable", nameAr: "بارفيكس ثابت للباب", price: 2500, image: "images/بارفيكس ثابت للباب.jpeg", category: "home_calisthenics", desc: "بارفيكس ثابت ومحمول للباب باحترافية وتثبيت آمن 🚪",
        gallery: [
            "images/بارفيكس ثابت للباب.jpeg",
            "images/بارفيكس ثابت للباب (2).jpeg"
        ],
        variants: [
            { name: "صغير (1m)", price: 2500, color: "#888888" },
            { name: "كبير (130cm)", price: 2700, color: "#333333" }
        ]
    },
    { 
        id: 104, name: "متوازي لDIPS", nameAr: "متوازي لDIPS", price: 3200, image: "images/1متوازي.jpeg", category: "home_calisthenics", desc: "متوازي لتمارين الديبس وضغط الكتف باحترافية 🔥",
        gallery: [
            "images/1متوازي.jpeg",
            "images/متوازي .jpeg"
        ],
        variants: [
            { name: "صغير (100cm)", price: 4700, color: "#555555" },
            { name: "كبير (130cm)", price: 4700, color: "#111111" }
        ]
    },
    { 
        id: 105, name: "Barre fixe parallel", nameAr: "بارفيكس + ابدو + متوازي", price: 4800, image: "images/بارفيكس + ابدو+  1متوازي .jpeg", category: "home_calisthenics", desc: "Barre fixe murale complète: Dips, Abdominaux et Tractions 🔥",
        gallery: [
            "images/بارفيكس + ابدو+  1متوازي .jpeg",
            "images/بارفيكس + ابدو+ متوازي.jpeg",
            "images/بارفيكس + ابدو+ متوازي  (2).jpeg"
        ]
    },
    {
        id: 507, name: "Handgrip مقوي للسواعد", nameAr: "Handgrip مقوي للسواعد 165kg", price: 2200,
        image: "images/WhatsApp Image 2026-04-09 at 6.07.50 PM (2).jpeg",
        category: "home_calisthenics",
        desc: "Handgrip احترافي لتقوية قبضة اليد وعضلات السواعد حتى 165kg، مثالي للتمارين المنزلية 💪",
        gallery: [
            "images/WhatsApp Image 2026-04-09 at 6.07.50 PM (2).jpeg"
        ]
    },

    // ════════════════════════════════════════
    // 🤾 كرة اليد
    // ════════════════════════════════════════
    {
        id: 303, name: "حذاء كرة اليد", nameAr: "حذاء كرة اليد الداخلي", price: 6600, image: "images/WhatsApp Image 2026-05-15 at 4.16.29 PM.jpeg", category: "handball", desc: "حذاء داخلي مناسب لملاعب كرة اليد بثبات عالٍ 👟",
        gallery: [
            "images/WhatsApp Image 2026-05-15 at 4.16.29 PM.jpeg",
            "images/WhatsApp Image 2026-05-15 at 4.16.29 PM (1).jpeg",
            "images/WhatsApp Image 2026-05-15 at 4.16.29 PM (2).jpeg",
            "images/WhatsApp Image 2026-05-15 at 4.16.29 PM (3).jpeg",
            "images/WhatsApp Image 2026-05-15 at 4.16.30 PM.jpeg"
        ],
        colors: [
            { name: "أحمر بالأسود", color: "#dc2626" },
            { name: "أصفر بالأسود", color: "#eab308" }
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"]
    },
    {
        id: 304, name: "كرة اليد", nameAr: "كرة يد ماركة ممتازة", price: 2800, image: "images/WhatsApp Image 2026-04-06 at 1.16.33 AM (1).jpeg", category: "handball", desc: "كرة يد بجودة ومواصفات ممتازة للتمارين والمباريات 🤾",
        gallery: [
            "images/WhatsApp Image 2026-04-06 at 1.16.33 AM (1).jpeg",
            "images/WhatsApp Image 2026-04-06 at 1.16.33 AM.jpeg"
        ],
        colors: [
            { name: "أصفر", color: "#eab308" },
            { name: "أحمر", color: "#ef4444" }
        ],
        sizes: ["Standard"]
    },

    // ════════════════════════════════════════
    // 👟 ملابس وأحذية — الدفعة 1
    // ════════════════════════════════════════
    {
        id: 201, name: "تيشيرت رياضي رمادي", nameAr: "تيشيرت رياضي بطبعة تطريز", price: 2200, image: "images/P1_tshirt_graphic_gray.jpeg", category: "clothing", desc: "تيشيرت رياضي رمادي بطبعة تطريز مميزة، قماش خفيف وجاف 💨",
        colors: [{ name: "رمادي", color: "#555555" }],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 202, name: "طقم Sanda Machi", nameAr: "طقم Sanda Machi رياضي", price: 3500, image: "images/P2_kungfu_set.jpeg", category: "clothing", desc: "طقم كونغ فو ووشو (جيليك + شورت) بقماش لامع خفيف الوزن 🥋",
        colors: [
            { name: "أزرق", color: "#1d4ed8" },
            { name: "أسود", color: "#111111" },
            { name: "أحمر", color: "#ef4444" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 203, name: "جيليك Under Armour", nameAr: "جيليك رياضي Under Armour", price: 2500, image: "images/P8_under_armour_singlet.jpeg", category: "clothing", desc: "جيليك رياضي Under Armour أبيض، قماش شبكي خفيف للتمارين الشديدة 🏃",
        colors: [{ name: "أبيض", color: "#ffffff" }],
        sizes: ["S", "M", "L", "XL"]
    },

    // ════════════════════════════════════════
    // 🥋 الجودو والمصارعة — الدفعة 1
    // ════════════════════════════════════════
    {
        id: 401, name: "بدلة مصارعة Wrestling", nameAr: "بدلة مصارعة احترافية", price: 3000, image: "images/P3_wrestling_singlet.jpeg", category: "judo_wrestling", desc: "بدلة مصارعة حرة احترافية مرنة وخفيفة بألوان متعددة 🤼",
        gallery: ["images/P3_wrestling_singlet.jpeg", "images/P4_wrestling_singlet2.jpeg"],
        colors: [
            { name: "أحمر", color: "#dc2626" },
            { name: "أزرق", color: "#1d4ed8" },
            { name: "أسود", color: "#111111" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },

    // ════════════════════════════════════════
    // 🥊 البوكسينج — الدفعة 1
    // ════════════════════════════════════════
    {
        id: 501, name: "طقم ملاكمة Adidas", nameAr: "طقم ملاكمة Adidas احترافي", price: 3500, image: "images/P7_adidas_boxing_set.jpeg", category: "boxing", desc: "طقم ملاكمة Adidas رسمي (جيليك + شورت) للبطولات، مواصفات عالمية 🥊",
        colors: [
            { name: "أزرق", color: "#1d4ed8" },
            { name: "أحمر", color: "#ef4444" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 502, name: "تشكيلة قفازات ملاكمة", nameAr: "تشكيلة قفازات الملاكمة", price: 5000, image: "images/P6_boxing_collection.jpeg", category: "boxing", desc: "أحدث التشكيلات من قفازات الملاكمة المتنوعة من كبرى الماركات (Venum, Adidas, Everlast) 🥊",
        variants: [
            { name: "أنواع وخيارات متعددة متوفرة", price: 3500, color: "#111111" }
        ]
    },

    // ════════════════════════════════════════
    // 🤺 الام ام اي — الدفعة 1
    // ════════════════════════════════════════
    {
        id: 601, name: "هودي UFC رياضي", nameAr: "تيشيرت هودي UFC قصير الأكمام بقلمونة", price: 2800, image: "images/P9_ufc_hoodie_black.jpeg", category: "mma", desc: "تيشيرت هودي UFC أسود قصير الأكمام مع قبعة للرأس وتغطية للوجه 💥",
        colors: [{ name: "أسود", color: "#111111" }],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 616, name: "تيشيرت UFC رمادي", nameAr: "تيشيرت UFC رياضي رمادي", price: 2600, image: "images/P10_ufc_hoodie_gray.jpeg", category: "mma", desc: "تيشيرت UFC رمادي بتصميم خفيف ومميز للتدريب والمنافسات 💥",
        colors: [{ name: "رمادي", color: "#555555" }],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },

    // ════════════════════════════════════════
    // ⚽ كرة القدم — الدفعة 1
    // ════════════════════════════════════════
    {
        id: 701, name: "تشكيلة أحذية كرة القدم", nameAr: "تشكيلة أحذية كرة القدم", price: 4500, image: "images/P5_football_collection.jpeg", category: "football", desc: "تشكيلة واسعة من أحذية كرة القدم المعشبة والصالات، بمقاسات وألوان متعددة ⚽",
        colors: [
            { name: "أبيض", color: "#f8fafc" },
            { name: "بنفسجي", color: "#a855f7" },
            { name: "أسود وأبيض", color: "#475569" },
            { name: "أسود", color: "#000000" },
            { name: "ألوان أخرى وتصاميم مختلفة", color: "#3b82f6" }
        ],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
        id: 702, name: "كرة قدم احترافية", nameAr: "كرة قدم للتدريب والمباريات", price: 3000, image: "images/football_product.png", category: "football", desc: "كرة قدم احترافية بتصميم عصري (High-end Soccer Ball) مثالية للعب على العشب ⚽",
        variants: [
            { name: "أبيض وتفاصيل سوداء", price: 3000, color: "#f8fafc" }
        ]
    },

    // ════════════════════════════════════════
    // 👟 ملابس — الدفعة 2
    // ════════════════════════════════════════
    {
        id: 204, name: "تيشيرت ضاغط (شعار أبيض)", nameAr: "تيشيرت ضاغط بتصميم عنكبوت أبيض", price: 2500, image: "images/P11_mma_shirt_white_worn.jpeg", category: "clothing", desc: "تيشيرت ضاغط رياضي (Rashguard) مثالي لتمارين القتال برسومات عنكبوت بيضاء 🕷️",
        gallery: [
            "images/P11_mma_shirt_white_worn.jpeg",
            "images/P16_mma_shirt_white_flat.jpeg"
        ],
        colors: [{ name: "أسود بشعار أبيض", color: "#f5f5f5" }],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 206, name: "تيشيرت ضاغط (شعار أحمر)", nameAr: "تيشيرت ضاغط بتصميم عنكبوت أحمر", price: 2500, image: "images/P14_mma_shirt_red_worn.jpeg", category: "clothing", desc: "تيشيرت ضاغط رياضي مثالي لتمارين القتال برسومات عنكبوت حمراء 🕷️",
        gallery: [
            "images/P14_mma_shirt_red_worn.jpeg",
            "images/P15_mma_shirt_red_flat.jpeg"
        ],
        colors: [{ name: "أسود بشعار أحمر", color: "#ef4444" }],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 207, name: "تيشيرت ضاغط أسود سادة", nameAr: "تيشيرت ضاغط أسود لإبراز العضلات", price: 2300, image: "images/P13_mma_shirt_worn_back.jpeg", category: "clothing", desc: "تيشيرت ضاغط أسود سادة، خامة ممتازة تلتصق بالجسم لتبرز العضلات 💪",
        colors: [{ name: "أسود سادة", color: "#111111" }],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 208, name: "تيشيرت ضاغط بطبعة أفواه", nameAr: "تيشيرت ضاغط بتصميم أفواه متوحشة", price: 2500, image: "images/P17_mma_shirt_teeth_back.jpeg", category: "clothing", desc: "تيشيرت ضاغط رياضي بتصميم مميز على الظهر لأفواه متوحشة للمقاتلين الشرسين 🦷",
        gallery: [
            "images/P17_mma_shirt_teeth_back.jpeg",
            "images/WhatsApp Image 2026-04-09 at 6.07.53 PM (1).jpeg"
        ],
        colors: [{ name: "أسود بطبعة أفواه", color: "#111111" }],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 205, name: "تيشيرت نايك أسود", nameAr: "تيشيرت نايك أساسي أسود", price: 2200, image: "images/P12_nike_shirt_black.jpeg", category: "clothing", desc: "تيشيرت نايك (Nike) رياضي أسود أساسي بخامة جافة ومريحة 🏃",
        colors: [
            { name: "أسود", color: "#111111" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },

    // ════════════════════════════════════════
    // 🥋 الجودو والمصارعة — الدفعة 2
    // ════════════════════════════════════════
    {
        id: 402, name: "بدلة مصارعة Asics", nameAr: "بدلة مصارعة احترافية ماركة Asics", price: 3000, image: "images/P18_asics_singlet.jpeg", category: "judo_wrestling", desc: "بدلة مصارعة (Singlet) من Asics بقماش متين ومرن للمسابقات 🤼",
        colors: [
            { name: "أحمر فاقع", color: "#ef4444" },
            { name: "أحمر داكن / عنابي", color: "#7f1d1d" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 403, name: "بدلة مصارعة Rudis", nameAr: "بدلة مصارعة احترافية ماركة Rudis", price: 3500, image: "images/P19_rudis_singlet.jpeg", category: "judo_wrestling", desc: "بدلة مصارعة عالية الجودة من ماركة Rudis بألوان وتصاميم مموهة 💥",
        colors: [
            { name: "أسود رمادي مموه", color: "#4b5563" },
            { name: "أزرق مموه", color: "#3b82f6" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },

    // ════════════════════════════════════════
    // 🥊 البوكسينج — الدفعة 2
    // ════════════════════════════════════════
    {
        id: 503, name: "قفازات ملاكمة Venum الأصفر", nameAr: "قفازات ملاكمة Venum أصفر وأسود", price: 5500, image: "images/P20_venum_gloves_yellow.jpeg", category: "boxing", desc: "قفازات Venum أصلية بتصميم فخم (أسود/أصفر) توفر حماية فائقة لليد 🥊",
        colors: [
            { name: "أسود وأصفر", color: "#eab308" }
        ],
        sizes: ["8oz", "10oz", "12oz", "14oz", "16oz"]
    },

    // ════════════════════════════════════════
    // 🤾 الأحذية الرياضية — الدفعة 3
    // ════════════════════════════════════════
    {
        id: 404, name: "حذاء مصارعة Asics معدل", nameAr: "حذاء مصارعة Asics", price: 5500, image: "images/P21_asics_wrestling_shoes.jpeg", category: "judo_wrestling", desc: "حذاء مخصص لرياضات المصارعة ماركة Asics يوفر ثبات لا مثيل له 🤼",
        gallery: [
            "images/P21_asics_wrestling_shoes.jpeg",
            "images/P36_asics_shoes_blue.jpeg"
        ],
        colors: [
            { name: "أسود بشعار أبيض", color: "#111111" },
            { name: "أزرق فاقع بشعار أبيض", color: "#2563eb" }
        ],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
        id: 405, name: "حذاء مصارعة Venum أسود", nameAr: "حذاء مصارعة Venum أسود", price: 7000,
        image: "images/WhatsApp Image 2026-04-09 at 6.07.49 PM.jpeg", category: "judo_wrestling",
        desc: "حذاء مصارعة احترافي لون أسود ماركة Venum بتصميم أنيق وثبات فائق على السجادة 🤼‍♂️",
        gallery: [
            "images/WhatsApp Image 2026-04-09 at 6.07.49 PM.jpeg",
            "images/WhatsApp Image 2026-04-09 at 6.07.49 PM (1).jpeg"
        ],
        colors: [{ name: "أسود", color: "#111111" }],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
        id: 406, name: "حذاء مصارعة Venum أبيض", nameAr: "حذاء مصارعة Venum أبيض", price: 7000,
        image: "images/WhatsApp Image 2026-04-09 at 6.07.50 PM.jpeg", category: "judo_wrestling",
        desc: "حذاء مصارعة Venum أبيض اللون بجودة احترافية عالية ومرونة توفر الثبات الأمثل 🤼‍♂️",
        colors: [{ name: "أبيض", color: "#f8fafc" }],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
        id: 408, name: "حذاء مصارعة أحمر", nameAr: "حذاء مصارعة احترافي أحمر", price: 4500,
        image: "images/WhatsApp Image 2026-04-09 at 6.07.53 PM.jpeg", category: "judo_wrestling",
        desc: "حذاء مصارعة أحمر احترافي يوفر أفضل أداء على البساط بتصميم قوي وعصري 🤼‍♂️",
        colors: [{ name: "أحمر", color: "#ef4444" }],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },

    // ════════════════════════════════════════
    // 🥊 البوكسينج — الدفعة 3 (تجميعة قفازات Venum)
    // ════════════════════════════════════════
    {
        id: 504, name: "قفازات ملاكمة Venum متطورة", nameAr: "قفازات ملاكمة Venum بألوان متعددة", price: 5000, image: "images/P24_venum_gloves_black_gold.jpeg", category: "boxing", desc: "أحدث تصاميم قفازات Venum الأصلية (ألوان زاهية ونسخ Top Rank) لحماية قصوى 🥊",
        gallery: [
            "images/P22_venum_gloves_tr_blue.jpeg",
            "images/P23_venum_gloves_blue_white.jpeg",
            "images/P24_venum_gloves_black_gold.jpeg",
            "images/P25_venum_gloves_tr_blue2.jpeg",
            "images/P26_venum_gloves_red_white.jpeg",
            "images/P27_venum_gloves_classic_black_gold.jpeg",
            "images/P29_venum_gloves_stealth_black.jpeg",
            "images/P30_venum_gloves_pink_white.jpeg",
            "images/P33_venum_gloves_yellow2.jpeg"
        ],
        colors: [
            { name: "أزرق Top Rank", color: "#2563eb" },
            { name: "أزرق وشعار أبيض", color: "#3b82f6" },
            { name: "أسود وذهبي", color: "#ca8a04" },
            { name: "أحمر فاقع", color: "#ef4444" },
            { name: "أسود كلاسيك ذهبي", color: "#854d0e" },
            { name: "أسود بالكامل (شبح)", color: "#111111" },
            { name: "وردي زاهي", color: "#f472b6" },
            { name: "أسود وأصفر (تصميم חדש)", color: "#eab308" }
        ],
        sizes: ["8oz", "10oz", "12oz", "14oz", "16oz"]
    },

    // ════════════════════════════════════════
    // 🤺 الام ام اي — الدفعات 3 و 4
    // ════════════════════════════════════════
    {
        id: 602, name: "طقم كيك بوكسينج Venum", nameAr: "طقم كيك بوكسينج مع واقي أسنان Venum ذهبي", price: 11500, isSpecialOffer: true, image: "images/P28_venum_protective_set.jpeg", category: "mma", desc: "طقم متكامل من ماركة Venum يشمل واقي قصبة الساق، خوذة، وواقي أسنان باللون الذهبي 🛡️"
    },
    {
        id: 603, name: "طقم حماية كامل MMA", nameAr: "طقم حماية شامل ممتاز", price: 11500, isSpecialOffer: true, image: "images/P49_batch5.jpeg", category: "mma", desc: "طقم حماية كامل ومتين للتمارين الشاملة والمكثفة في الفنون القتالية 🛡️"
    },
    {
        id: 604, name: "طقم حماية متقدم مموه", nameAr: "واقي حماية بتصميم مموه", price: 11500, isSpecialOffer: true, image: "images/P47_batch5.jpeg", category: "mma", desc: "طقم حماية مموه متطور يوفر أقصى درجات الحماية أثناء الاشتباك 🛡️"
    },
    {
        id: 605, name: "تجميعة كيك بوكسينج شاملة", nameAr: "تجميعة كيك بوكسينج شاملة وكاملة", price: 6500, image: "images/P44_batch5.jpeg", category: "boxing", desc: "تجميعة متينة جداً تتحمل أقصى الضربات في والكيك بوكسينج 🛡️"
    },
    {
        id: 606, name: "تجميعة للكيك بوكسينج", nameAr: "تجميعة للكيك بوكسينج واقي اليدين والقدمين", price: 6500, image: "images/P41_batch5.jpeg", category: "boxing", desc: "تجميعة رائعة بماركة CEILING الأصلية خاصة بحماية اليدين والقدمين 🛡️"
    },
    {
        id: 607, name: "واقي قصبة الساق Venum", nameAr: "واقي قصبة الساق Venum أسود وذهبي", price: 11500, isSpecialOffer: true, image: "images/P31_venum_protect_gold.jpeg", category: "mma", desc: "واقي قصبة قدم Venum أصلي بتصميم احترافي (أسود/ذهبي) لحماية مثالية للساق 🛡️"
    },
    {
        id: 609, name: "واقي قصبة الساق CEILING", nameAr: "واقي ساق CEILING أسود", price: 11500, isSpecialOffer: true, image: "images/P34_ceiling_protect.jpeg", category: "mma", desc: "واقي قصبة ساق ماركة CEILING بلون أسود أنيق ومريح في الارتداء 🛡️"
    },
    {
        id: 611, name: "واقي ساق Tiger بخياطة", nameAr: "واقي ساق Tiger بتصميم جديد", price: 11500, isSpecialOffer: true, image: "images/P37_tiger_protect2.jpeg", category: "mma", desc: "واقي ساق Tiger Muay Thai بتصميم مرن وخياطة متقاربة تضمن ثباته 🛡️"
    },
    {
        id: 613, name: "مجموعة واقيات مختلطة", nameAr: "مجموعة واقيات حماية مختلطة", price: 11500, isSpecialOffer: true, image: "images/P39_mixed_protect.jpeg", category: "mma", desc: "مجموعة واقيات متنوعة للفنون القتالية المختلطة بمتانة فائقة ووزن خفيف 🛡️",
        gallery: [
            "images/P39_mixed_protect.jpeg",
            "images/P32_tiger_protect.jpeg",
            "images/P35_ceiling_protect2.jpeg",
            "images/P38_venum_protect_gold2.jpeg"
        ]
    },
    {
        id: 614, name: "واقي ساق Venum مموه", nameAr: "واقي ساق Venum مموه عسكري", price: 11500, isSpecialOffer: true, image: "images/P40_venum_protect_camo2.jpeg", category: "mma", desc: "واقي قصبة الساق بتصميم التمويه العسكري (Camo) لأناقة وصلابة لا تُقهر 🛡️"
    },

    // ════════════════════════════════════════
    // 🥊 البوكسينج — الدفعة 5 (Mark CEILING & RDX)
    // ════════════════════════════════════════
    {
        id: 505, name: "قفازات ملاكمة CEILING", nameAr: "قفازات ملاكمة CEILING احترافية", price: 5000, image: "images/P42_batch5.jpeg", category: "boxing", desc: "قفازات ملاكمة احترافية من ماركة CEILING (Legacy & Innovation)، بتصميم مريح وحماية قوية 🥊",
        gallery: [
            "images/P42_batch5.jpeg",
            "images/P45_batch5.jpeg",
            "images/P50_batch5.jpeg"
        ],
        colors: [
            { name: "أسود مطفي", color: "#1a1a1a" },
            { name: "أخضر زيتوني", color: "#4d7c5b" }
        ],
        sizes: ["8oz", "10oz", "12oz", "14oz", "16oz"]
    },
    {
        id: 506, name: "وسادات تدريب RDX", nameAr: "أهداف تدريب ملاكمة RDX", price: 4500, image: "images/P43_batch5.jpeg", category: "boxing", desc: "أهداف ملاكمة وبادات تدريب (Focus Mitts) ماركة RDX لاستقبال اللكمات، مثالية لتدريب السرعة والدقة 🎯",
        variants: [
            { name: "أسود مع خط ذهبي", price: 4500, color: "#ca8a04" }
        ]
    },
    {
        id: 509, name: "بوندان يد احترافي", nameAr: "بوندان يد احترافي", price: 1500,
        image: "images/WhatsApp Image 2026-04-09 at 6.07.52 PM.jpeg", category: "boxing",
        desc: "بوندان (لفافات) يد احترافي للملاكمة والفنون القتالية، يوفر حماية تامة للمعصم واليد. طول 1 متر 🥊",
        gallery: [
            "images/WhatsApp Image 2026-04-09 at 6.07.52 PM.jpeg",
            "images/WhatsApp Image 2026-04-09 at 6.07.52 PM (1).jpeg",
            "images/WhatsApp Image 2026-04-09 at 6.07.51 PM.jpeg"
        ],
        colors: [
            { name: "أحمر", color: "#ef4444" },
            { name: "أزرق", color: "#1d4ed8" },
            { name: "أسود", color: "#111111" }
        ],
        sizes: ["1m"]
    },
    {
        id: 508, name: "بوندان يد احترافي", nameAr: "بوندان يد احترافي", price: 1500,
        image: "images/WhatsApp Image 2026-04-09 at 6.07.52 PM.jpeg", category: "mma",
        desc: "بوندان (لفافات) يد احترافي للفنون القتالية والملاكمة، يوفر حماية تامة للمعصم واليد. طول 1 متر 🥊",
        gallery: [
            "images/WhatsApp Image 2026-04-09 at 6.07.52 PM.jpeg",
            "images/WhatsApp Image 2026-04-09 at 6.07.52 PM (1).jpeg",
            "images/WhatsApp Image 2026-04-09 at 6.07.51 PM.jpeg"
        ],
        colors: [
            { name: "أحمر", color: "#ef4444" },
            { name: "أزرق", color: "#1d4ed8" },
            { name: "أسود", color: "#111111" }
        ],
        sizes: ["1m"]
    }
];

// ===== RANDOM DISCOUNTS (30%) =====
const discountIds = [];
allProducts.forEach(p => {
    if (discountIds.includes(p.id)) {
        p.hasDiscount = true;
        p.originalPrice = p.price;
        p.price = Math.round(p.price * 0.7);
    }
});

// ===== STATE =====
let currentFilter = 'all';
let displayCount = 12;
let currentQty = 1;
let currentProduct = null;
let currentVariantIndex = 0;
let currentGalleryIndex = 0;
let currentColorIndex = 0;
let currentSizeIndex = 0;

// ===== DOM ELEMENTS =====
const productsGrid = document.getElementById('products-grid');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadMoreWrapper = document.getElementById('load-more-wrapper');
const searchInput = document.getElementById('search-input');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const productModal = document.getElementById('product-modal');
const modalVariants = document.getElementById('modal-variants');
const variantsContainer = document.getElementById('variants-container');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const header = document.getElementById('main-header');

// ===== RENDER PRODUCTS =====
function getFilteredProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // If searching, ignore category filter
    let filtered = (currentFilter === 'all' || searchTerm !== '')
        ? [...allProducts]
        : allProducts.filter(p => p.category === currentFilter);

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.nameAr.includes(searchTerm)
        );
    }
    return filtered;
}

function renderProducts() {
    const filtered = getFilteredProducts();
    const toShow = filtered.slice(0, displayCount);

    productsGrid.innerHTML = toShow.map((product, index) => `
        <div class="product-card" 
             data-id="${product.id}" 
             style="animation-delay: ${index * 0.05}s"
             onclick="handleProductClick(event, ${product.id})">
            <div class="product-card-image" style="position:relative;">
                <img src="${product.image}" loading="lazy" class="main-img" style="transition: opacity 0.5s ease-in-out; position:relative; z-index:2;" alt="${product.nameAr}" onerror="this.src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop'">
                ${product.gallery && product.gallery.length > 1 ? `<img src="${product.gallery[1]}" class="secondary-img" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; opacity:0; transition: opacity 0.5s ease-in-out; z-index:3; border-radius: var(--radius-lg) var(--radius-lg) 0 0;" alt="" loading="lazy">` : ''}
                ${product.hasDiscount ? '<span class="discount-badge">-30%</span>' : ''}
                ${product.isSpecialOffer ? '<span class="special-offer-badge">🔥 عرض خاص</span>' : ''}
            </div>
            <div class="product-card-color-line"></div>
            <div class="product-card-info">
                <h3 class="product-card-name">${product.nameAr || product.name}</h3>
                <div class="product-card-price-row">
                    <span class="product-card-price">${product.price.toLocaleString()} دج</span>
                    ${product.hasDiscount ? `<span class="product-card-old-price">${product.originalPrice.toLocaleString()} دج</span>` : ''}
                </div>
                <button class="product-card-order-btn" onclick="event.stopPropagation(); orderViaWhatsApp(${product.id})">
                    أطلب الآن
                </button>
            </div>
        </div>
    `).join('');

    // Show/hide load more
    loadMoreWrapper.style.display = toShow.length < filtered.length ? 'block' : 'none';

    // Setup slideshows for newly rendered products
    setTimeout(setupCardSlideshows, 100);
}

// ===== PRODUCT CARD SLIDESHOW =====
let cardObserver = null;
const slideshows = new Map();

function setupCardSlideshows() {
    if (cardObserver) {
        cardObserver.disconnect();
    }
    
    // Clear existing intervals
    for (let interval of slideshows.values()) {
        clearInterval(interval);
    }
    slideshows.clear();

    cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const pid = parseInt(card.dataset.id);
            const product = allProducts.find(p => p.id === pid);
            
            if (entry.isIntersecting) {
                if (product && product.gallery && product.gallery.length > 1) {
                    if (!slideshows.has(card)) {
                        const img1 = card.querySelector('.main-img');
                        const img2 = card.querySelector('.secondary-img');
                        if (!img1 || !img2) return;

                        let currentIdx = 0;
                        let showingImg2 = false;
                        
                        const interval = setInterval(() => {
                            currentIdx = (currentIdx + 1) % product.gallery.length;
                            
                            if (!showingImg2) {
                                img2.src = product.gallery[currentIdx];
                                img2.style.opacity = '1';
                            } else {
                                img1.src = product.gallery[currentIdx];
                                img2.style.opacity = '0';
                            }
                            showingImg2 = !showingImg2;
                        }, 2500 + Math.random() * 1500); // random interval between 2.5s and 4.0s
                        slideshows.set(card, interval);
                    }
                }
            } else {
                if (slideshows.has(card)) {
                    clearInterval(slideshows.get(card));
                    slideshows.delete(card);
                    
                    // Reset opacity when out of view
                    const img1 = card.querySelector('.main-img');
                    const img2 = card.querySelector('.secondary-img');
                    if (img1) img1.style.opacity = '1';
                    if (img2) img2.style.opacity = '0';
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
        cardObserver.observe(card);
    });
}


// ===== PRODUCT CLICK ANIMATION =====
function handleProductClick(event, productId) {
    const card = event.currentTarget;

    // Add click animation
    card.classList.add('clicked');
    setTimeout(() => card.classList.remove('clicked'), 400);

    // Open modal after short delay
    setTimeout(() => openProductModal(productId), 200);
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    currentProduct = allProducts.find(p => p.id === productId);
    if (!currentProduct) return;

    currentQty = 1;
    currentVariantIndex = 0;
    currentColorIndex = 0;
    currentSizeIndex = 0;

    document.getElementById('modal-image').src = currentProduct.image;
    document.getElementById('modal-image').alt = currentProduct.nameAr;
    document.getElementById('modal-product-name').textContent = currentProduct.nameAr || currentProduct.name;
    document.getElementById('modal-product-desc').textContent = currentProduct.desc;
    document.getElementById('modal-qty').textContent = '1';

    const discountBadge = document.getElementById('modal-discount-badge');
    const oldPrice = document.getElementById('modal-old-price');

    if (currentProduct.hasDiscount) {
        discountBadge.style.display = 'block';
        oldPrice.style.display = 'inline';
        oldPrice.textContent = `${currentProduct.originalPrice.toLocaleString()} دج`;
    } else {
        discountBadge.style.display = 'none';
        oldPrice.style.display = 'none';
    }

    // Hide all variant rows first
    const modalVariantsEl = document.getElementById('modal-variants');
    document.getElementById('modal-colors-row').style.display = 'none';
    document.getElementById('modal-sizes-row').style.display = 'none';
    document.getElementById('modal-generic-row').style.display = 'none';

    if (currentProduct.colors && currentProduct.sizes) {
        // --- CLOTHING: separate color + size selectors ---
        modalVariantsEl.style.display = 'block';
        document.getElementById('modal-colors-row').style.display = 'block';
        document.getElementById('modal-sizes-row').style.display = 'block';
        renderClothingColors();
        renderClothingSizes();
        document.getElementById('modal-price').textContent = `${currentProduct.price.toLocaleString()} دج`;
        updateOrderBtn();
    } else if (currentProduct.variants && currentProduct.variants.length > 0) {
        // --- OTHER PRODUCTS: generic variants (weight/color combined) ---
        modalVariantsEl.style.display = 'block';
        document.getElementById('modal-generic-row').style.display = 'block';
        renderVariants();
    } else {
        modalVariantsEl.style.display = 'none';
        document.getElementById('modal-price').textContent = `${currentProduct.price.toLocaleString()} دج`;
        updateOrderBtn();
    }

    // ===== GALLERY INIT =====
    currentGalleryIndex = 0;
    const galleryPrev = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    const galleryDots = document.getElementById('gallery-dots');

    if (currentProduct.gallery && currentProduct.gallery.length > 1) {
        galleryPrev.style.display = 'flex';
        galleryNext.style.display = 'flex';
        galleryDots.innerHTML = currentProduct.gallery.map((_, i) =>
            `<button class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="goToGalleryImage(${i})"></button>`
        ).join('');
    } else {
        galleryPrev.style.display = 'none';
        galleryNext.style.display = 'none';
        galleryDots.innerHTML = '';
    }

    productModal.classList.add('open');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// ===== CLOTHING: COLORS + SIZES =====
function renderClothingColors() {
    const container = document.getElementById('variants-container');
    container.innerHTML = currentProduct.colors.map((c, i) => `
        <button class="variant-btn ${i === currentColorIndex ? 'selected' : ''}" onclick="selectColor(${i})">
            <span class="variant-color-dot" style="background-color: ${c.color}"></span>
            ${c.name}
        </button>
    `).join('');
}

function renderClothingSizes() {
    const container = document.getElementById('sizes-container');
    container.innerHTML = currentProduct.sizes.map((s, i) => `
        <button class="size-btn ${i === currentSizeIndex ? 'selected' : ''}" onclick="selectSize(${i})">${s}</button>
    `).join('');
}

function selectColor(index) {
    currentColorIndex = index;
    renderClothingColors();
    updateOrderBtn();
}

function selectSize(index) {
    currentSizeIndex = index;
    renderClothingSizes();
    updateOrderBtn();
}

// ===== GALLERY NAVIGATION =====
function galleryNav(direction) {
    if (!currentProduct || !currentProduct.gallery) return;
    const total = currentProduct.gallery.length;
    currentGalleryIndex = (currentGalleryIndex + direction + total) % total;
    goToGalleryImage(currentGalleryIndex);
}

function goToGalleryImage(index) {
    if (!currentProduct || !currentProduct.gallery) return;
    currentGalleryIndex = index;
    const img = document.getElementById('modal-image');
    img.classList.remove('gallery-fade-in');
    void img.offsetWidth;
    img.src = currentProduct.gallery[index];
    img.classList.add('gallery-fade-in');
    const dots = document.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function renderVariants() {
    if (!currentProduct || !currentProduct.variants) return;
    const container = document.getElementById('generic-variants-container');
    container.innerHTML = currentProduct.variants.map((v, i) => `
        <button class="variant-btn ${i === currentVariantIndex ? 'selected' : ''}" onclick="selectVariant(${i})">
            <span class="variant-color-dot" style="background-color: ${v.color}"></span>
            ${v.name}
        </button>
    `).join('');
    const selectedVariant = currentProduct.variants[currentVariantIndex];
    document.getElementById('modal-price').textContent = `${selectedVariant.price.toLocaleString()} دج`;
    updateOrderBtn();
}

function selectVariant(index) {
    currentVariantIndex = index;
    renderVariants();
}

function closeProductModal() {
    productModal.classList.remove('open');
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function changeQty(delta) {
    currentQty = Math.max(1, Math.min(10, currentQty + delta));
    document.getElementById('modal-qty').textContent = currentQty;
    updateOrderBtn();
}

function updateOrderBtn() {
    if (!currentProduct) return;
    let activePrice = currentProduct.price;
    let variantText = '';

    if (currentProduct.colors && currentProduct.sizes) {
        const selectedColor = currentProduct.colors[currentColorIndex];
        const selectedSize = currentProduct.sizes[currentSizeIndex];
        variantText = `\n🎨 اللون: ${selectedColor.name}\n📐 المقاس: ${selectedSize}`;
    } else if (currentProduct.variants && currentProduct.variants.length > 0) {
        const v = currentProduct.variants[currentVariantIndex];
        activePrice = v.price;
        variantText = `\n🎨 الخصائص: ${v.name}`;
    }

    const total = activePrice * currentQty;
    const productName = currentProduct.nameAr || currentProduct.name;
    const msg = `مرحباً، أريد طلب:\n\n🛍️ المنتج: ${productName}${variantText}\n📦 الكمية: ${currentQty}\n💰 المبلغ: ${total.toLocaleString()} دج${currentProduct.hasDiscount ? '\n🔥 خصم 30% مُطبَّق!' : ''}\n\n🚨 مهم جداً! ⬇️\n📍 الموقع/العنوان: \n👤 الاسم واللقب: \n📞 رقم الهاتف: \n\nمن متجر REFLAX BALL`;
    const encodedMsg = encodeURIComponent(msg);
    const btn1 = document.getElementById('modal-order-btn-1');
    const btn2 = document.getElementById('modal-order-btn-2');
    if (btn1) btn1.href = `https://wa.me/213540365181?text=${encodedMsg}`;
    if (btn2) btn2.href = `https://wa.me/213563598896?text=${encodedMsg}`;
}

// ===== ORDER VIA WHATSAPP =====
function orderViaWhatsApp(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    if ((product.colors && product.sizes) || (product.variants && product.variants.length > 0)) {
        openProductModal(productId);
        return;
    }

    const productName = product.nameAr || product.name;
    const msg = `مرحباً، أريد طلب:\n\n🛍️ المنتج: ${productName}\n💰 السعر: ${product.price.toLocaleString()} دج${product.hasDiscount ? '\n🔥 خصم 30% مُطبَّق!' : ''}\n\n🚨 مهم جداً! ⬇️\n📍 الموقع/العنوان: \n👤 الاسم واللقب: \n📞 رقم الهاتف: \n\nمن متجر REFLAX BALL`;
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/213540365181?text=${encodedMsg}`, '_blank');
}


// ===== FILTER =====
function filterProducts(category) {
    currentFilter = category;
    displayCount = 12;

    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });

    renderProducts();

    // Scroll to products if from category card
    if (category !== 'all') {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ===== LOAD MORE =====
function loadMore() {
    displayCount += 12;
    renderProducts();
}

// ===== SEARCH =====
searchInput.addEventListener('input', () => {
    // Switch to 'all' visually when typing
    if (searchInput.value.trim() !== '') {
        currentFilter = 'all';
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === 'all');
        });
    }
    displayCount = 48;
    renderProducts();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        // Scroll down to products so user can see them
        document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close menu if searching from mobile
        if (typeof closeMobileMenu === 'function') closeMobileMenu();
    }
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
});

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu on nav link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ===== MODAL CLOSE =====
modalClose.addEventListener('click', closeProductModal);
modalOverlay.addEventListener('click', closeProductModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
        closeMobileMenu();
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe section headers
document.querySelectorAll('.section-header, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===== DYNAMIC CATEGORY COUNTS =====
function updateCategoryCounts() {
    const counts = {};
    allProducts.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1;
    });

    const categories = ['home_calisthenics', 'handball', 'football', 'boxing', 'mma', 'judo_wrestling', 'swimming', 'clothing'];
    
    categories.forEach(cat => {
        const count = counts[cat] || 0;
        let text = '';
        if (count === 0) text = '0 منتج';
        else if (count === 1) text = 'منتج واحد';
        else if (count === 2) text = 'منتجان';
        else if (count >= 3 && count <= 10) text = `${count} منتجات`;
        else text = `${count} منتج`;
        
        const el = document.querySelector(`.category-card[data-category="${cat}"] .category-count`);
        if (el) el.textContent = text;
    });
}

// ===== INIT =====
renderProducts();
updateCategoryCounts();

// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.classList.add('hidden');
        
        // Trigger hero animations slightly after preloader starts fading
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
    }, 400); // Reduced delay for a faster, smoother experience
});

// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    if (!scrollProgress) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
});

// ===== CUSTOM CURSOR & MAGNETIC EFFECT =====
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('custom-cursor-follower');

if (window.innerWidth >= 1024 && cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate3d(${followerX - 21}px, ${followerY - 21}px, 0)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Reattach hovers when filtering products
    function attachCursorEvents() {
        const hoverElements = document.querySelectorAll('a, button, .product-card, .category-card');
        hoverElements.forEach(el => {
            // Add a data attribute to prevent multiple attachments
            if (el.dataset.cursorAttached) return;
            el.dataset.cursorAttached = "true";

            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
                follower.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
                follower.classList.remove('hovering');
                el.style.transform = '';
            });

            if (el.tagName === 'BUTTON' || el.classList.contains('hero-btn')) {
                el.classList.add('magnetic');
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                });
            }
        });
    }
    attachCursorEvents();

    // Override renderProducts to reattach cursor events to newly created products
    const originalRender = renderProducts;
    renderProducts = function () {
        originalRender();
        setTimeout(attachCursorEvents, 50);
    };
}

// ===== COMMENTS SYSTEM =====
const commentsModal = document.getElementById('comments-modal');
const commentsOverlay = document.getElementById('comments-modal-overlay');
const commentsClose = document.getElementById('comments-modal-close');
const commentsList = document.getElementById('comments-list');
const commentForm = document.getElementById('comment-form');

// Default comments to show initially
const defaultComments = [
    { name: "أحمد علي", text: "منتجات رائعة وتوصيل سريع جداً! أنصح به بشدة.", date: "2026-05-10" },
    { name: "سارة م.", text: "جودة القفازات مذهلة، شكراً ريفليكس بول.", date: "2026-05-12" },
    { name: "محمد سليم", text: "أفضل محل للمعدات الرياضية في المنطقة.", date: "2026-05-14" }
];

function openCommentsModal() {
    commentsModal.classList.add('open');
    commentsOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    loadComments();
}

function closeCommentsModal() {
    commentsModal.classList.remove('open');
    commentsOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

commentsClose.addEventListener('click', closeCommentsModal);
commentsOverlay.addEventListener('click', closeCommentsModal);

function loadComments() {
    let comments = JSON.parse(localStorage.getItem('reflex_comments')) || defaultComments;
    commentsList.innerHTML = comments.map(c => `
        <div class="comment-item" style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <strong style="color: var(--orange); font-size: 14px;">${c.name || 'مجهول'}</strong>
                <span style="color: var(--text-muted); font-size: 11px;">${c.date}</span>
            </div>
            <p style="color: var(--text-dim); font-size: 13px; line-height: 1.6; margin: 0;">${c.text}</p>
        </div>
    `).join('');
}

function addComment(event) {
    event.preventDefault();
    const nameInput = document.getElementById('commenter-name');
    const textInput = document.getElementById('comment-text');
    
    const newComment = {
        name: nameInput.value.trim() || "مجهول",
        text: textInput.value.trim(),
        date: new Date().toISOString().split('T')[0]
    };

    let comments = JSON.parse(localStorage.getItem('reflex_comments')) || defaultComments;
    comments.unshift(newComment); // Add to the top
    localStorage.setItem('reflex_comments', JSON.stringify(comments));

    // Reset form and reload
    nameInput.value = '';
    textInput.value = '';
    loadComments();
}

