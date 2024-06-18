import {
  Button,
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
import {
  button,
  heading,
  hr,
  mainImg,
  paragraph,
  textAccent,
} from "../../../styles/global";
import { formatDate } from "../../../helpers/formatDate";
import InfoTransfers from "../../../ui/InfoTransfers";
import { textEn } from "../../../helpers/translate/translate";

interface ConfirmedPayEmailProps {
  data: ConfirmedPayEmailData;
}

export const ConfirmedPayEmail = ({ data }: ConfirmedPayEmailProps) => {
  const previewText = `Reservation on ${formatDate(
    data.checkIn,
  )} has been successfully confirmed.`;

  const text = textEn(data);

  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ paddingBottom: "20px", overflow: "hidden" }}>
        <Heading as="h2" style={heading}>
          Your reservation has been confirmed
        </Heading>
        <Row>
          <Text style={{ marginTop: "5px", fontSize: "20px" }}>
            {data.apartmentName}
          </Text>
          <div style={{ overflow: "hidden" }}>
            <Img
              src={data.img}
              style={mainImg}
              width={1920}
              height={1080}
              alt={data.apartmentName}
            />
          </div>
        </Row>
        <Row style={{ textAlign: "center", margin: "20px 0" }}>
          <Button
            target="_blank"
            href={`https://astayhome.com/ru/apartment/${data.apartmentId}`}
            style={{ ...button, padding: "15px 0", width: "100%" }}
          >
            See apartment
          </Button>
        </Row>
        <Row>
          <InfoRow leftColumn={text.checkIn} rightColumn={text.checkOut} />
          <Hr style={{ ...hr, margin: 0 }} />
          <InfoRow
            leftColumn={text.guests}
            rightColumn={text.rooms}
          />
          <Hr style={{ ...hr, margin: 0 }} />
          <InfoRow leftColumn={text.address} />
          <Hr style={{ ...hr, margin: 0 }} />
          <InfoTransfers transfer={data.transfer} />
          <InfoRow leftColumn={text.totalPrice} rightColumn={{}} />
          <Hr style={{ ...hr, margin: 0 }} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Dear, {data.customerName},
          </Text>
          <div>
            <Text>
              We hope you are eagerly anticipating your arrival on{" "}
              <span style={textAccent}>{formatDate(data.checkIn)}</span>. You
              can check in from <span style={textAccent}>14:00</span> onwards or
              arrive at any convenient time thereafter.
            </Text>

            {data.apartmentPassword && (
              <Text>
                Your door access code is{" "}
                <span style={textAccent}>({data.apartmentPassword})</span>. It will be active
                from the time of check-in.
              </Text>
            )}

            {data.wifiPassword && (
              <Text>
                The wi-fi password is{" "}
                <span style={textAccent}>({data.wifiPassword})</span>.
              </Text>
            )}

            <Text>
              Our manager will be waiting for you in the lobby, so please
              contact him 2 hours before your arrival at{" "}
              <Link
                target="_blank"
                href={`tel:${data.hostContacts.phone}`}
                style={{ ...textAccent, textDecoration: "underline" }}
              >
                {data.hostContacts.phone}
              </Link>
              . You can also use this number to arrange airport transfers. We
              are always ready to assist you.
            </Text>

            <Text>
              We understand that you may need to exchange your currency for Thai
              Baht, so full payment for your stay can be made during the day
              after check-in.
            </Text>

            <Text>
              We look forward to meeting you on{" "}
              <span style={textAccent}>{formatDate(data.checkIn)}</span>.
            </Text>
          </div>
        </Row>
      </Section>
    </DefaultEmail>
  );
};
