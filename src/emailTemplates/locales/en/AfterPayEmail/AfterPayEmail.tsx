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
import InfoRow from "../../../ui/InfoRow";
import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { nulling } from "../../../styles/global";
import { formatDate } from "../../../helpers/farmateDate";

interface AfterPayEmailProps {
  data: AfterPayEmailData;
}

export const AfterPayEmail = ({ data }: AfterPayEmailProps) => {
  const previewText = `Reservation on ${formatDate(data.checkIn)} Success`;

  const headText = `${data.roomCategory} room in ${data.location.city}, ${data.location.country} | by ${data.hostContacts.name}`;

  const checkIn = {
    title: formatDate(data.checkIn, 'en', true),
    text: 'Check in after 2PM'
  };
  const checkOut = {
    title: formatDate(data.checkOut, 'en', true),
    text: 'Check out 11AM',
  }

  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ paddingBottom: "20px", overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Your reservation is confirmed</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {headText}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={headText} />
          </div>
          <InfoRow leftColumn={checkIn} rightColumn={checkOut} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={data.infoBox.guests} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={data.infoBox.address} />
          <Hr style={{ ...hr, margin: 0, }} />
          {data.infoBox.transfer && (
            <>
              <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
                Transfers
              </Heading>
              <InfoRow leftColumn={data.infoBox.transfer.from} rightColumn={data.infoBox.transfer.to} style={{ padding: '0 0 20px' }} />
              <Hr style={{ ...hr, margin: 0, }} />
            </>
          )}
          <InfoRow leftColumn={data.infoBox.totalPrice} rightColumn={{}} />
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
              We hope you are all set to check in on <span style={textAccent}>{formatDate(data.checkIn)}</span> and are looking forward to your stay with us.
              You can check in at <span style={textAccent}>3PM</span>, so you are welcome to arrive any time after if you like.
            </Text>

            {data.apartmentPassword &&
              (
                <Text>Your door access code is <span style={textAccent}>(access code)</span>. It will be active from the time of check-in.</Text>
              )
            }

            {data.wifiPassword &&
              (
                <Text>The wi-fi password is <span style={textAccent}>(wi-fi password)</span>.</Text>
              )
            }

            <Text>If you experience any issues getting into your room or after your check-in, feel free to contact us at <Link href={`tel:${data.hostContacts.phone}`} style={{ ...textAccent, textDecoration: 'underline' }}>{data.hostContacts.phone}</Link> at any time. We are always happy to help.</Text>

            <Text>See you on <span style={textAccent}>{formatDate(data.checkIn)}</span>.</Text>
          </div>
        </Row>
      </Section>
    </DefaultEmail>
  );
};


const textAccent: React.CSSProperties = {
  color: 'inherit',
  fontWeight: 500,
  textDecoration: 'underline'
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
