import {
  Heading,
  Hr,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import InfoRow from "../../../ui/InfoRow";
import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { heading, hr, mainImg, nulling, paragraph } from "../../../styles/global";
import { formatDate } from "../../../helpers/formatDate";
import InfoTransfers from "../../../ui/InfoTransfers";

interface ConfirmedBookingEmailProps {
  data: ConfirmedBookingEmailData;
}

export const ConfirmedBookingEmail = ({ data }: ConfirmedBookingEmailProps) => {
  const previewText = `Your reservation on ${formatDate(data.checkIn)} has been successfully submitted.`;
  const { customerName, guests, location, roomCategory, rooms } = data;

  const aptName = `${roomCategory} room in ${location.city}, ${location.country}`;

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
        <Heading as="h2" style={heading}>Your reservation has been submitted.</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {aptName}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={aptName} />
          </div>
          <InfoRow leftColumn={checkIn} rightColumn={checkOut} />
          <Hr style={hr} />
          <InfoRow leftColumn={guests} rightColumn={rooms} />
          <Hr style={hr} />
          <InfoTransfers transfer={data.transfer} />
          <Hr style={hr} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Hi {customerName},
          </Text>
          <div>
            <Text>
              Your reservation request for {aptName} has been submitted. We want to be clear that this not a confirmed reservation. Not yet, at least.
            </Text>
            <Text>
              Our manager will respond to your request within 24 hours, but most of the time, it will be even quicker!
            </Text>
          </div>
        </Row>
      </Section>
      <Section>
        <Text style={nulling}>Best regards,</Text>
        <Text style={nulling}>The AstayHome Team</Text>
      </Section>
    </DefaultEmail>
  );
};