interface ConfirmedPayEmailData {
  checkIn: string;
  checkOut: string;
  roomCategory: string;
  img: string;
  location: LocationApartment;
  wifiPassword?: string;
  apartmentPassword?: string;
  hostContacts: HostContacts;
  infoBox: InfoBox;
}

interface LocationApartment {
  city: string;
  country: string;
}


// interface HostContacts {
//   name: string;
//   email: string;
//   phone: string;
//   telegram: string;
//   whatsapp: string;
//   instagram: string;
//   youtube: string;
// }

interface InfoBox {
  guests: Guests;
  address: Address;
  totalPrice: TotalPrice;
  transfer?: Transfer;
}

interface Guests {
  title: string;
  text: string;
}

interface Address {
  title: string;
  text: string;
}

interface TotalPrice {
  title: string;
  text: string;
}

interface Transfer {
  from: From ;
  to: To;
}

interface From {
  title: string;
  text: string;
}

interface To {
  title: string;
  text: string;
}
