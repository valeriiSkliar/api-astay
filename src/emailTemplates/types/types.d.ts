interface Style extends React.CSSProperties {}

interface ConfirmedBookingEmailData {
  companyName?: string;
  emailTitle?: string;
  customerName: string;
  img: string;
  apartmentName: string;
  guests: string | number;
  rooms: string | number;
  checkIn: string;
  checkOut: string;
  transfer?: Transfer;
  hostContacts: HostContacts;
}

interface ConfirmedTransferEmailData {
  companyName?: string;
  emailTitle?: string;
  customerName: string;
  hostContacts: HostContacts;
  transfer?: Transfer;
  totalPrice: string;
}

interface LeaveReviewEmailData {
  companyName?: string;
  emailTitle?: string;
  customerName: string;
  reviewLink: string;
  apartmentName: string;
  img: string;
  hostContacts: HostContacts;
}

interface RequestEmailData {
  companyName?: string;
  emailTitle?: string;
  customerName: string;
  hostContacts: HostContacts;
}

interface NotificationEmailData {
  companyName?: string;
  emailTitle?: string;
  message: string;
  hostContacts: HostContacts;
}
