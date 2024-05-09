const translations = [
  {
    en: {title: 'Air conditioning', description: 'Air conditioning'},
    ru: {title: 'кондиционер', description: 'кондиционер'},
  },
  {
    en: {title: 'Bed linen', description: 'Bed linen'},
    ru: {title: 'постельное белье', description: 'постельное белье'},
  },
  {
    en: {title: 'Black-out blinds', description: 'Black-out blinds'},
    ru: {title: 'затемняющие шторы', description: 'затемняющие шторы'},
  },
  {
    en: {title: 'Body soap', description: 'Body soap'},
    ru: {title: 'жидкое мыло', description: 'жидкое мыло'},
  },
  {
    en: {title: 'Cooking basics', description: 'Cooking basics'},
    ru: {
      title: 'основы приготовления пищи',
      description: 'основы приготовления пищи',
    },
  },
  {
    en: {
      title: 'Pots and pans, oil, salt and pepper',
      description: 'Pots and pans, oil, salt and pepper',
    },
    ru: {
      title: 'кастрюли и сковороды, масло, соль и перец',
      description: 'кастрюли и сковороды, масло, соль и перец',
    },
  },
  {
    en: {title: 'Dining table', description: 'Dining table'},
    ru: {title: 'обеденный стол', description: 'обеденный стол'},
  },
  {
    en: {title: 'Dishes and cutlery', description: 'Dishes and cutlery'},
    ru: {
      title: 'посуда и столовые приборы',
      description: 'посуда и столовые приборы',
    },
  },
  {
    en: {
      title: 'Bowls, chopsticks, plates, cups, etc.',
      description: 'Bowls, chopsticks, plates, cups, etc.',
    },
    ru: {
      title: 'миски, палочки для еды, тарелки, чашки и т.д.',
      description: 'миски, палочки для еды, тарелки, чашки и т.д.',
    },
  },
  {
    en: {title: 'Fire extinguisher', description: 'Fire extinguisher'},
    ru: {title: 'огнетушитель', description: 'огнетушитель'},
  },
  {
    en: {title: 'Free parking', description: 'Free parking'},
    ru: {title: 'бесплатная парковка', description: 'бесплатная парковка'},
  },
  {
    en: {title: 'Hair dryer', description: 'Hair dryer'},
    ru: {title: 'фен', description: 'фен'},
  },
  {
    en: {title: 'Heating', description: 'Heating'},
    ru: {title: 'отопление', description: 'отопление'},
  },
  {
    en: {title: 'Hot water', description: 'Hot water'},
    ru: {title: 'горячая вода', description: 'горячая вода'},
  },
  {
    en: {title: 'Hot water kettle', description: 'Hot water kettle'},
    ru: {title: 'чайник', description: 'чайник'},
  },
  {
    en: {title: 'Iron', description: 'Iron'},
    ru: {title: 'утюг', description: 'утюг'},
  },
  {
    en: {title: 'Kitchen', description: 'Kitchen'},
    ru: {title: 'кухня', description: 'кухня'},
  },
  {
    en: {title: 'Kitchenette', description: 'Kitchenette'},
    ru: {title: 'мини-кухня', description: 'мини-кухня'},
  },
  {
    en: {title: 'Microwave', description: 'Microwave'},
    ru: {title: 'микроволновая печь', description: 'микроволновая печь'},
  },
  {
    en: {title: 'Outdoor dining area', description: 'Outdoor dining area'},
    ru: {title: 'зона для пикника', description: 'зона для пикника'},
  },
  {
    en: {title: 'Outdoor shower', description: 'Outdoor shower'},
    ru: {title: 'уличный душ', description: 'уличный душ'},
  },
  {
    en: {title: 'Patio or balcony', description: 'Patio or balcony'},
    ru: {title: 'патио или балкон', description: 'патио или балкон'},
  },
  {
    en: {title: 'Pool', description: 'Pool'},
    ru: {title: 'бассейн', description: 'бассейн'},
  },
  {
    en: {title: 'Refrigerator', description: 'Refrigerator'},
    ru: {title: 'холодильник', description: 'холодильник'},
  },
  {
    en: {title: 'Shampoo', description: 'Shampoo'},
    ru: {title: 'шампунь', description: 'шампунь'},
  },
  {
    en: {title: 'Smoke alarm', description: 'Smoke alarm'},
    ru: {title: 'дымовой датчик', description: 'дымовой датчик'},
  },
  {
    en: {title: 'Stove', description: 'Stove'},
    ru: {title: 'плита', description: 'плита'},
  },
  {
    en: {title: 'Toaster', description: 'Toaster'},
    ru: {title: 'тостер', description: 'тостер'},
  },
  {
    en: {title: 'TV', description: 'TV'},
    ru: {title: 'телевизор', description: 'телевизор'},
  },
  {
    en: {title: 'Washing machine', description: 'Washing machine'},
    ru: {title: 'стиральная машина', description: 'стиральная машина'},
  },
  {
    en: {title: 'Wi-Fi', description: 'Wi-Fi'},
    ru: {title: 'Wi-Fi', description: 'Wi-Fi'},
  },
];

const amenities = () => {
  return translations.map(({en, ru}) => {
    return {
      icon: `https://astayhome.com/assets/icons/amenities/${encodeURI(en.title)}.png`,
      translations: {en, ru},
    };
  });
};


exports.amenities = amenities();
// const amenities = [
//   {
//     icon: 'High-speed internet',
//     title: 'Internet',
//     description: 'High-speed internet connection',
//   },
//   {
//     icon: 'Air conditioning',
//     title: 'Air Conditioning',
//     description: 'Air conditioning system',
//   },
//   {
//     icon: 'Heating',
//     title: 'Heating',
//     description: 'Heating system',
//   },
//   {
//     icon: 'Fully-equipped kitchen (refrigerator, oven, stove, microwave, dishwasher, coffee maker, toaster, cookware, and dishware)',
//     title: 'Kitchen',
//     description: 'Fully-equipped kitchen with appliances and cookware',
//   },
//   {
//     icon: 'Washer and dryer',
//     title: 'Washer and Dryer',
//     description: 'In-unit washer and dryer',
//   },
//   {
//     icon: 'Iron and ironing board',
//     title: 'Iron and Ironing Board',
//     description: 'Iron and ironing board provided',
//   },
//   {
//     icon: 'Hairdryer',
//     title: 'Hairdryer',
//     description: 'Hairdryer provided',
//   },
//   {
//     icon: 'Bed linens and towels',
//     title: 'Bed Linens and Towels',
//     description: 'Bed linens and towels provided',
//   },
//   {
//     icon: 'Television with streaming services',
//     title: 'Television with Streaming Services',
//     description: 'TV with streaming services available',
//   },
//   {
//     icon: 'Work desk and chair',
//     title: 'Work Desk and Chair',
//     description: 'Work desk and chair provided',
//   },
//   {
//     icon: 'Sofa and coffee table',
//     title: 'Sofa and Coffee Table',
//     description: 'Sofa and coffee table provided',
//   },
//   {
//     icon: 'Dining table and chairs',
//     title: 'Dining Table and Chairs',
//     description: 'Dining table and chairs provided',
//   },
//   {
//     icon: 'Closet and hangers',
//     title: 'Closet and Hangers',
//     description: 'Closet and hangers provided',
//   },
//   {
//     icon: 'Bathroom with shower and/or bathtub, Toiletries (shampoo, conditioner, body wash, and hand soap)',
//     title: 'Bathroom and Toiletries',
//     description: 'Bathroom with shower and/or bathtub, toiletries provided',
//   },
//   {
//     icon: 'Balcony or terrace',
//     title: 'Balcony or Terrace',
//     description: 'Balcony or terrace available',
//   },
//   {
//     icon: 'Fireplace',
//     title: 'Fireplace',
//     description: 'Fireplace provided',
//   },
//   {
//     icon: 'Extra bedding (upon request)',
//     title: 'Extra Bedding (Upon Request)',
//     description: 'Extra bedding available upon request',
//   },
//   {
//     icon: 'Smart home features (such as smart locks or thermostats)',
//     title: 'Smart Home Features',
//     description: 'Smart home features available',
//   },
//   {
//     icon: 'Access to a gym or fitness facility',
//     title: 'Gym Access',
//     description: 'Access to a gym or fitness facility',
//   },
//   {
//     icon: 'Sauna',
//     title: 'Sauna',
//     description: 'Sauna available',
//   },
//   {
//     icon: 'Jacuzzi or hot tub',
//     title: 'Jacuzzi or Hot Tub',
//     description: 'Jacuzzi or hot tub available',
//   },
//   {
//     icon: 'Pet-friendly amenities (pet station, pet washing station)',
//     title: 'Pet-friendly Amenities',
//     description:
//       'Pet-friendly amenities available (pet station, pet washing station)',
//   },
//   {
//     icon: 'Garage parking',
//     title: 'Garage Parking',
//     description: 'Garage parking available',
//   },
//   {
//     icon: 'Security system',
//     title: 'Security System',
//     description: 'Security system installed',
//   },
//   {
//     icon: 'Concierge service',
//     title: 'Concierge Service',
//     description: 'Concierge service available',
//   },
//   {
//     icon: 'Access to an elevator',
//     title: 'Elevator Access',
//     description: 'Access to an elevator',
//   },
//   {
//     icon: 'Disabled access facilities',
//     title: 'Disabled Access Facilities',
//     description: 'Facilities for disabled access available',
//   },
//   {
//     icon: 'Private pool',
//     title: 'Private Pool',
//     description: 'Private pool available',
//   },
//   {
//     icon: 'Private garden or backyard',
//     title: 'Private Garden or Backyard',
//     description: 'Private garden or backyard available',
//   },
// ];
