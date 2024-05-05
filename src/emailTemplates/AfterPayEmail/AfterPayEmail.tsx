import {
  Heading,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import InfoRow from "../ui/InfoRow";
import DefaultEmail from "../DefaultEmail/DefaultEmail";
import { nulling } from "../styles/global";

interface AfterPayEmailProps {
  authorName?: string;
  authorImage?: string;
  reviewText?: string;
}


const baseUrl = "http://localhost:5173/";


const checkIn = {
  title: 'Tuesday, May 15, 2024',
  text: 'Check in Anytime after 3PM',
}
const checkOut = {
  title: 'Friday, May 24, 2024',
  text: 'Check out 11AM',
}

const guests = {
  title: 'Guests',
  text: '1 guest'
}

const address = {
  title: 'Address',
  text: '492/2 หมู่ที่ 12 Thappraya Rd, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand'
}
const amount = {
  title: 'Amount',
  text: '฿18,000'
}

const transfer = {
  from: {
    title: 'From',
    text: '฿1400'
  },
  to: {
    title: 'To',
    text: '฿1400'
  }
}


export const AfterPayEmail = ({
  authorName,
}: AfterPayEmailProps) => {
  const previewText = `Read ${authorName}'s review`;

  return (
    <DefaultEmail previewText={previewText}>
      <Section style={{ paddingBottom: "20px", overflow: 'hidden' }}>
        <Heading as="h1" style={heading}>Your reservation is confirmed</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              Penthouse room in Pattaya, Thailand | by Astay-Home
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src="https://astayhome.com/_next/image?url=https%3A%2F%2Fastayhome.com%2Fapi%2Fpublic%2Fuploads%2Fs1920%2FR5_1767_small.jpg_s1920.webp&w=1920&q=100" style={mainImg} width={1920} height={1080} alt='Apartment' />
          </div>
          <InfoRow leftColumn={checkIn} rightColumn={checkOut} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={guests} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={address} rightColumn={{}} />
          <Hr style={{ ...hr, margin: 0, }} />
          <Heading as="h2" style={{ ...nulling, marginTop: 16, textAlign: 'center' }}>
            Transfers
          </Heading>
          <InfoRow leftColumn={transfer.from} rightColumn={transfer.to} style={{ padding: '0 0 20px' }} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={amount} rightColumn={{}} />
          <Hr style={{ ...hr, margin: 0, }} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Hi!
          </Text>
          <div>
            <Text>
              We hope you are all set to check in on <span style={textAccent}>May 15, 2024</span> and are looking forward to your stay with us.
              You can check in at <span style={textAccent}>3PM</span>, so you are welcome to arrive any time after if you like.
            </Text>

            <Text>Your door access code is <span style={textAccent}>(access code)</span>. It will be active from the time of check-in.</Text>

            <Text>The wi-fi password is <span style={textAccent}>(wi-fi password)</span>.</Text>

            <Text>If you experience any issues getting into your room or after your check-in, feel free to contact us at <Link href="tel:77321789156" style={{ ...textAccent, textDecoration: 'underline' }}>+77321789156</Link> at any time. We are always happy to help.</Text>

            <Text>See you on <span style={textAccent}>May 15, 2024</span>.</Text>
          </div>
        </Row>
      </Section>
    </DefaultEmail>
  );
};

AfterPayEmail.PreviewProps = {
  authorName: "Alex",
  authorImage: `${baseUrl}/static/airbnb-review-user.jpg`,
  reviewText: `“Alan was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!”`,
} as AfterPayEmailProps;

export default AfterPayEmail;


const textAccent: React.CSSProperties = {
  color: 'inherit',
  fontWeight: 500
}


const heading = {
  marginBottom: '0',
  fontSize: "32px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
};

const mainImg: Style = {
  ...nulling,
  objectFit: "contain",
  width: '100%',
  height: '100%',
  borderRadius: 20
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
