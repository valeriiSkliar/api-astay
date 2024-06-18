import chooseTextVariant from '../chooseTextVariant';
import {formatDate, ruFormatDate} from '../formatDate';

type TranslateEmailText = {
  checkIn?: string;
  checkOut?: string;
  guests?: string | number;
  rooms?: string | number;
  address?: string;
  totalPrice?: string;
};

export function textRu(data: TranslateEmailText) {
  const formatGuests = chooseTextVariant({
    number: data.guests,
    one: 'гость',
    between2and4: 'гостя',
    moreThen5: 'гостей',
  });

  const formatRooms = chooseTextVariant({
    number: data.rooms,
    one: 'апартамент',
    between2and4: 'апартамента',
    moreThen5: 'апартаментов',
  });

  return {
    checkIn: {
      title: ruFormatDate(data.checkIn, true),
      text: 'Заселение с 14:00',
    },
    checkOut: {
      title: ruFormatDate(data.checkOut, true),
      text: 'Выезд до 11:00',
    },
    guests: {
      title: 'Гостей',
      text: formatGuests,
    },
    rooms: {
      title: 'Апартаментов',
      text: formatRooms,
    },
    address: {
      title: 'Адрес',
      text: data?.address ?? '',
    },
    totalPrice: {
      title: 'Всего',
      text: data?.totalPrice ?? '',
    },
  };
}
export function textEn(data: TranslateEmailText) {
  const formatGuests = chooseTextVariant({
    number: data.guests,
    one: 'guest',
    between2and4: 'guests',
    moreThen5: 'guests',
  });

  const formatRooms = chooseTextVariant({
    number: data.rooms,
    one: 'apartment',
    between2and4: 'apartments',
    moreThen5: 'apartments',
  });

  return {
    checkIn: {
      title: formatDate(data.checkIn, 'en', true),
      text: 'Check in after 14:00',
    },
    checkOut: {
      title: formatDate(data.checkOut, 'en', true),
      text: 'Check out 11:00',
    },
    guests: {
      title: 'Guests',
      text: formatGuests,
    },
    rooms: {
      title: 'Apartments',
      text: formatRooms,
    },
    address: {
      title: 'Address',
      text: data?.address ?? '',
    },
    totalPrice: {
      title: 'Total',
      text: data?.totalPrice ?? '',
    },
  };
}
