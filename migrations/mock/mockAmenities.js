const amenities = [
  {
    'Apartment Amenities': {
      internet: {
        src: 'High-speed internet',
        title: 'Internet',
        description: 'High-speed internet connection'
      },
      ac: {
        src: 'Air conditioning',
        title: 'Air Conditioning',
        description: 'Air conditioning system'
      },
      heating: {
        src: 'Heating',
        title: 'Heating',
        description: 'Heating system'
      },
      kitchen: {
        src: 'Fully-equipped kitchen (refrigerator, oven, stove, microwave, dishwasher, coffee maker, toaster, cookware, and dishware)',
        title: 'Kitchen',
        description: 'Fully-equipped kitchen with appliances and cookware'
      },
      washer_dryer: {
        src: 'Washer and dryer',
        title: 'Washer and Dryer',
        description: 'In-unit washer and dryer'
      },
      iron: {
        src: 'Iron and ironing board',
        title: 'Iron and Ironing Board',
        description: 'Iron and ironing board provided'
      },
      hairdryer: {
        src: 'Hairdryer',
        title: 'Hairdryer',
        description: 'Hairdryer provided'
      },
      bed_linens_towels: {
        src: 'Bed linens and towels',
        title: 'Bed Linens and Towels',
        description: 'Bed linens and towels provided'
      },
      tv_streaming: {
        src: 'Television with streaming services',
        title: 'Television with Streaming Services',
        description: 'TV with streaming services available'
      },
      work_desk_chair: {
        src: 'Work desk and chair',
        title: 'Work Desk and Chair',
        description: 'Work desk and chair provided'
      },
      sofa_coffee_table: {
        src: 'Sofa and coffee table',
        title: 'Sofa and Coffee Table',
        description: 'Sofa and coffee table provided'
      },
      dining_table_chairs: {
        src: 'Dining table and chairs',
        title: 'Dining Table and Chairs',
        description: 'Dining table and chairs provided'
      },
      closet_hangers: {
        src: 'Closet and hangers',
        title: 'Closet and Hangers',
        description: 'Closet and hangers provided'
      },
      bathroom_toiletries: {
        src: 'Bathroom with shower and/or bathtub, Toiletries (shampoo, conditioner, body wash, and hand soap)',
        title: 'Bathroom and Toiletries',
        description: 'Bathroom with shower and/or bathtub, toiletries provided'
      },
      balcony_terrace: {
        src: 'Balcony or terrace',
        title: 'Balcony or Terrace',
        description: 'Balcony or terrace available'
      },
      fireplace: {
        src: 'Fireplace',
        title: 'Fireplace',
        description: 'Fireplace provided'
      },
      extra_bedding: {
        src: 'Extra bedding (upon request)',
        title: 'Extra Bedding (Upon Request)',
        description: 'Extra bedding available upon request'
      },
      smart_home_features: {
        src: 'Smart home features (such as smart locks or thermostats)',
        title: 'Smart Home Features',
        description: 'Smart home features available'
      },
      gym_access: {
        src: 'Access to a gym or fitness facility',
        title: 'Gym Access',
        description: 'Access to a gym or fitness facility'
      },
      sauna: {
        src: 'Sauna',
        title: 'Sauna',
        description: 'Sauna available'
      },
      jacuzzi: {
        src: 'Jacuzzi or hot tub',
        title: 'Jacuzzi or Hot Tub',
        description: 'Jacuzzi or hot tub available'
      },
      pet_friendly: {
        src: 'Pet-friendly amenities (pet station, pet washing station)',
        title: 'Pet-friendly Amenities',
        description: 'Pet-friendly amenities available (pet station, pet washing station)'
      },
      garage_parking: {
        src: 'Garage parking',
        title: 'Garage Parking',
        description: 'Garage parking available'
      },
      security_system: {
        src: 'Security system',
        title: 'Security System',
        description: 'Security system installed'
      },
      concierge_service: {
        src: 'Concierge service',
        title: 'Concierge Service',
        description: 'Concierge service available'
      },
      elevator_access: {
        src: 'Access to an elevator',
        title: 'Elevator Access',
        description: 'Access to an elevator'
      },
      disabled_access: {
        src: 'Disabled access facilities',
        title: 'Disabled Access Facilities',
        description: 'Facilities for disabled access available'
      },
      private_pool: {
        src: 'Private pool',
        title: 'Private Pool',
        description: 'Private pool available'
      },
      private_garden: {
        src: 'Private garden or backyard',
        title: 'Private Garden or Backyard',
        description: 'Private garden or backyard available'
      }
    }
  },
  {
    'Building Amenities': {
      elevator: {
        src: 'Elevator',
        title: 'Elevator',
        description: 'Elevator in the building'
      },
      parking: {
        src: 'Parking (covered or uncovered)',
        title: 'Parking',
        description: 'Parking available (covered or uncovered)'
      },
      gym_fitness: {
        src: 'Gym and fitness center',
        title: 'Gym and Fitness Center',
        description: 'Gym and fitness center available'
      },
      pool_hot_tub: {
        src: 'Pool and hot tub',
        title: 'Pool and Hot Tub',
        description: 'Pool and hot tub available'
      },
      rooftop_terrace_garden: {
        src: 'Rooftop terrace or garden',
        title: 'Rooftop Terrace or Garden',
        description: 'Rooftop terrace or garden available'
      },
      bbq_area: {
        src: 'BBQ area',
        title: 'BBQ Area',
        description: 'BBQ area available'
      },
      business_center: {
        src: 'Business center',
        title: 'Business Center',
        description: 'Business center available'
      },
      lounge_community_room: {
        src: 'Lounge or community room',
        title: 'Lounge or Community Room',
        description: 'Lounge or community room available'
      },
      bike_storage: {
        src: 'Bike storage',
        title: 'Bike Storage',
        description: 'Bike storage available'
      },
      security_system_cameras: {
        src: 'Security system and cameras',
        title: 'Security System and Cameras',
        description: 'Security system and cameras installed'
      },
      maintenance_management: {
        src: 'On-site maintenance and management',
        title: 'Maintenance and Management',
        description: 'On-site maintenance and management available'
      },
      pet_friendly: {
        src: 'Pet-friendly amenities (pet station, pet washing station)',
        title: 'Pet-friendly Amenities',
        description: 'Pet-friendly amenities available (pet station, pet washing station)'
      },
      conference_facilities: {
        src: 'Conference facilities',
        title: 'Conference Facilities',
        description: 'Conference facilities available'
      },
      laundry_service: {
        src: 'Laundry service',
        title: 'Laundry Service',
        description: 'Laundry service available'
      },
      housekeeping_service: {
        src: 'Housekeeping service',
        title: 'Housekeeping Service',
        description: 'Housekeeping service available'
      },
      shuttle_service: {
        src: 'Shuttle service',
        title: 'Shuttle Service',
        description: 'Shuttle service available'
      },
      restaurant_bar: {
        src: 'On-site restaurant or bar',
        title: 'Restaurant or Bar',
        description: 'On-site restaurant or bar available'
      },
      children_play_area: {
        src: "Children's play area",
        title: "Children's Play Area",
        description: "Children's play area available"
      },
      library: {
        src: 'Library',
        title: 'Library',
        description: 'Library available'
      },
      car_rental_service: {
        src: 'Car rental service',
        title: 'Car Rental Service',
        description: 'Car rental service available'
      },
      spa: {
        src: 'Spa',
        title: 'Spa',
        description: 'Spa available'
      },
      beach_access: {
        src: 'Beach access',
        title: 'Beach Access',
        description: 'Beach access available'
      },
      ski_storage: {
        src: 'Ski storage',
        title: 'Ski Storage',
        description: 'Ski storage available'
      },
      '24_hour_reception': {
        src: '24-hour reception',
        title: '24-hour Reception',
        description: '24-hour reception available'
      },
      tour_desk: {
        src: 'Tour desk',
        title: 'Tour Desk',
        description: 'Tour desk available'
      },
      airport_transportation: {
        src: 'Airport transportation',
        title: 'Airport Transportation',
        description: 'Airport transportation available'
      },
      vending_machines: {
        src: 'Vending machines',
        title: 'Vending Machines',
        description: 'Vending machines available'
      },
      atm: {
        src: 'ATM',
        title: 'ATM',
        description: 'ATM available'
      },
      currency_exchange: {
        src: 'Currency exchange',
        title: 'Currency Exchange',
        description: 'Currency exchange available'
      }
    }
  }
];
