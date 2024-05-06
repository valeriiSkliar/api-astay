interface Style extends React.CSSProperties {}

interface ConfirmedBookingEmailData {
  customerName: string;
  img: string;
  roomCategory: string;
  location: LocationApartment;
  guests: Guests;
  rooms: {
    title: string;
    text: string;
  };
  checkIn: string;
  checkOut: string;
  transfer?: Transfer;
  hostContacts: HostContacts;
}

interface ConfirmedTransferEmailData {
  customerName: string;
  hostContacts: HostContacts;
  transfer: {
    from?: From;
    to?: To;
  };
  totalPrice: { title: string; text: string };
}

interface LeaveReviewEmailData {
  customerName: string;
  reviewLink: string;
  img: string;
  roomCategory: string;
  location: LocationApartment;
  hostContacts: HostContacts;
}

interface RequestEmailData {
  customerName: string;
  hostContacts: HostContacts;
}
