import chooseTextVariant from "../chooseTextVariant";
import { formatDate, ruFormatDate } from "../formatDate";

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
    one: "гость",
    between2and4: "гостя",
    moreThen5: "гостей",
  });

  const formatRooms = chooseTextVariant({
    number: data.rooms,
    one: "комната",
    between2and4: "комнаты",
    moreThen5: "комнат",
  });

  return {
    checkIn: {
      title: ruFormatDate(data.checkIn, true),
      text: "Заселение с 14:00",
    },
    checkOut: {
      title: ruFormatDate(data.checkOut, true),
      text: "Выезд до 11:00",
    },
    guests: {
      title: "Гостей",
      text: formatGuests,
    },
    rooms: {
      title: "Комнат",
      text: formatRooms,
    },
    address: {
      title: "Адрес",
      text: data?.address || "",
    },
    totalPrice: {
      title: "Всего",
      text: data?.totalPrice || "",
    },
  };
}
export function textEn(data: TranslateEmailText) {
  const formatGuests = chooseTextVariant({
    number: data.guests,
    one: "guest",
    between2and4: "guests",
    moreThen5: "guests",
  });

  const formatRooms = chooseTextVariant({
    number: data.rooms,
    one: "room",
    between2and4: "rooms",
    moreThen5: "rooms",
  });

  return {
    checkIn: {
      title: formatDate(data.checkIn, "en", true),
      text: "Check in after 14:00",
    },
    checkOut: {
      title: formatDate(data.checkOut, "en", true),
      text: "Check out 11:00",
    },
    guests: {
      title: "Guests",
      text: formatGuests,
    },
    rooms: {
      title: "Rooms",
      text: formatRooms,
    },
    address: {
      title: "Address",
      text: data?.address || "",
    },
    totalPrice: {
      title: "Total",
      text: data?.totalPrice || "",
    },
  };
}
