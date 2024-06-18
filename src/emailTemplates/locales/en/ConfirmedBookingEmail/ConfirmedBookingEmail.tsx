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
import { heading, hr, mainImg, paragraph } from "../../../styles/global";
import { formatDate } from "../../../helpers/formatDate";
import InfoTransfers from "../../../ui/InfoTransfers";
import { textEn } from "../../../helpers/translate/translate";

interface ConfirmedBookingEmailProps {
  data: ConfirmedBookingEmailData;
}

export const ConfirmedBookingEmail = ({ data }: ConfirmedBookingEmailProps) => {
  const previewText = `Your reservation on ${formatDate(data.checkIn)} has been successfully submitted.`;
  const { customerName, apartmentName, } = data;

  const text = textEn(data);

  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ paddingBottom: "20px", overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Your reservation has been submitted</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {apartmentName}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={apartmentName} />
          </div>
          <InfoRow leftColumn={text.checkIn} rightColumn={text.checkOut} />
          <Hr style={hr} />
          <InfoRow leftColumn={text.guests} rightColumn={text.rooms} />
          <Hr style={hr} />
          <InfoTransfers transfer={data.transfer} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Hi {customerName},
          </Text>
          <div>
            <Text>
              We have received your request for booking apartments in Pattaya, Thailand. We would like to emphasize that this is not yet a confirmed reservation. At least, not at this moment.
            </Text>
            <Text>
              Our manager will respond to your request within 8 hours, but usually, it happens even faster!
            </Text>
          </div>
        </Row>
      </Section>

    </DefaultEmail>
  );
};