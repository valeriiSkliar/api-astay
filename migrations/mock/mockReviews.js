const mockReviews = [
  {
    id: '1',
    listing_id: '03c869af-2fc5-488d-9995-3484ffed56dc',
    complex_id: '1',
    avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-12-24',
    review:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    name: 'Corabella',
  },
  {
    id: '2',
    listing_id: 'e860299f-4802-44da-abbc-616f4b85c40c',

    avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-06-07',
    review:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    name: 'Adda',
  },
  {
    id: '3',
    listing_id: 'ecd2468d-62f1-4fdf-90e1-7bc07fe80af5',

    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-08-16',
    review:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    name: 'Bethena',
  },
  {
    id: '4',
    listing_id: '30f50f87-cae9-4012-853f-e88be907b038',
    complex_id: '1',
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-09-24',
    review:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    name: 'Beale',
  },
  {
    id: '5',
    listing_id: 'fc2e87dc-f48d-46f7-b348-51497c4edef0',

    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-10-10',
    review: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    name: 'Micheil',
  },
  {
    id: '6',
    listing_id: '054b66ff-1edb-4e86-b317-841295cdd139',

    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-05-09',
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    name: 'Lona',
  },
  {
    id: '7',
    listing_id: '5c97b253-8be7-4ee1-9e1b-400516517f55',

    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-09-25',
    review:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    name: 'Marcellus',
  },
  {
    id: '8',
    listing_id: '0f92b38e-488e-4f9a-909b-b61d18b0f766',

    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-06-04',
    review:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    name: 'Kippy',
  },
  {
    id: '9',
    listing_id: 'ced96144-16f5-4a71-93de-a4ab7edf98d0',

    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-10-10',
    review:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    name: 'Carlina',
  },
  {
    id: '10',
    listing_id: '8dd5dae5-751f-492a-9f3d-f56ca3d641bc',

    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-06-19',
    review:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    name: 'Cornelle',
  },
  {
    id: '11',
    listing_id: '06cfd4c1-0d6f-4f22-894b-73eab148aad9',

    avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-10-03',
    review:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    name: 'Zenia',
  },
  {
    id: '12',
    listing_id: '26fd7309-08f0-4431-8fef-23eb0020cf73',

    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-08-14',
    review:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    name: 'Odille',
  },
  {
    id: '13',
    listing_id: 'd2a4a566-8d0a-481a-95cb-4b4d6034d962',

    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-11-06',
    review:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    name: 'Minne',
  },
  {
    id: '14',
    listing_id: 'bb104edd-619c-4718-9fc9-cad9d3ee4f42',

    avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-03-19',
    review:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    name: 'Ignatius',
  },
  {
    id: '15',
    listing_id: 'f09d2718-c3df-43ec-a960-dc1d20baa8b0',

    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-05-30',
    review:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    name: 'Moritz',
  },
  {
    id: '16',
    listing_id: '6d9bb8a3-f9c1-406e-86a6-349641baf226',

    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-05-11',
    review:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    name: 'Calhoun',
  },
  {
    id: '17',
    listing_id: '3e0d658e-cff3-4f3f-bfba-034a86b0e75a',

    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    roomName: 'Sea view',
    reviewDate: '2024-02-05',
    review:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    name: 'Albertina',
  },
  {
    id: '18',
    listing_id: 'fbdf6eb5-57b3-40f7-a119-9539fa2e3523',

    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-02-23',
    review:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    name: 'Wheeler',
  },
  {
    id: '19',
    listing_id: 'cd0b872a-e8ef-42af-9a5b-1636936a22c5',

    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-05-23',
    review:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    name: 'Eal',
  },
  {
    id: '20',
    listing_id: 'bca77c39-fb48-4f8d-b590-03bd5078d3e2',

    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-04-15',
    review:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    name: 'Jordana',
  },
  {
    id: '21',
    listing_id: '29ed4519-66bc-4319-9b45-5dd0f8656800',

    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-03-10',
    review:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    name: 'Cissiee',
  },
  {
    id: '22',
    listing_id: '061b840a-ed4e-4e19-972c-2a19ac9dd9d9',

    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-11-27',
    review:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    name: 'Nara',
  },
  {
    id: '23',
    listing_id: 'df28ea30-9811-4c94-b67b-a2037f059fed',

    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    roomName: 'Sea view',
    reviewDate: '2024-01-25',
    review:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    name: 'Nicholas',
  },
  {
    id: '24',
    listing_id: '163e211d-30e8-4ede-8e98-34f2aa66f454',

    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    roomName: 'Sea view',
    reviewDate: '2024-02-22',
    review:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    name: 'Coleen',
  },
  {
    id: '25',
    listing_id: 'ed63bbe2-fbeb-4569-9bac-75db7917f56b',

    avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-06-01',
    review:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    name: 'Land',
  },
  {
    id: '26',
    listing_id: 'e2959f0f-1cbb-42ad-ad33-43d9ed7fe261',

    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-04-09',
    review:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    name: 'Melonie',
  },
  {
    id: '27',
    listing_id: '014add00-89d9-405b-9d5a-6f59925f614a',

    avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-06-11',
    review:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    name: 'Belva',
  },
  {
    id: '28',
    listing_id: 'de128783-0cb9-4d35-a453-bd6475bde313',

    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-12-27',
    review:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    name: 'Hali',
  },
  {
    id: '29',
    listing_id: 'b72edf4f-fb57-4db9-bed6-a4f44452f891',

    avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
    roomName: 'Sea view',
    reviewDate: '2024-01-21',
    review:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    name: 'Jennie',
  },
  {
    id: '30',
    listing_id: '1d8442cd-a39f-4057-9d6e-c237fcf22c02',

    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-12-04',
    review:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    name: 'Kristi',
  },
  {
    id: '31',
    listing_id: '6db249e8-c29b-4889-8d3f-2aef387d53b5',

    avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-01-01',
    review:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    name: 'Renelle',
  },
  {
    id: '32',
    listing_id: '3d2f613b-a391-4cb7-b3a6-84df897f7611',

    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-10-02',
    review:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    name: 'Burtie',
  },
  {
    id: '33',
    listing_id: 'ad3d57b3-49b0-41e9-95fc-e5ebc2391fba',

    avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-06-07',
    review:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    name: 'Towny',
  },
  {
    id: '34',
    listing_id: 'a85efbbd-c3e6-4a35-abb2-5f2923afe996',

    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-06-06',
    review:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    name: 'Maury',
  },
  {
    id: '35',
    listing_id: 'ce99a995-0dcf-4253-986e-21ede64bf964',

    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    roomName: 'Sea view',
    reviewDate: '2024-01-14',
    review:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    name: 'Dukey',
  },
  {
    id: '36',
    listing_id: '4ba64e43-6fc9-4378-9d7e-c04e6716f91e',

    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-05-30',
    review:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    name: 'Dee',
  },
  {
    id: '37',
    listing_id: 'af29f821-e878-4390-9863-27876e035550',

    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-11-22',
    review:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    name: 'Aigneis',
  },
  {
    id: '38',
    listing_id: '3b86bf00-0b1f-4c06-a1cd-9ca06199dc43',

    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-05-21',
    review:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    name: 'Garald',
  },
  {
    id: '39',
    listing_id: 'ff5f1186-616b-4e2c-8d15-f76a11147db7',

    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-10-06',
    review:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    name: 'Ermengarde',
  },
  {
    id: '40',
    listing_id: 'b61bfbf4-fedb-4187-a0b4-368e43bad8a8',

    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-02-13',
    review:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    name: 'Powell',
  },
  {
    id: '41',
    listing_id: '45148cc1-3cb2-49b5-bf02-516df0fa5307',

    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-10-07',
    review:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    name: 'Loutitia',
  },
  {
    id: '42',
    listing_id: '81456712-4454-4e73-9b9d-a6b659ce459b',

    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-03-31',
    review:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    name: 'Anders',
  },
  {
    id: '43',
    listing_id: 'e4549f86-798c-487c-84fa-e9953a35be1c',

    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-06-01',
    review:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    name: 'Phaedra',
  },
  {
    id: '44',
    listing_id: '3c18720a-6d71-49f9-84af-542b0add2404',

    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-05-21',
    review:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    name: 'Ase',
  },
  {
    id: '45',
    listing_id: 'a34f6df0-6dc6-4318-b104-c6e536fa2198',

    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-02-23',
    review:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    name: 'Levi',
  },
  {
    id: '46',
    listing_id: '9e7d1dd1-4291-4a03-8b8e-30c0e6cd459e',

    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-08-11',
    review:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    name: 'Corrina',
  },
  {
    id: '47',
    listing_id: 'fa938ff0-a731-46f5-8b09-869912946c6c',

    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-07-18',
    review:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    name: 'Jarib',
  },
  {
    id: '48',
    listing_id: 'c22a999c-c5ed-4f79-8ef9-0d2654403121',

    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-08-24',
    review:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    name: 'Herb',
  },
  {
    id: '49',
    listing_id: '01e60fa5-64fb-4ce3-b75a-843f2c624955',

    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-05-31',
    review: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    name: 'Moreen',
  },
  {
    id: '50',
    listing_id: '491acc2d-05d4-4ec5-8576-2f9007912262',

    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-10-01',
    review:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    name: 'Seline',
  },
  {
    id: '51',
    listing_id: 'b9e806df-f97e-4894-a88b-8010ac560f51',

    avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-11-28',
    review: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    name: 'Ralina',
  },
  {
    id: '52',
    listing_id: 'f6119809-9439-4879-8255-37d2f0f7e819',

    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-08-31',
    review:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    name: 'Barbette',
  },
  {
    id: '53',
    listing_id: '198db4bb-1ddf-41c9-8cae-62207d330e80',

    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-08-20',
    review:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    name: 'Leonelle',
  },
  {
    id: '54',
    listing_id: 'c49dd937-8ee2-403e-9a70-106a66cc2f80',

    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-06-06',
    review:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    name: 'Prisca',
  },
  {
    id: '55',
    listing_id: '1a7f3275-43c0-47a0-a196-04f29f03c04f',

    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-09-10',
    review:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    name: 'Codee',
  },
  {
    id: '56',
    listing_id: '3c380f07-4c34-4b98-94fc-6c97ce6f3d6e',

    avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-01-26',
    review:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    name: 'Avie',
  },
  {
    id: '57',
    listing_id: 'ecd1e72a-92a1-4897-b79c-fdcef858345c',

    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-04-03',
    review:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    name: 'Rae',
  },
  {
    id: '58',
    listing_id: 'b98494c3-52e3-4779-ada0-6cef860314f1',

    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-11-14',
    review:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    name: 'Auberon',
  },
  {
    id: '59',
    listing_id: 'a4efb4f8-f00a-4ef9-aaba-38cc3f5587d4',

    avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-07-09',
    review:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    name: 'Irene',
  },
  {
    id: '60',
    listing_id: '0e582d87-55c1-4d5d-92ab-c646fa738668',

    avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-02-12',
    review: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    name: 'Georgianne',
  },
  {
    id: '61',
    listing_id: '2dc2e6fa-a37b-403e-b38e-137148b9a095',

    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-02-05',
    review:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    name: 'Dede',
  },
  {
    id: '62',
    listing_id: '2dff3050-00b4-4f90-8a41-93a2062388e9',

    avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-06-18',
    review:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    name: 'Aldon',
  },
  {
    id: '63',
    listing_id: '84a7284c-22b6-424a-9110-9f3505a9a43e',

    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    roomName: 'Sea view',
    reviewDate: '2024-03-05',
    review:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    name: 'Halie',
  },
  {
    id: '64',
    listing_id: '956dab1c-0de1-4cc8-8295-f3b55069bda4',

    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-11-16',
    review:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    name: 'Devinne',
  },
  {
    id: '65',
    listing_id: 'e0f68eb4-9a52-44a1-b15d-92427c3241d5',

    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-04-12',
    review:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    name: 'Timmie',
  },
  {
    id: '66',
    listing_id: 'fb119c5c-0f79-4b01-aaa6-e818bf696b37',

    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-02-08',
    review:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    name: 'Christal',
  },
  {
    id: '67',
    listing_id: '0a747e55-695b-4988-94b0-9865ed9c309c',

    avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-09-16',
    review:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    name: 'Liam',
  },
  {
    id: '68',
    listing_id: '2662fbb4-1e42-435b-9173-85543e60fed4',

    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-11-29',
    review:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    name: 'Gusty',
  },
  {
    id: '69',
    listing_id: '4ab07dee-e3b7-45b1-9ea1-f30c881ae28c',

    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-09-22',
    review:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    name: 'Lucian',
  },
  {
    id: '70',
    listing_id: 'ba9bf937-d58e-4bf7-a9f4-1f37e39626d2',

    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-09-29',
    review:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    name: 'Morse',
  },
  {
    id: '71',
    listing_id: 'dcc0ce2a-e23b-4077-8095-7ae533058ee1',

    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-05-24',
    review:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    name: 'Niki',
  },
  {
    id: '72',
    listing_id: '2855405c-b914-4a65-b1e1-a7a8239efb6a',

    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-12-03',
    review:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    name: 'Clevey',
  },
  {
    id: '73',
    listing_id: '871b43a8-bde1-4a30-a2df-6a83bb554c86',

    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-05-31',
    review:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    name: 'Jacquette',
  },
  {
    id: '74',
    listing_id: '62a0acd6-ae1c-4af4-afcf-194a55b00135',

    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-07-07',
    review:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    name: 'Rolando',
  },
  {
    id: '75',
    listing_id: 'f527000a-a0cc-44ef-9309-07d10fd5b74a',

    avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-11-03',
    review:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    name: 'Kirby',
  },
  {
    id: '76',
    listing_id: 'ff6bc482-ce6f-4dab-9b4c-210e4446e4d1',

    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-11-15',
    review:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    name: 'Tonia',
  },
  {
    id: '77',
    listing_id: 'eea7db3f-d34d-4725-adf9-e5761ea62e38',

    avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-07-10',
    review:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    name: 'Darius',
  },
  {
    id: '78',
    listing_id: 'bdaa1300-2d5c-4cc3-bc18-cc3fac6c6b0e',

    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-07-28',
    review:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    name: 'Melonie',
  },
  {
    id: '79',
    listing_id: '28dd4ee5-69b1-431d-87fd-3b1dcb423372',

    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-05-12',
    review:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    name: 'Ethelbert',
  },
  {
    id: '80',
    listing_id: '5bc93f40-40c1-4c3d-be52-8f39c20d397b',

    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-01-23',
    review: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    name: 'Wesley',
  },
  {
    id: '81',
    listing_id: 'ec507366-ec5b-4178-a0e5-141efbd6d8a6',

    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-03-12',
    review:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    name: 'Pietro',
  },
  {
    id: '82',
    listing_id: 'a7d43fb2-f387-46b1-9ddd-789390330246',

    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-06-28',
    review:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    name: 'Salomone',
  },
  {
    id: '83',
    listing_id: '79772b7f-582c-4936-87f8-d2a5097dca7f',

    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-05-31',
    review:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    name: 'Shepperd',
  },
  {
    id: '84',
    listing_id: '7eabf3d4-0f33-46e3-a7db-e8935992b76f',

    avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-12-16',
    review:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    name: 'Noella',
  },
  {
    id: '85',
    listing_id: '9864f1dc-e15f-45c3-a064-f32f052b7998',

    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-12-12',
    review:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    name: 'Garwood',
  },
  {
    id: '86',
    listing_id: 'a4a6805b-00be-41c5-ae77-a9bf2fce071f',

    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-10-20',
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    name: 'Chane',
  },
  {
    id: '87',
    listing_id: '989acfdb-c358-4938-b47e-d85b6b921871',

    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-03-06',
    review:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    name: 'Cori',
  },
  {
    id: '88',
    listing_id: 'da43e162-206c-4203-918b-40422342b36f',

    avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-07-27',
    review:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    name: 'Elliot',
  },
  {
    id: '89',
    listing_id: 'c80380bc-9a22-4da6-ab74-5a708eff1c14',

    avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-12-05',
    review:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    name: 'Andrey',
  },
  {
    id: '90',
    listing_id: '478ccce5-27ac-467e-b653-6a60b697891e',

    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-10-28',
    review:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    name: 'Powell',
  },
  {
    id: '91',
    listing_id: 'cfd429d6-18c7-4d4c-9a9a-902e1fc3ed99',

    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-02-18',
    review:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    name: 'Morissa',
  },
  {
    id: '92',
    listing_id: 'e706ebed-6c9d-4c18-b109-ead2b130b68d',

    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-10-09',
    review:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    name: 'Caryl',
  },
  {
    id: '93',
    listing_id: '821603cc-b253-40c3-9dd3-6e55b4fb42cd',

    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    roomName: 'Pool view',
    reviewDate: '2024-01-24',
    review:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    name: 'Anthea',
  },
  {
    id: '94',
    listing_id: '6bf00bb9-b87c-4abc-bf9e-e88a8a6f44f7',

    avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-11-29',
    review:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    name: 'Jan',
  },
  {
    id: '95',
    listing_id: 'ca8b68f7-5617-4edd-82a0-b31c7bb696d1',

    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-01-06',
    review: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    name: 'Charmian',
  },
  {
    id: '96',
    listing_id: '3ccd709d-e80b-4697-8c8c-87ea3f45ba61',

    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    roomName: 'Garden view',
    reviewDate: '2023-06-03',
    review:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    name: 'Adriane',
  },
  {
    id: '97',
    listing_id: 'ec6465d3-bc42-4e95-91a1-7c52ab226574',

    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    roomName: 'Garden view',
    reviewDate: '2024-02-11',
    review:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    name: 'Ollie',
  },
  {
    id: '98',
    listing_id: '8ca9d7e7-5b17-4ba9-9d63-589f6aa64ec6',

    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    roomName: 'Pool view',
    reviewDate: '2023-12-03',
    review:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    name: 'Dewey',
  },
  {
    id: '99',
    listing_id: '1e41cc48-7b78-4270-bd11-e14842ecd987',

    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-07-31',
    review: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    name: 'Teressa',
  },
  {
    id: '100',
    listing_id: '38f7d920-839c-4e90-97c9-f50af68e8e07',

    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    roomName: 'Sea view',
    reviewDate: '2023-05-24',
    review:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    name: 'Wilton',
  },
];

const parsedReviewsArray = [
  {
    clientInfo: {
      clintName: 'P',
      clientCountry: ' Узбекистан',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Uz.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '6 ночей · ',
    stayDate: 'июнь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 20 июня 2023',
    reviewScore: '10',
    positiveText:
      'По организации все было хорошо - Елена, быстро вышла на связь и все организовала- действительно недорогой трансфер,встречу и т.п. Всегда была на связи и отвечала на все вопросы. Спасибо ей большое!\nХорошее расположение - 15-20 минут на тук-туке до центра Паттайи  и 10-15 до пляжа. \nРядом ночной рынок где можно вкусно и недорого поесть. Много ресторанов и кафе поблизости. \nВ самом жилом комплексе - отличный бассейн для всех возрастов - горки, водопады, джакузи, детский бассейн. Детям очень понравилось.',
    negativeText:
      'Москитные сетки на окна были бы не лишними. С ними было бы совсем хорошо т.к. комары прилетали. Если есть фумигатор то он спасает. И если есть возможность, потравить муравьев они не то чтобы сильно мешали,но они были.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-o.png',
    clientInfo: {
      clintName: 'Oleg',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '17 ночей · ',
    stayDate: 'март 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 7 марта 2024',
    reviewScore: '10',
    positiveText:
      'Добрый день!Нам всё очень  понравилось. В номере есть все удобства: большой холодильник,плита,посуда, стиральная машина. Все работало исправно. Это очень удобно. Номера чистые,комфортные,большой балкон.. Бассейны на любой вкус. За территорией постоянно ухаживают,чисто,уютно,комфортно. Очень удобное местоположение кондоминимума (рядом автобусная станция,кафе,магазины,море,рынки). Все очень удобно. Особое спасибо Елене,которая нас встретила,разместила и проявила максимум внимания. Учла все наши пожелания. Обязательно будем останавливаться у Вас ещё. И посоветуем этот кондоминимум нашим знакомым и друзьям.Мы в восторге. Все очень понравилось. Спасибо большое. С уважением, Олег,Татьяна и Иван.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Antonina',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '17 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 27 февраля 2024',
    reviewScore: '10',
    positiveText:
      'Отличные апартаменты с отдельной спальней, вид с балкона 26 этажа - это отдельное удовольствие, любовались закатом❤️‍🔥 В апартаментах есть всё необходимое. Елена, хост, всегда на связи, помогает в любых ситуациях. Кондоминимум хорошо расположен, удобно добираться везде. Также в кондо отличный бассейн.',
    negativeText: '—-',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
    clientInfo: {
      clintName: 'Igor',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '14 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 26 февраля 2024',
    reviewScore: '9,0',
    positiveText:
      'Замечательное месторасположение, предполагающее быстрое перемещение на пляж Джомтьен и к достопримечательностям города на тук-туке (10 бат). Наличие хорошего бассейна на территории, тренажерного зала, сауны, неплохой интернет (геймерам не обольщаться!), достаточно экипированная кухня, наличие стиральной машины. Близость множества магазинов, заведений общепита.',
    negativeText:
      'Локация на дорогу шумновата: с открытым окном будет некомфортно, лучше с видом на бассейн.',
  },
  {
    clientInfo: {
      clintName: 'Nadezhda',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '5 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 22 февраля 2024',
    reviewScore: '8,0',
    negativeText:
      'Ужасный пол в бассейне как асфальтная крошка. Ребенок разодрал ноги в первый же день.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
    clientInfo: {
      clintName: 'Liudmila',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 10 февраля 2024',
    reviewScore: '10',
    positiveText:
      'Апартаменты рассчитаны на 2 человек, с детьми мало места. В целом все хорошо',
    negativeText:
      'Ребенок спал на непонятном спальном месте на полу на матрасе',
  },
  {
    clientInfo: {
      clintName: 'Ина',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '18 ночей · ',
    stayDate: 'январь 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 30 января 2024',
    reviewScore: '8,0',
    positiveText:
      'Локация / местоположение. Все рядом.\nНаличие бассейна, горки, водопады, шезлонги. Закрытая охраняемая территория с авто-мотопарковкой',
    negativeText: 'Не работал хамам (жен)',
  },
  {
    clientInfo: {
      clintName: 'Ivan',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '8 ночей · ',
    stayDate: 'сентябрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 27 октября 2023',
    reviewScore: '10',
    positiveText:
      'Шикарный вариант, Хозяин всегда был на связи. Удобное расположение.',
    negativeText: 'Не было такого',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
    clientInfo: {
      clintName: 'Vitalii',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '14 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 25 октября 2023',
    reviewScore: '10',
    positiveText:
      'Апартаменты полностью соответствуют описанию! Красивый вид и удобная транспортная доступность. Отдельная благодарность Елене за прекрасный сервис.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Anna',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '9 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 20 октября 2023',
    reviewScore: '10',
    positiveText:
      'Отдыхали в октябре 2023. Кондо расположен в районе пляжа Джамтьен. До моря 10 минут. Рядом расположены магазины. Автовокзал,куда приходят автобусы из аэропорта Бангкока,в 3 минутах от Кондо.Два маршрута тук туков проходят по улицам около кондоминимума.\n\nПроживали в квартире на 5 этаже с видом на бассейн. По факту - это 4 бассейна на разных уровнях+ 3 горки и детская площадка. Есть много лежаков. Кроме прекрасного бассейна, жильцы Кондо могут бесплатно пользоваться тренажерным залом и сауной.\n\nВ квартире есть всё необходимое. В спальне большая двуспальная кровать+ кондиционер. В гостиной - диван( раскладной),TV, кондиционер. Кухня полностью оборудована- плита, чайник, тостер, микроволновая печь,кофемолка, фритюрница,много посуды,\nсковородки,кострюли. Также есть стиральная машина, сушилка для белья,утюг, гладильная доска, сейф. Интернет работал всё время очень хорошо. На балконе - столик и стул.\n\nПрекрасная квартира!!!!! Рекомендуем!!! \nСпасибо большое Елене-хозяйке апартаментов. Она очень внимательна к своим гостям,готова помочь в любую минуту. Всегда была на связи !',
  },
  {
    clientInfo: {
      clintName: 'P',
      clientCountry: ' Узбекистан',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Uz.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '6 ночей · ',
    stayDate: 'июнь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 20 июня 2023',
    reviewScore: '10',
    positiveText:
      'По организации все было хорошо - Елена, быстро вышла на связь и все организовала- действительно недорогой трансфер,встречу и т.п. Всегда была на связи и отвечала на все вопросы. Спасибо ей большое!\nХорошее расположение - 15-20 минут на тук-туке до центра Паттайи  и 10-15 до пляжа. \nРядом ночной рынок где можно вкусно и недорого поесть. Много ресторанов и кафе поблизости. \nВ самом жилом комплексе - отличный бассейн для всех возрастов - горки, водопады, джакузи, детский бассейн. Детям очень понравилось.',
    negativeText:
      'Москитные сетки на окна были бы не лишними. С ними было бы совсем хорошо т.к. комары прилетали. Если есть фумигатор то он спасает. И если есть возможность, потравить муравьев они не то чтобы сильно мешали,но они были.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-o.png',
    clientInfo: {
      clintName: 'Oleg',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '17 ночей · ',
    stayDate: 'март 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 7 марта 2024',
    reviewScore: '10',
    positiveText:
      'Добрый день!Нам всё очень  понравилось. В номере есть все удобства: большой холодильник,плита,посуда, стиральная машина. Все работало исправно. Это очень удобно. Номера чистые,комфортные,большой балкон.. Бассейны на любой вкус. За территорией постоянно ухаживают,чисто,уютно,комфортно. Очень удобное местоположение кондоминимума (рядом автобусная станция,кафе,магазины,море,рынки). Все очень удобно. Особое спасибо Елене,которая нас встретила,разместила и проявила максимум внимания. Учла все наши пожелания. Обязательно будем останавливаться у Вас ещё. И посоветуем этот кондоминимум нашим знакомым и друзьям.Мы в восторге. Все очень понравилось. Спасибо большое. С уважением, Олег,Татьяна и Иван.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Antonina',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '17 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 27 февраля 2024',
    reviewScore: '10',
    positiveText:
      'Отличные апартаменты с отдельной спальней, вид с балкона 26 этажа - это отдельное удовольствие, любовались закатом❤️‍🔥 В апартаментах есть всё необходимое. Елена, хост, всегда на связи, помогает в любых ситуациях. Кондоминимум хорошо расположен, удобно добираться везде. Также в кондо отличный бассейн.',
    negativeText: '—-',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
    clientInfo: {
      clintName: 'Igor',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '14 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 26 февраля 2024',
    reviewScore: '9,0',
    positiveText:
      'Замечательное месторасположение, предполагающее быстрое перемещение на пляж Джомтьен и к достопримечательностям города на тук-туке (10 бат). Наличие хорошего бассейна на территории, тренажерного зала, сауны, неплохой интернет (геймерам не обольщаться!), достаточно экипированная кухня, наличие стиральной машины. Близость множества магазинов, заведений общепита.',
    negativeText:
      'Локация на дорогу шумновата: с открытым окном будет некомфортно, лучше с видом на бассейн.',
  },
  {
    clientInfo: {
      clintName: 'Nadezhda',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '5 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 22 февраля 2024',
    reviewScore: '8,0',
    negativeText:
      'Ужасный пол в бассейне как асфальтная крошка. Ребенок разодрал ноги в первый же день.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
    clientInfo: {
      clintName: 'Liudmila',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 10 февраля 2024',
    reviewScore: '10',
    positiveText:
      'Апартаменты рассчитаны на 2 человек, с детьми мало места. В целом все хорошо',
    negativeText:
      'Ребенок спал на непонятном спальном месте на полу на матрасе',
  },
  {
    clientInfo: {
      clintName: 'Ина',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '18 ночей · ',
    stayDate: 'январь 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 30 января 2024',
    reviewScore: '8,0',
    positiveText:
      'Локация / местоположение. Все рядом.\nНаличие бассейна, горки, водопады, шезлонги. Закрытая охраняемая территория с авто-мотопарковкой',
    negativeText: 'Не работал хамам (жен)',
  },
  {
    clientInfo: {
      clintName: 'Ivan',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '8 ночей · ',
    stayDate: 'сентябрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 27 октября 2023',
    reviewScore: '10',
    positiveText:
      'Шикарный вариант, Хозяин всегда был на связи. Удобное расположение.',
    negativeText: 'Не было такого',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
    clientInfo: {
      clintName: 'Vitalii',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '14 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 25 октября 2023',
    reviewScore: '10',
    positiveText:
      'Апартаменты полностью соответствуют описанию! Красивый вид и удобная транспортная доступность. Отдельная благодарность Елене за прекрасный сервис.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Anna',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '9 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 20 октября 2023',
    reviewScore: '10',
    positiveText:
      'Отдыхали в октябре 2023. Кондо расположен в районе пляжа Джамтьен. До моря 10 минут. Рядом расположены магазины. Автовокзал,куда приходят автобусы из аэропорта Бангкока,в 3 минутах от Кондо.Два маршрута тук туков проходят по улицам около кондоминимума.\n\nПроживали в квартире на 5 этаже с видом на бассейн. По факту - это 4 бассейна на разных уровнях+ 3 горки и детская площадка. Есть много лежаков. Кроме прекрасного бассейна, жильцы Кондо могут бесплатно пользоваться тренажерным залом и сауной.\n\nВ квартире есть всё необходимое. В спальне большая двуспальная кровать+ кондиционер. В гостиной - диван( раскладной),TV, кондиционер. Кухня полностью оборудована- плита, чайник, тостер, микроволновая печь,кофемолка, фритюрница,много посуды,\nсковородки,кострюли. Также есть стиральная машина, сушилка для белья,утюг, гладильная доска, сейф. Интернет работал всё время очень хорошо. На балконе - столик и стул.\n\nПрекрасная квартира!!!!! Рекомендуем!!! \nСпасибо большое Елене-хозяйке апартаментов. Она очень внимательна к своим гостям,готова помочь в любую минуту. Всегда была на связи !',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Maxim',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '28 ночей · ',
    stayDate: 'октябрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 24 октября 2022',
    reviewScore: '9,0',
    positiveText:
      'Уютные, чистые апартаменты. Есть все необходимое для проживания. Хозяин апартаментов всегда на связи. При возникновении каких-либо вопросов все решалось очень быстро. В шаговой доступности 7/11 и другие маркеты.',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/100001560846218/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Mnb2000',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'март 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 17 марта 2022',
    reviewScore: '9,0',
    positiveText: 'Отличной кампус. Чисто, приятно.\nБольшой бассейн с горками',
    negativeText: 'Мы заезжали на маленький срок и не было WiFi',
  },
  {
    clientInfo: {
      clintName: 'Наталия',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '24 ночи · ',
    stayDate: 'январь 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 17 января 2024',
    reviewScore: '1,0',
    positiveText: 'расположение',
    negativeText: 'сломанный диван, покрытие бассейна жесткое',
  },
  {
    clientInfo: {
      clintName: 'Шабров',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '6 ночей · ',
    stayDate: 'июнь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 1 июля 2023',
    reviewScore: '3,0',
    positiveText: 'Жили спокойно, но после выселения начались какие-то чудеса',
    negativeText:
      'Мы жили 1 месяц, бронировали через букинг. Отдали 19000 батт и 4000 батт залог. После выселения мне приходит письмо на почту и в букинг, что прожил там всего 6 дней и отдал 3200 батт. Поменяли бронь без моего ведома. У меня возник вопрос: если вы хотите не платить налоги, надо либо предупреждать, либо делать цену ниже за номер, потому что цена данного номера максимум 15000 батт. А по итогу осталось чувство, что меня обманули, как вообще букинг допускает такое менять условия проживания, после проживания.',
  },
  {
    clientInfo: {
      clintName: 'Марина',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '8 ночей · ',
    stayDate: 'февраль 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 7 февраля 2023',
    reviewScore: '7,0',
    positiveText:
      'Идеальное расположение к морю и к терминалу 21. Рядом кафе где вкусные завтраки. Очень хороший и чистый пляж рядом. Территория зеленая,уютный бассейн.',
    negativeText:
      'Старые полотенца,в пятнах. Постельное для дивана не предложили,пока сами не попросили. Разрезали ногу об плитку на дне бассейна. Здание требует ремонта',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-n.png',
    clientInfo: {
      clintName: 'Nikita',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '7 ночей · ',
    stayDate: 'январь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 13 января 2023',
    reviewScore: '2,0',
    positiveText: 'фото в объявлении',
    negativeText:
      'фото не соответствует действительности.\nномер 306 корпус В этаж 3, не тот что был указан. Вид только во двор на бассейн с шумным фонтаном. Квартира очень маленькая , ремонт убитый, присутствует очень неприятный запах. Его планировали замаскировать ароматизаторами на полках и перед нашим въездом включили кондиционер, но все 2 недели нашего проживания там воняло, приходилось держать окна открытыми, а там шумный фонтан. Очень грязный диван, постирали чехлы вода была черной. Интернет практически не работает, а если удается поймать то он временный и очень слабый. В лобби пароль от wifi не сообщают, говорят что он только для персонала. В самой квартире шумно, т.к слышно о чем говорят соседи и чем занимаются.Сам комплекс нуждается в капитальном ремонте и генеральной уборке. На этаже не было света, а мусорная камера переполнена. Также в квартире есть маленькие муравьи вокруг раковины и варочный панели. Самое интересное, что при въезде администратор предлагала отменить бронирование за скидку в 500 бат. И после нашего выезда изменила информацию что мы проживали вместо 2 недель -одну и заплатили вместо 20 тысяч бат- 8100. Соотвественно нас обманули с ценой, которая не соответствует абсолютно тому, что мы получили. Это супер эконом вариант с плохими условиями пр цене более чем приличного кондо. Советую искать другие варианты, их в Паттайе достаточно. Не тратьте время и деньги на этот вариант. Все фото прилагаем.',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-Z4dJayCO50E/AAAAAAAAAAI/AAAAAAAABaE/AJEK7UgXLVg/s96-c/photo.jpg',
    clientInfo: {
      clintName: 'Roman',
      clientCountry: ' ОАЭ',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ae.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'июль 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 31 июля 2022',
    reviewScore: '6,0',
    positiveText:
      'Расположение; вид из окна; бассейн с кораблями, маяком и горками; близость к крупной дороге(возможность быстро и удобно добираться до разных мест); наличие спортзала',
    negativeText:
      'В номере были тараканы, приобретал вид на море, но вид был в другую сторону, хозяйка довольно хамско общается и врет(типичный риэлтор).',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-d.png',
    clientInfo: {
      clintName: 'Denis',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '14 ночей · ',
    stayDate: 'январь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 21 января 2022',
    reviewScore: '3,0',
    positiveText: 'Только удобная локация.',
    negativeText:
      'КВо первых человек взял комиссию сверху, мол типа вы должны оплатить комиссию букинга. Во вторых коммунальные услуги она посчитала не за 14 дней а за 15 и посчитали её примерно , на глазок( главное что не в минус себе) , плюс было очень грязное постельное  белье ( были пятна крови ). Когда риелтор приехала возвращать депозит , у неё волшебным случаем не оказалось наличных денег и она искала банкомат после приемки квартиры ещё мин 40 , и все равно не отдала ту сумму которую должна была. Да и просто было все грязное и очень сильно воняло .',
  },
  {
    clientInfo: {
      clintName: 'Аноним',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'июль 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 25 июля 2023',
    reviewScore: '9,0',
    positiveText:
      'Цена отличная , подходит для проживания с детьми, бассейн интересный , но искусственная Волна работает только 2а раза в неделю',
    negativeText: 'Проблемы с кондеем ( течет)\nПроблемы с ТВ ( нет сигнала )',
  },
  {
    clientInfo: {
      clintName: 'Аноним',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '1 ночь · ',
    stayDate: 'февраль 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 28 февраля 2023',
    reviewScore: '10',
    positiveText: 'расположение, вид на море с балкона, комфорт и уют номера',
    negativeText: 'немного жесткая кровать',
  },
  {
    clientInfo: {
      clintName: 'Jarmo',
      clientCountry: ' Финляндия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fi.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '20 ночей · ',
    stayDate: 'январь 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 10 января 2024',
    reviewScore: '8,0',
    positiveText:
      'The location is good. The apartment is ok. The hostess Elena is really good +++. I would give 9-10 points if both bedrooms had good beds.',
    negativeText:
      "The beds are very hard. At night you could hear the pumping sound of the apartment's water pumps, but you got used to it after the first week. We lived on the top floor, so the sound of the water pump was probably the cause.  A good night's sleep would guarantee a better holiday.",
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
    clientInfo: {
      clintName: 'Kehinde',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '3 ночи · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 1 января 2024',
    reviewScore: '9,0',
    positiveText:
      'Ideal location to explore Pattaya from especially if you have a car as distance to attractions was not an issue. Good facilities located within a modern condo complex in Pattaya. Excellent host Elena who communicated with  us from the moment the booking was made. Very responsive and answered queries promptly.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
    clientInfo: {
      clintName: 'Rolando',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '17 ночей · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 11 декабря 2023',
    reviewScore: '10',
    positiveText:
      'very good hostess was very friendly. apartment was modern. Beautiful view of Jomtien. Next time I will book there again. Thanks to Helena.',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/1733076863370538/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Ari',
      clientCountry: ' Новая Зеландия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Nz.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '11 ночей · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 4 декабря 2023',
    reviewScore: '10',
    positiveText:
      'I would recommend this condo. Elena was especially helpful, and responded quickly every time we needed . This was my first time in a condo, not a hotel. Don’t need reception, we had Elena.  Enjoyed having a washing machine, to keep everything clean and fresh.\nThanks Elena . She also gave me a late late check out , when my plane was delayed.',
    negativeText: 'The location, busy road, can be hard to cross',
  },
  {
    avatar:
      'https://lh6.googleusercontent.com/-7MEoiSUwXvc/AAAAAAAAAAI/AAAAAAAAARI/c8pfZk7rL2k/photo.jpg?sz=50',
    clientInfo: {
      clintName: 'Balazs',
      clientCountry: ' Венгрия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Hu.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 13 октября 2023',
    reviewScore: '9,0',
    positiveText:
      'The view is quite royal. Condo itself was clean, smelled pleasent. Bed was comfy. Wifi worked well. On 4th floor you can find the gym /small/ and 4x sauna; 2x finnish sauna and 2x steam sauna.',
    negativeText:
      'No black-out curtain, therefore pretty bright in the morning. Bring your eyemask !',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
    clientInfo: {
      clintName: 'Tim',
      clientCountry: ' Ирландия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ie.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '27 ночей · ',
    stayDate: 'сентябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 30 сентября 2023',
    reviewScore: '10',
    positiveText: 'Didn’t have breakfast',
    negativeText: 'It was perfect',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14Gh91xuZvJa_5zd5A_isi7mXHFAnjcR0IMXsObZ86A=s96-c',
    clientInfo: {
      clintName: 'Sumaiyah',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '13 ночей · ',
    stayDate: 'август 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 29 августа 2023',
    reviewScore: '10',
    positiveText:
      'The apartment was beautiful, clean and well maintained. The swimming pool was amazing and we really enjoyed exploring the swimming area. Our host as well as the staff and security were responsive, very friendly and so accommodating  Would highly recommend staying here as the location is perfect. Thank you for a wonderful stay and if we’re in Pattaya again we will definitely be back!',
  },
  {
    avatar:
      'https://lh6.googleusercontent.com/-xnEm2q9nsuE/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7omI336kDNRzNX7yfXpIdd8hWhh6w/s96-c/photo.jpg',
    clientInfo: {
      clintName: 'Thomas',
      clientCountry: ' Ирландия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ie.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'май 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 27 мая 2023',
    reviewScore: '8,0',
    positiveText: 'The View and the swimming pool',
    negativeText: 'Not enough towels more quality cooking utensils',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-z.png',
    clientInfo: {
      clintName: 'Zha',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '2 ночи · ',
    stayDate: 'май 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 14 мая 2023',
    reviewScore: '10',
    positiveText:
      'Fresh apartment in comfortable location, fast wifi, everything you need for cooking, I was happy to have a washing machine . Great park/ seaview.',
    negativeText: 'everything was nice',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Alexander',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '28 ночей · ',
    stayDate: 'март 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 28 марта 2023',
    reviewScore: '9,0',
    positiveText:
      'Elena is a very friendly person who gave me a warm welcome. communication with her was very easy. the apartment is in good condition and the whole complex is very big but also comfortable. the big pool area is perfect for families with kids.\nthe baht-bus-route is directly in front of the condomium complex, so it´s easy to go there. \nIn the apartment is all what you need also for a longer stay.',
    negativeText:
      'the matress in the bed was to soft for my taste - but i found a topper in the apartment - using this was much better.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
    clientInfo: {
      clintName: 'Konstantin',
      clientCountry: ' Турция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Tr.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '7 ночей · ',
    stayDate: 'март 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 26 марта 2023',
    reviewScore: '9,0',
    positiveText:
      '- awesome property manager Elena\n- had everything necessary',
    negativeText: '- condo security was too strict subjectively',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
    clientInfo: {
      clintName: 'Lee',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '4 ночи · ',
    stayDate: 'март 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 8 марта 2023',
    reviewScore: '8,0',
    positiveText:
      'The apartment was very nice and clean. The kitchen had everything we needed, The sofa and bed were comfortable for us.\nWiFi was good\n\nElena was very helpful.\nIt is a good location for most things, in a nice area. Food Mart supermarket nearby and plenty of food everywhere.',
    negativeText: 'Noisy neighbours. Earplugs helped.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
    clientInfo: {
      clintName: 'Stephen',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '8 ночей · ',
    stayDate: 'февраль 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 21 февраля 2023',
    reviewScore: '9,0',
    positiveText:
      'Good location, pool, gym and facilities. Quiet and comfortable bed. Microwave, washing machine all good.',
    negativeText: 'No particular dislikes. A short walk required to the beach.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
    clientInfo: {
      clintName: 'Steve',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '28 ночей · ',
    stayDate: 'январь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 12 января 2023',
    reviewScore: '10',
    positiveText:
      'Either made my own or went to the many locations that provided.',
    negativeText: 'Nothing',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
    clientInfo: {
      clintName: 'Joern',
      clientCountry: ' Швейцария',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ch.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'декабрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 27 декабря 2022',
    reviewScore: '8,0',
    positiveText: 'Great View, nice flat',
    negativeText: 'Russian accomodation',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
    clientInfo: {
      clintName: 'Valeriy',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'декабрь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 12 декабря 2022',
    reviewScore: '10',
    positiveText:
      'location,facilities,clean,quiet. Punctual and friendly owner',
    negativeText: 'nothing',
  },
  {
    avatar:
      'https://lh4.googleusercontent.com/-09m8g3qYoYg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rc9hK2H0rMs9dfiQ3xU7o-u4OqwGg/photo.jpg',
    clientInfo: {
      clintName: 'Phuong',
      clientCountry: ' Вьетнам',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Vn.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'декабрь 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 5 декабря 2022',
    reviewScore: '10',
    positiveText:
      'The room has spectacular view (both from living room and bedroom). The room is bigger than my expectation. The host is supportive and friendly.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Maliya',
      clientCountry: ' Чехия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Cz.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '14 ночей · ',
    stayDate: 'август 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 31 августа 2022',
    reviewScore: '10',
    positiveText: 'good',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Ahmed',
      clientCountry: ' Оман',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Om.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '2 ночи · ',
    stayDate: 'июль 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 28 июля 2022',
    reviewScore: '10',
    positiveText: 'everything',
    negativeText: 'nill',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
    clientInfo: {
      clintName: 'G',
      clientCountry: ' США',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Us.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '2 ночи · ',
    stayDate: 'июль 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 4 июля 2022',
    reviewScore: '8,0',
    positiveText:
      'great view, supportive host, many good restaurants within short walk.  27th floor wind is a bit tricky to manage, but breeze can sufficiently cool down the condo thus reducing the need for air conditioning.  condo very bright and uplifting.',
    negativeText:
      'water pressure a bit low for shower and only smart TVs - no cable.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-u.png',
    clientInfo: {
      clintName: 'Ulla-maija',
      clientCountry: ' Финляндия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fi.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '6 ночей · ',
    stayDate: 'июнь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 3 июля 2022',
    reviewScore: '9,0',
    positiveText:
      'View was great, host was really nice and busstation around the corner. Routetaxis are available when you step out of the building. Quiet apartment with all the basics and a nice bed. Large poolarea and gym.',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/AATXAJy2J_aS_67Wvxwzvf-OQS2Ph4U6UsaP4hZeXe7G=s96-c',
    clientInfo: {
      clintName: 'Moosa',
      clientCountry: ' Мальдивы',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Mv.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'июнь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 22 июня 2022',
    reviewScore: '10',
    positiveText:
      'The pool, spacious, clean, great view and special mention to Elena, who was very kind and helpful. She was very sweet with our daughter as well.',
    negativeText: 'We enjoyed everything about this place.',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/1198500476850059/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Pantita',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'июнь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 9 июня 2022',
    reviewScore: '10',
    positiveText:
      'Hi, I love everything here about this place. The place is easy to find. Nearby,has 7/11, restaurant,massage shop,nails spa. Even its very easy to install panda food, line man . The room has full equipments with kitchenware in case you need to cook ,but not necessary in Pattaya. The owner is friendly and helpful. The water park of the apartment is great. The bed is king size bed ,can fit 3 peoples . The view of balcony is great ,can relax during coffee in the morning.  The building is good taking care of. Many space for parking . The apartment is safe and quite .',
    negativeText: 'Nope',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Michele',
      clientCountry: ' Италия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/It.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'май 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 29 мая 2022',
    reviewScore: '9,0',
    positiveText: 'Great sea view, condo very centrally located.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Mikko',
      clientCountry: ' Финляндия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fi.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '9 ночей · ',
    stayDate: 'май 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 19 мая 2022',
    reviewScore: '8,0',
    positiveText:
      'Location near Jomptien beach. Bath Bus way so  easy to  go beach and  city.  Supermarket, ATM, Pharmacy, Laundry in  walking distance. Room  was  i bedroom + living room..Small but cosy... Balcony as  extra.  Outside  swimming pool  nice  but not  really  for  swmming...',
    negativeText: 'Nothing  to  complain really',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Michael',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'апрель 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 5 мая 2022',
    reviewScore: '10',
    negativeText: 'the weather was a little hot',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GiwnHfB7Xr_9vVO5sYPtCUi-acBW6PaKioM98y9ew=s96-c',
    clientInfo: {
      clintName: 'R',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'май 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 5 мая 2022',
    reviewScore: '10',
    positiveText:
      'My friends and I booked two condos. The views were spectacular! \nThe location is quite nice, it is away from the main touristy part and is very quiet and relaxing. \nThe condo is next to the road so access to public transport is super easy! \n\nThe condo amenities are superb! \nOur host has kept all appliances for us to use. You need to bring nothing with you except your clothes. \nFrom a fully stocked kitchen cabinet, to a fully equipped closet. \n\nThe bed was SUPER comfortable and so was the sofa bed! \n\nAnd last but not the least, our host was extremely warm and welcoming. She was very accommodating and prompt with responses. We genuinely had a very smooth time at the stay.',
    negativeText:
      'None! \nThe only thing I would have liked is to stay longer! :D',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
    clientInfo: {
      clintName: 'Geraldine',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'апрель 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 10 апреля 2022',
    reviewScore: '8,0',
    positiveText:
      'loved the view from the balcony. the swimming pool was amazing.',
    negativeText: 'nothing.',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/AATXAJw2Rd_v5U56vUJYca7e1VJW547GA4F8xRKO3e6p=s96-c',
    clientInfo: {
      clintName: 'Owens',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '2 ночи · ',
    stayDate: 'апрель 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 2 апреля 2022',
    reviewScore: '9,0',
    positiveText:
      'great location, lovely view, and fitted out with everything you would need',
    negativeText: 'safety box wasn’t working',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/1848207228640378/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Iliána',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'март 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 25 марта 2022',
    reviewScore: '10',
    positiveText: 'lovely location and view, lovely host!',
    negativeText: 'no wifi',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-d.png',
    clientInfo: {
      clintName: 'David',
      clientCountry: ' Швеция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Se.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '5 ночей · ',
    stayDate: 'март 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 13 марта 2022',
    reviewScore: '9,0',
    positiveText: 'Location for me, touching distance to everywhere.',
    negativeText: 'Nothing',
  },
  {
    avatar:
      'https://lh4.googleusercontent.com/-0hiIINhGA1k/AAAAAAAAAAI/AAAAAAAAAHo/I6Y3iv1t5ac/photo.jpg?sz=50',
    clientInfo: {
      clintName: 'Paul',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '6 ночей · ',
    stayDate: 'февраль 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 11 февраля 2022',
    reviewScore: '8,0',
    positiveText: "Didn't get sea view which is what is what I paid for.",
    negativeText: 'No sea view.',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/40608896.jpg?k=e28ad4de6e0c03ad5747559c6792e5ac43ff11dca9defb21c9487b0d1d6da7e8&o=',
    clientInfo: {
      clintName: 'Naved',
      clientCountry: ' Саудовская Аравия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Sa.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '5 ночей · ',
    stayDate: 'декабрь 2021',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 19 января 2022',
    reviewScore: '10',
    positiveText: 'Nice location',
    negativeText: 'Lift',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-c.png',
    clientInfo: {
      clintName: 'Christian',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'январь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 2 января 2022',
    reviewScore: '9,0',
    positiveText:
      'Great Condo. Well equipped. Balcony with great ocean view. Great pool. Very friendly and reliable contact person (Elena).',
    negativeText:
      'The location is good to catch a bath bus, but it is not so close to the beach to walk by foot.',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-OcZ9AaFPiyc/AAAAAAAAAAI/AAAAAAAAASE/sYQnrS3Eerc/photo.jpg',
    clientInfo: {
      clintName: 'Michael',
      clientCountry: ' Саудовская Аравия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Sa.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '5 ночей · ',
    stayDate: 'декабрь 2021',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 1 января 2022',
    reviewScore: '9,0',
    positiveText: 'the location',
    negativeText: 'no wifi',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GhN5jZK8-Y11JZrVoGvJQ8-a22xjGRydUfe0dEV=s96-c',
    clientInfo: {
      clintName: 'Мария',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '1 ночь · ',
    stayDate: 'декабрь 2021',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 11 декабря 2021',
    reviewScore: '10',
    positiveText:
      'Super clean apartment with the nice view. Stay only couple days, dont want to leave.',
  },
  {
    avatar:
      'https://lh6.googleusercontent.com/-Vps7lwzB4J4/AAAAAAAAAAI/AAAAAAABB3E/93UMuWH1idg/photo.jpg',
    clientInfo: {
      clintName: 'Alameiri',
      clientCountry: ' Кувейт',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Kw.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '15 ночей · ',
    stayDate: 'октябрь 2021',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 1 ноября 2021',
    reviewScore: '10',
    positiveText:
      'I think this place is the most beautiful place I enjoyed. The place is very classy and quiet for rest and relaxation.. it is the best for me',
    negativeText: 'Nothing honestly ........',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GjqpLNnKiZZY3G_PgG1uiwCJLgmcVN9qHzc9XM_RA=s96-c',
    clientInfo: {
      clintName: 'Tripathi',
      clientCountry: ' Индия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '5 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 26 октября 2023',
    reviewScore: '7,0',
    positiveText: 'Ambience',
    negativeText: 'The service',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-w.png',
    clientInfo: {
      clintName: 'Wayne',
      clientCountry: ' Гонконг',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Hk.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '7 ночей · ',
    stayDate: 'август 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 31 августа 2022',
    reviewScore: '6,0',
    positiveText:
      "The flat is clean and spacious, with a partial sea view. It has an efficient kitchenette and a balcony with a table and chairs as well as a washing machine. Wifi is fast and the AC's are in good working order. You can also use the gym. The host is very pleasant and accommodating and will quickly respond to any requests. The location is good: right along the main road in an upscale section of condos where you can catch taxis up and down Pattaya/Jomtien. It's quiet and there are a few good Western restaurants and a full supermarket within walking distance.",
    negativeText:
      "There were some hidden charges that weren't included in the rate advertised on Booking.com that were added when I booked the room, reminiscent of other sites that begin with the letter. I expect more consistent transparency from Booking.com. Security in this development can be a bit oppressive, but better than the alternative. My room had no toilet paper, nor soap or shampoo. Because the area is upscale, there aren't many local food options nearby.",
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Mike',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'март 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 22 апреля 2022',
    reviewScore: '7,0',
    negativeText:
      'Travelled with a partner and child. Only 1 key available so everyone had to leave and enter the same time. That needs to be remedied. Sofa bed was not a sofa bed so was not great for the child to sleep.',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/596477538/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Hugues',
      clientCountry: ' Бельгия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Be.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '9 ночей · ',
    stayDate: 'март 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 26 марта 2022',
    reviewScore: '7,0',
    positiveText: 'Situation, view',
    negativeText: 'Sofa really bad, only 1 glass, microwave smells really bad',
  },
  {
    clientInfo: {
      clintName: 'Аноним',
      clientCountry: ' ОАЭ',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ae.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'май 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 7 мая 2022',
    reviewScore: '10',
    positiveText: 'good',
  },
  {
    clientInfo: {
      clintName: 'ماجد',
      clientCountry: ' Саудовская Аравия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Sa.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '3 ночи · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 1 марта 2024',
    reviewScore: '9,0',
    positiveText:
      'مناسب جدا لعائلتي سواء في الموقع والمكان والسعر وقريب من المحلات والبحر والمقاهي واشكر الأخت ايلينا على استقبالها لنا وحيث ان الشقة نظيفة ويوجد جميع أدوات المطبخ لذلك تركناها نظيفة عند خروجنا ذي ما استلمناها عند دخولنا',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
    clientInfo: {
      clintName: 'Luca',
      clientCountry: ' Италия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/It.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '29 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 28 февраля 2024',
    reviewScore: '8,0',
    positiveText:
      'Appartamento tranquillo con bell vista mare, vicinoa tutto, comodo per tuk tuk. Elena molto accogliente ed affettuosa. Consigliato !',
    negativeText: 'Nulla',
  },
  {
    avatar:
      'https://lh5.googleusercontent.com/-ktbCQCHWQ8A/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rePZPriFIpp0i6JFL-YlvlY1rTaUg/s96-c/photo.jpg',
    clientInfo: {
      clintName: 'Durstkurort',
      clientCountry: ' Италия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/It.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '8 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 3 февраля 2024',
    reviewScore: '10',
    positiveText:
      'Sehr netter und pünktlicher Empfang von der Vermieterin.\nFrische Blumen und frisches Obst bei der Ankunft auf dem Esstisch. Vollwertig Eingerichtet mit Waschmaschine, TV, grossen Kühlschrank, Toaster u.s.w. Alles Sauber, leise und kein Gestank im Haus. Grosses Condo mit Schwimmbad und Fitness. Lage gut gelegen. Bei der Abreise alles zu unserer besten Zufriedenheit geklappt.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
    clientInfo: {
      clintName: 'Sylwester',
      clientCountry: ' Польша',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Pl.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '13 ночей · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 16 января 2024',
    reviewScore: '10',
    positiveText:
      'Bardzo dpbrze wyposazony apartament, swietna lokalizacja, piekny widok z okna, fajny basen równiez dla dzieci, siłownia. Polecam',
  },
  {
    avatar:
      'https://lh6.googleusercontent.com/-G5LD0ts9Jpk/AAAAAAAAAAI/AAAAAAAAANo/bULNsqZGKaI/photo.jpg',
    clientInfo: {
      clintName: 'Saovani',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '2 ночи · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 30 декабря 2023',
    reviewScore: '9,0',
    positiveText:
      'ห้องพักวิวสวย อยู่ห้องหัวมุม เลยเห็นวิวกว้างขึ้น สิ่งอำนวยความสะดวกครบครัน มีเตารีดกับเครื่องซักผ้าด้วย',
    negativeText:
      'ไม่ไกลจากหาดจอมเทียน แต่เดินไปก็เหนื่อยสำหรับครอบครัวมีเด็ก แต่มีแท็กซี่ผ่านตลอด ค่าแท็กซี่คนลัยี่สิบบาท',
  },
  {
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/BTn2icsPLDDeCL5xX6xaUPuIic2C302MyqrKxJKOz1kq0NcyPnSgDKz47I5pLEX1vl9zSJQb2zt6TKMqYyDhfU0g/132',
    clientInfo: {
      clintName: 'Zhe',
      clientCountry: ' Китай',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Cn.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '4 ночи · ',
    stayDate: 'ноябрь 2023',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 11 ноября 2023',
    reviewScore: '10',
    positiveText:
      '非常感谢美丽并且热情的埃琳娜女士接待了我们。打开窗户就能看到海景，楼下不远处就是711便利店。走十多分钟就有芭提雅夜市，可以买东西和吃饭。',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLQgcTkXv6R_cTwMHJsIvuz_2R1UDT8eIPpKwFRdHc=s96-c',
    clientInfo: {
      clintName: 'Hugo',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '13 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 19 октября 2023',
    reviewScore: '10',
    positiveText:
      'Ich war 2 Wochen alleine in dem Appartement (meine erste Thailand Reise, aber sicher nicht die letzte)!\nDie Übergabe mit Elena war super ... unvergessen bleibt mir wie wir in den 21. Stock gefahren sind, ich und zum ersten Mal dieses Top ausgestattete Appartement und den Ausblick auf den Pattaya Tower und das Meer sah. Einfach nur traumhaft !!!\nDas Appartement war topsauber, und wirklich voll ausgestattet, mit allem was man irgendwie auch nur brauchen könnte.\nAuch die Waschmaschine war top...konnte ich gut gebrauchen, bei diesem Klima.\nAuch das Caribian an sich traumhafter Pool .... \nWürde sofort wieder buchen.\nDanke Elena !!!',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-y.png',
    clientInfo: {
      clintName: 'Yannick',
      clientCountry: ' Швейцария',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ch.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '6 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 11 октября 2023',
    reviewScore: '10',
    positiveText:
      'Tout était parfait.\nMagnifique séjour.\nJe recommande vivement',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
    clientInfo: {
      clintName: 'Thomas',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '9 ночей · ',
    stayDate: 'сентябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 14 сентября 2023',
    reviewScore: '8,0',
    positiveText:
      'Als wir ankamen wurden wir bereits von der bezaubernden Elena empfangen, welche uns in das kleine Appartement begleitete. Es war ein toller Moment, 17. Stock mit Blick auf das Meer.\nEinrichtung war sehr schön, kleiner TV Bereich mit Schlafsofa und kleiner Küche. Ausgestattet mit allem was man benötigt. Schlafzimmer separat mit Bad.\nGenau das richtige für 10 Tage.\nSchöner Außenpool, gut eingerichtetes Fitnessstudio.\nDanke nochmals an Elena, welche jederzeit für uns da war.',
    negativeText:
      'Die nächstgelegenen Pubs waren etwas weiter weg, aber da wir die Ruhe suchten und nur an und ab aus waren, hat uns das nicht direkt betroffen. Hatten ja unser Auto dabei.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Aiman',
      clientCountry: ' Оман',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Om.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '29 ночей · ',
    stayDate: 'июль 2023',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 24 июля 2023',
    reviewScore: '10',
    positiveText:
      'المكان جميل و الشقه كانت نظيفه وكل أدوات أطبخ موجوده ، مناسب للعوائل و الاصدقاء وسكن لفتره طويلة ، كان المالك متعاون جدا \nالامن 24/7 \nجميع الخدمات متوفرة في المبناء و يوجد سفن الفين قريب جدا من المبنى \n\nأنصحكم فيه',
    negativeText: 'لا شي',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-p.png',
    clientInfo: {
      clintName: ' philip',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '7 ночей · ',
    stayDate: 'май 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 1 июня 2023',
    reviewScore: '8,0',
    positiveText: 'Appartement propre ,calme ,bien équipé.',
    negativeText: 'Le lit inconfortable .',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/1482480168576426/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Worapot',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'апрель 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 2 мая 2023',
    reviewScore: '10',
    positiveText:
      'ที่พักสวย สะอาด คุ้มค่าเงิน เดินทางสะดวก สระน้ำสวยงามและสนุกมาก เจ้าของห้องพักใจดีและอำนวยความสะดวกให้ดีมาก หากได้มาพัทยาจะกลับมาพักอีกแน่นอน',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/111589271371989300609/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'รัตนภรณ์',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '1 ночь · ',
    stayDate: 'апрель 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 2 мая 2023',
    reviewScore: '10',
    positiveText:
      'ห้องใหม่ สะอาดสะอ้าน กลิ่นหอมในห้องพัก ประทับใจตั้งแต่เปิดประตูเข้าไป เจ้าของห้องอัธยาศัยดี น่ารัก',
    negativeText:
      'มีปัญหาเล็กๆน้อยๆในส่วนของห้องน้ำ แต่เทียบกับห้องพักที่แสนสะดวกสบายนั้น มันเล็กน้อยมาก',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
    clientInfo: {
      clintName: 'Jens',
      clientCountry: ' Австрия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/At.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '12 ночей · ',
    stayDate: 'декабрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 3 декабря 2022',
    reviewScore: '10',
    positiveText: 'ALLES war perfekt',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Maria',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '5 ночей · ',
    stayDate: 'август 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 26 октября 2022',
    reviewScore: '10',
    positiveText: 'Sehr gute Wohnung und Anlage !!!',
    negativeText: 'Die Vermittlerin ist ganz nett und spricht sogar Russisch.',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
    clientInfo: {
      clintName: 'Laurent',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'сентябрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 23 сентября 2022',
    reviewScore: '9,0',
    positiveText:
      'Equipements tres propres et fonctionels. Remise des cles par Elene une ukrainienne super sympa. Et comme je parle russe...',
    negativeText:
      "La piscine n'est pas assez profonde. C'est juste un bassin en réalité. Danger si l'on plonge.",
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50',
    clientInfo: {
      clintName: 'Ivan',
      clientCountry: ' Китай',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Cn.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '11 ночей · ',
    stayDate: 'июль 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 27 августа 2022',
    reviewScore: '9,0',
    positiveText:
      'In principe was alles zeer goed. De locatie echter is uitstekend, net zoals de gastheer.',
    negativeText: 'Niets',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-h.png',
    clientInfo: {
      clintName: 'Hassan',
      clientCountry: ' Нидерланды',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Nl.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'июль 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 17 июля 2022',
    reviewScore: '10',
    positiveText: 'Uitzicht',
    negativeText: 'Alles is goed niks te klagen 💪',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Andreas',
      clientCountry: ' Норвегия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/No.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '7 ночей · ',
    stayDate: 'июнь 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 22 июня 2022',
    reviewScore: '9,0',
    positiveText:
      'Hyggelig og behjelpelig dame ,flott leilighet og flott basseng',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/181863817.jpg?k=855c19b39c6205cacbe28f6f054721a2b99a7c1449a5df37a820ced152662ef0&o=',
    clientInfo: {
      clintName: 'เหนื่อยนักก็พักก่อน',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'июнь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 9 июня 2022',
    reviewScore: '8,0',
    positiveText:
      'สระว่ายน้ำใหญ่ มีสไลเดอร์ให้เด็ก ๆ เล่น สนุกสนาน น้ำไม่ลึกมาก ห้องพักสะอาด เตียงนอนนุ่ม มีผ้าห่ม หมอนเสริมให้ด้วย ผ้าเช็ดตัวมีให้หลายผืน อุปกรณ์เครื่องครัวมีให้ครบครัน',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/4935571753220360/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'May',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '3 ночи · ',
    stayDate: 'май 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 19 мая 2022',
    reviewScore: '10',
    positiveText:
      'ห้องพักสะอาด​  หอม​  สดวก​ ปลอดภัย​ มียามดูแลสถานที่ดีมาก​ สระว่ายน้ำสะอาด​  อยู่สบายเหมือนอยู่บ้าน​   กลับมาพักอีกแน่นอน',
    negativeText: 'ก็ไม่นะ   ชอบหมด',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/AATXAJz72JzDVuK6cG2pxSmB5aS_MSPoxIylJwq42jS3=s96-c',
    clientInfo: {
      clintName: 'Wannawasorn',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'май 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 17 мая 2022',
    reviewScore: '8,0',
    positiveText:
      'ห้องพักเป็นห้องที่เเบ่งสัดส่วนห้องนอนและห้องนั่งเล่น วิวสวย ที่พักมีความปลอดภัยสูงผู้รักษาความปลอดภัยค่อนข้างเข้มงวด',
    negativeText: 'แนะนำให้มีไดร์เป่าผม',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-n.png',
    clientInfo: {
      clintName: 'Nattanan',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '3 ночи · ',
    stayDate: 'апрель 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 10 мая 2022',
    reviewScore: '10',
    positiveText: 'สวนน้ำ',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Aneska',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '5 ночей · ',
    stayDate: 'апрель 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 25 апреля 2022',
    reviewScore: '10',
    positiveText:
      'l’endroit est exceptionnel surtout avec des enfants la piscine est grande très propre l’eau n’est pas froide l’appartement est très bien situé car il est à Jomtien est très proche des taxis bath pour aller a pattaya centre , Il y a un supermarché juste à côté .\nElena est très accueillante et très gentille , je recommande vivement c’est un endroit superbe pour passer des vacances de rêves .',
  },
  {
    clientInfo: {
      clintName: 'Freddy',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'март 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 16 марта 2022',
    reviewScore: '10',
    positiveText:
      'Der Kontakt zur Vermietung war hervorragend. Sehr freundlicher und hilfsbereiter Empfang. Alles bestens 👍',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-f.png',
    clientInfo: {
      clintName: 'Friedrich',
      clientCountry: ' Австрия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/At.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '39 ночей · ',
    stayDate: 'январь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 15 января 2022',
    reviewScore: '8,0',
    positiveText: 'Die Verwalterin war sehr zuvorkommend und hilfsbereit.',
    negativeText: 'Die Zimmergröße war etwas klein',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
    clientInfo: {
      clintName: 'Geoffrey',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'декабрь 2021',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 21 декабря 2021',
    reviewScore: '10',
    positiveText: 'très propre, piscine magnifique , la salle de fitness',
    negativeText: 'rien',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-b.png',
    clientInfo: {
      clintName: 'Bjørn',
      clientCountry: ' Норвегия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/No.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '9 ночей · ',
    stayDate: 'ноябрь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 10 ноября 2022',
    reviewScore: '4,0',
    positiveText: 'beliggenhet - basseng',
    negativeText:
      'leilighet - seng - sofa - treningsrom mange defekte apparater. pris',
  },
  {
    clientInfo: {
      clintName: 'สุจินต์',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'июнь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 12 августа 2022',
    reviewScore: '5,0',
    positiveText: '-',
    negativeText: 'ราคาที่พักไม่ตรง กับที่ลงใน Booking แพงขึ้น',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/114075362352343717632/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Anders',
      clientCountry: ' Швеция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Se.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '6 ночей · ',
    stayDate: 'июль 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 1 июля 2022',
    reviewScore: '7,0',
    positiveText: 'läget - tvättmaskin',
    negativeText:
      '2 veckor är helt ok att bo där - om man har med sig egna sängkläder- sägen är extremt hård',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-p.png',
    clientInfo: {
      clintName: 'Phanthitra',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'июнь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 5 июня 2022',
    reviewScore: '1,0',
    negativeText:
      'ราคาไม่บอกให้ละเอียดหน้าเวปเท่านี้แต่ไปถึงหน้าที่พักราคาขึ้นอีกเท่าตัวเสียความรู้สึกมากอินเทอร์เนตบางห้องไม่มีพักสองวันโทรไปถามก็ไม่ดำเนินการให้',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
    clientInfo: {
      clintName: 'Rattanaphorn',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'апрель 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 3 мая 2022',
    reviewScore: '6,0',
    positiveText: 'ห้องพักสะอาด',
    negativeText: 'พนักงาน รปภ พูดจาไม่ดี และไม่มีมารยาทเลย',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/16582403.jpg?k=ba4721f803f92ab6fb129f15f26bca1a7ebb0fc45bffd837b9dbf343b4dd0202&o=',
    clientInfo: {
      clintName: 'Maksim_kronchev',
      clientCountry: ' Турция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Tr.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '14 ночей · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 4 декабря 2023',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
    clientInfo: {
      clintName: 'Kristina',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '11 ночей · ',
    stayDate: 'ноябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 24 ноября 2023',
    reviewScore: '10',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/54420276.jpg?k=d3e0746b7c3fd80a8e377738fa3735f39c2b9cee16572809026b2fb90f8dccdf&o=',
    clientInfo: {
      clintName: 'Mikhail',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '14 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 30 октября 2023',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Artur',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '28 ночей · ',
    stayDate: 'август 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 17 октября 2023',
    reviewScore: '8,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-n.png',
    clientInfo: {
      clintName: 'Nikolay',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '16 ночей · ',
    stayDate: 'сентябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 12 сентября 2023',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-n.png',
    clientInfo: {
      clintName: 'Natalia',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '13 ночей · ',
    stayDate: 'сентябрь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 11 сентября 2023',
    reviewScore: '9,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
    clientInfo: {
      clintName: 'Teta_angel',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '10 ночей · ',
    stayDate: 'август 2023',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 27 августа 2023',
    reviewScore: '9,0',
  },
  {
    clientInfo: {
      clintName: 'Сергей',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '13 ночей · ',
    stayDate: 'апрель 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 21 апреля 2023',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-o.png',
    clientInfo: {
      clintName: 'Olena',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '2 ночи · ',
    stayDate: 'декабрь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 10 декабря 2022',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-d.png',
    clientInfo: {
      clintName: 'Dmitrii',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'октябрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 4 ноября 2022',
    reviewScore: '10',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/108306032376184522678/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Сергей',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '4 ночи · ',
    stayDate: 'октябрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 29 октября 2022',
    reviewScore: '8,0',
  },
  {
    clientInfo: {
      clintName: 'Maxim_k72',
      clientCountry: ' Украина',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ua.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '3 ночи · ',
    stayDate: 'март 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 17 марта 2022',
    reviewScore: '10',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/52702139.jpg?k=5b07c556252deb1394bf0943374ad517910d02b3904e6c5c2651643883423a5d&o=',
    clientInfo: {
      clintName: 'Светлана',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '7 ночей · ',
    stayDate: 'август 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 26 августа 2023',
    reviewScore: '1,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/AEdFTp6CqLNZZxmRInu6jirg-l4O3KWPP3iC2FSv4RBMbg=s96-c',
    clientInfo: {
      clintName: 'Luli_ko',
      clientCountry: ' Россия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ru.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '8 ночей · ',
    stayDate: 'февраль 2024',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 26 февраля 2024',
    reviewScore: '10',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ALm5wu1iG8-ajwKKod1DPHfhYXFeyImyxetjwyGmwlzN=s96-c',
    clientInfo: {
      clintName: 'Dangelo',
      clientCountry: ' Аргентина',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ar.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '10 ночей · ',
    stayDate: 'июль 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 14 июля 2023',
    reviewScore: '10',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/1114089882055996/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Yanira',
      clientCountry: ' Гонконг',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Hk.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'ноябрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 17 ноября 2022',
    reviewScore: '9,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
    clientInfo: {
      clintName: 'Jonathan',
      clientCountry: ' Гонконг',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Hk.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'август 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 20 августа 2022',
    reviewScore: '8,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
    clientInfo: {
      clintName: 'Vitali',
      clientCountry: ' Бельгия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Be.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '1 ночь · ',
    stayDate: 'июль 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 10 августа 2022',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-h.png',
    clientInfo: {
      clintName: 'Henri',
      clientCountry: ' Финляндия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fi.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '2 ночи · ',
    stayDate: 'июнь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 5 июля 2022',
    reviewScore: '8,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-JruySrmQHxg/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXD4E332I_a4B45SfXj1XOeXx8ZhhA/s96-c/photo.jpg',
    clientInfo: {
      clintName: 'Krunalkrunalkumar',
      clientCountry: ' Индия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'май 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 10 мая 2022',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Michael',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'февраль 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 10 февраля 2022',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
    clientInfo: {
      clintName: 'Joseph',
      clientCountry: ' Швейцария',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ch.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '3 ночи · ',
    stayDate: 'январь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 12 января 2022',
    reviewScore: '9,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GiYLrspqjx-s4WztwmQ5L-KC0g8y3CZ-JlTiv-J=s96-c',
    clientInfo: {
      clintName: 'Verma',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '29 ночей · ',
    stayDate: 'декабрь 2021',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 18 декабря 2021',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-e.png',
    clientInfo: {
      clintName: 'Eric',
      clientCountry: ' Великобритания',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Gb.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '7 ночей · ',
    stayDate: 'июнь 2021',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 13 июня 2021',
    reviewScore: '9,0',
  },
  {
    avatar:
      'https://lh4.googleusercontent.com/-4qQOA1WCC7A/AAAAAAAAAAI/AAAAAAAAAm8/7lwsrKkxYUM/photo.jpg?sz=50',
    clientInfo: {
      clintName: 'Mary_tan',
      clientCountry: ' Швеция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Se.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '6 ночей · ',
    stayDate: 'апрель 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 20 мая 2023',
    reviewScore: '7,0',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/6286411958116877/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Michele',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'ноябрь 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 13 ноября 2022',
    reviewScore: '7,0',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/9110f66c-3d54-4980-808a-e9114c2ee441/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Alexis',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '2 ночи · ',
    stayDate: 'июль 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 28 июля 2022',
    reviewScore: '7,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
    clientInfo: {
      clintName: 'Saara',
      clientCountry: ' Финляндия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fi.png',
    },
    roomName: 'Улучшенные апартаменты',
    roomNights: '13 ночей · ',
    stayDate: 'ноябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 27 декабря 2023',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-c.png',
    clientInfo: {
      clintName: 'Charlotte',
      clientCountry: ' Бельгия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Be.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '13 ночей · ',
    stayDate: 'декабрь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 14 декабря 2023',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
    clientInfo: {
      clintName: 'Arend',
      clientCountry: ' Нидерланды',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Nl.png',
    },
    roomName: 'Апартаменты с видом на сад',
    roomNights: '19 ночей · ',
    stayDate: 'август 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 27 ноября 2023',
    reviewScore: '8,0',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/14027033.jpg?k=b8319b4bec8ec579527278f3747a9a9331aebf5377d8f47c3355c6b5218b5b12&o=',
    clientInfo: {
      clintName: 'Kjk_berlin',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '29 ночей · ',
    stayDate: 'октябрь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 27 октября 2023',
    reviewScore: '8,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/AATXAJyjk-l50wII-zJtATCtoDMloO5in7qiU1CwaaU7=s96-c',
    clientInfo: {
      clintName: 'Kazuya',
      clientCountry: ' Япония',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Jp.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '10 ночей · ',
    stayDate: 'июнь 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 21 июля 2023',
    reviewScore: '8,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
    clientInfo: {
      clintName: 'Ioan',
      clientCountry: ' Румыния',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Ro.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '6 ночей · ',
    stayDate: 'июнь 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 10 июня 2023',
    reviewScore: '10',
  },
  {
    avatar:
      'https://lh4.googleusercontent.com/-z5zl1DKvw-U/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckxXajbnClpFCtKPdYBmhb1iJ3iKw/s96-c/photo.jpg',
    clientInfo: {
      clintName: 'Abdullah',
      clientCountry: ' Оман',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Om.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '8 ночей · ',
    stayDate: 'май 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 4 июня 2023',
    reviewScore: '8,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/AGNmyxaSQrrSvMFN335Zz6a7MsjNlc5WyhF4KnlsrL9hMg=s96-c',
    clientInfo: {
      clintName: 'วรัญญา',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '6 ночей · ',
    stayDate: 'март 2023',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 28 марта 2023',
    reviewScore: '9,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50',
    clientInfo: {
      clintName: 'Kurt',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'январь 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 31 января 2023',
    reviewScore: '8,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
    clientInfo: {
      clintName: 'Mirella',
      clientCountry: ' Финляндия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fi.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '19 ночей · ',
    stayDate: 'сентябрь 2022',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 27 сентября 2022',
    reviewScore: '10',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/100583155.jpg?k=d53ff0e50e2da3675ef89208d54092ba7907a6a9b93b6b1b0ca547921d7f8300&o=',
    clientInfo: {
      clintName: 'Peter',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'сентябрь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 19 сентября 2022',
    reviewScore: '10',
  },
  {
    avatar:
      'https://xx.bstatic.com/xdata/images/xphoto/square64/100583155.jpg?k=d53ff0e50e2da3675ef89208d54092ba7907a6a9b93b6b1b0ca547921d7f8300&o=',
    clientInfo: {
      clintName: 'Peter',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '7 ночей · ',
    stayDate: 'сентябрь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 5 сентября 2022',
    reviewScore: '10',
  },
  {
    clientInfo: {
      clintName: '최',
      clientCountry: ' Южная Корея',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Kr.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '3 ночи · ',
    stayDate: 'июнь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 29 августа 2022',
    reviewScore: '8,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
    clientInfo: {
      clintName: 'Tanakrit',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '2 ночи · ',
    stayDate: 'июль 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 16 июля 2022',
    reviewScore: '9,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
    clientInfo: {
      clintName: 'Rattanaporn',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с 2 спальнями',
    roomNights: '3 ночи · ',
    stayDate: 'март 2022',
    travelerType: 'Группа',
    reviewDate: 'Дата отзыва: 18 апреля 2022',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-e.png',
    clientInfo: {
      clintName: 'Eyal',
      clientCountry: ' Израиль',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Il.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '4 ночи · ',
    stayDate: 'апрель 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 17 апреля 2022',
    reviewScore: '8,0',
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14Gg9nNI8DUjsESxpjuOyayYQ1z04xjFLaWaS8eBS=s96-c',
    clientInfo: {
      clintName: 'Sukanya',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '5 ночей · ',
    stayDate: 'декабрь 2021',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 8 февраля 2022',
    reviewScore: '10',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-c.png',
    clientInfo: {
      clintName: 'Cornelius',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '18 ночей · ',
    stayDate: 'январь 2022',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 18 января 2022',
    reviewScore: '10',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/10212562338917295/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Kattiya',
      clientCountry: ' Таиланд',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Th.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '5 ночей · ',
    stayDate: 'апрель 2021',
    travelerType: 'Семья',
    reviewDate: 'Дата отзыва: 23 апреля 2021',
    reviewScore: '9,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
    clientInfo: {
      clintName: 'Siegmund',
      clientCountry: ' Германия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/De.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '27 ночей · ',
    stayDate: 'май 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 11 мая 2023',
    reviewScore: '7,0',
  },
  {
    avatar:
      'https://graph.facebook.com/v2.9/10225740005678347/picture?type=square&height=64&width=64',
    clientInfo: {
      clintName: 'Patrice',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '14 ночей · ',
    stayDate: 'апрель 2023',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 1 мая 2023',
    reviewScore: '7,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-f.png',
    clientInfo: {
      clintName: 'Frederic',
      clientCountry: ' Франция',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Fr.png',
    },
    roomName: 'Апартаменты с видом на бассейн ',
    roomNights: '2 ночи · ',
    stayDate: 'февраль 2023',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 7 марта 2023',
    reviewScore: '4,0',
  },
  {
    avatar: 'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
    clientInfo: {
      clintName: 'Lieselotte',
      clientCountry: ' Австрия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/At.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '8 ночей · ',
    stayDate: 'ноябрь 2022',
    travelerType: 'Пара',
    reviewDate: 'Дата отзыва: 1 декабря 2022',
    reviewScore: '6,0',
  },
  {
    clientInfo: {
      clintName: 'Аноним',
      clientCountry: ' Норвегия',
      clientCountryFlag:
        'https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/No.png',
    },
    roomName: 'Апартаменты с видом на море',
    roomNights: '30 ночей · ',
    stayDate: 'сентябрь 2021',
    travelerType: 'Индивидуальный путешественник',
    reviewDate: 'Дата отзыва: 26 сентября 2021',
    reviewScore: '8,0',
  },
];

exports.mockReviews = mockReviews;
exports.parsedReviewsArray = parsedReviewsArray;
