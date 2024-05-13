interface ConfirmedPayEmailData {
  companyName?: string;
  emailTitle?: string;
  checkIn: string;
  checkOut: string;
  customerName: string;
  apartmentId: number;
  apartmentName: string;
  img: string;
  wifiPassword?: string;
  apartmentPassword?: string;
  hostContacts: HostContacts;
  guests: string | number;
  rooms: string | number;
  address: string;
  totalPrice: string;
  transfer?: Transfer;
}

interface Transfer {
  from?: From;
  to?: To;
}

interface From {
  price?: string;
  date?: string;
}

interface To {
  price?: string;
  date?: string;
}
