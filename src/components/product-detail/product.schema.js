export default {
  rating: {
    suggestionCount: 20,
    stars: 3,
  },
  images: [
    require("@/assets/images/oil1.jpeg"),
    require("@/assets/images/oil2.jpeg"),
  ],
  title: {
    persian: "روغن موتور خودرو کاسترول مدل مجیک حجم ۴ لیتر",
    english: "Castrol Magnatec 4L 10W40 Car Engine Oil",
  },
  popularity: {
    likes: 52,
    dislikes: 12,
  },
  description:
    "شرکت کاسترول به عنوان یکی از تولید کنندگان پیشرو در صنعت تولید روغن‌های روان کننده و گریس در سطح جهانی محسوب میشود",
  specifications: ["گروانی: 10W-40", "حجم: ۴ لیتر", "روش ساخت: ۴ لیتر"],
  reviews: [
    {
      id: "id1",
      title: "حمیدرضا افشار",
      subtitle: "۲۰ خرداد ۱۳۹۹",
      description:
        "شاید در قدم اول، اینکه با روغن بری تو تعویض روغنی و صاحب مغازه چپ چپ بهت نگاه کنه، جالب نباشه، اما ارزش داره چون از اصالت روغنی که میخری مطمئن هستی",
      likes: 56,
      dislikes: 0,
      isSuggested: true,
    },
    {
      id: "id2",
      title: "پیمان آقاخانی",
      subtitle: "۲۴ خرداد ۱۳۹۹",
      description:
        "به نظر روغن مناسبی هست مخصوصا برای خودروهای وارداتی من برای پاجیرو ۳۸۰۰ و سوناتا ۲۰۰۸ استفاده کردم",
      likes: 20,
      dislikes: 5,
      isSuggested: false,
    },
  ],
  totalReviews: 20,
  qas: [
    {
      id: "id1",
      title: "بهنام بهرامی",
      subtitle: "۲۰ خرداد ۱۳۹۹",
      description: "سلام برای ۲۰۶ تیپ ۲ مدل ۹۰ مناسب هست؟",
    },
  ],
  totalQas: 20,
  relations: [
    {
      id: "id1",
      image: require("@/assets/images/oil1.jpeg"),
      title: "لاستیک خودرو کنتیننتال مدل CONTI SPORT CONTACT سایز ۲۴۵",
      year: 2018,
      basePrice: 3800000,
      salePrice: 3040000,
    },
    {
      id: "id2",
      image: require("@/assets/images/oil2.jpeg"),
      title: "لاستیک زتوم KL21 سایز 235/65R17",
      year: 2021,
      basePrice: 5800000,
      salePrice: 4930000,
    },
  ],
};
