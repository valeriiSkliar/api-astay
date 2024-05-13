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
  from?: {price: number};
  to?: To;
}

interface From extends Transfer {
  price?:  number;
}

interface To extends Partial<Transfer> {
  price?:  number;
}
