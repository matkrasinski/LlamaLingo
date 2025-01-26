export const getWoman = (languageCode) => {
  const translations = {
    ar: 'امرأة',
    bn: 'মহিলা',
    cs: 'Žena',
    de: 'Frau',
    el: 'Γυναίκα',
    es: 'Mujer',
    fr: 'Femme',
    hi: 'महिला',
    hu: 'Nő',
    id: 'Wanita',
    it: 'Donna',
    ja: '女性',
    ko: '여성',
    nl: 'Vrouw',
    pl: 'Kobieta',
    pt: 'Mulher',
    ro: 'Femeie',
    ru: 'Женщина',
    th: 'ผู้หญิง',
    tl: 'Babae',
    tr: 'Kadın',
    uk: 'Жінка',
    vi: 'Phụ nữ',
    zh: '女人',
  };

  return translations[languageCode] || 'Woman';
};


export const getMan = (languageCode) => {
  const translations = {
    ar: 'رجل',
    bn: 'পুরুষ',
    cs: 'Muž',
    de: 'Mann',
    el: 'Άντρας',
    es: 'Hombre',
    fr: 'Homme',
    hi: 'पुरुष',
    hu: 'Férfi',
    id: 'Pria',
    it: 'Uomo',
    ja: '男性',
    ko: '남성',
    nl: 'Man',
    pl: 'Mężczyzna',
    pt: 'Homem',
    ro: 'Bărbat',
    ru: 'Мужчина',
    th: 'ผู้ชาย',
    tl: 'Lalaki',
    tr: 'Erkek',
    uk: 'Чоловік',
    vi: 'Đàn ông',
    zh: '男人',
  };

  return translations[languageCode] || 'Man';
};


export const getApple = (languageCode) => {
  const translations = {
    ar: 'تفاح',
    bn: 'আপেল',
    cs: 'Jabko',
    de: 'Apfel',
    el: 'Μήλο',
    es: 'Manzana',
    fr: 'Pomme',
    hi: 'सेब',
    hu: 'Alma',
    id: 'Apel',
    it: 'Mela',
    ja: 'リンゴ',
    ko: '사과',
    nl: 'Appel',
    pl: 'Jabłko',
    pt: 'Maçã',
    ro: 'Măr',
    ru: 'Яблоко',
    th: 'แอปเปิ้ล',
    tl: 'Mansanas',
    tr: 'Elma',
    uk: 'Яблуко',
    vi: 'Táo',
    zh: '苹果',
  };

  return translations[languageCode] || 'Apple';
};
