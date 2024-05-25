import {
  Button,
  Heading,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { heading, mainImg, paragraph, textAccent } from "../../../styles/global";

interface LeaveReviewEmailProps {
  data: LeaveReviewEmailData;
}

export const LeaveReviewEmail = ({ data }: LeaveReviewEmailProps) => {
  const previewText = `How did you do on your rest?`;

  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>How was your stay?</Heading>
        <Row>
          <Text style={{ marginTop: '5px', fontSize: '20px' }}>
            {data.apartmentName}
          </Text>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={data.apartmentName} />
          </div>
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Dear, {data.customerName},
          </Text>
          <Text>
            How was your stay?
          </Text>
          <Text>You have <span style={textAccent}>14 days</span> to complete and submit your review.</Text>
          <Text>
            We look forward to seeing you again.
          </Text>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Button href={data.reviewLink} style={button}>
            Leave Review
          </Button>
        </Row>
      </Section>

    </DefaultEmail>
  );
};


const button: Style = {
  margin: '0 auto',
  padding: '15px 50px',
  background: '#3e3790',
  color: '#fff',
  fontWeight: 900,
  textTransform: 'uppercase',
  borderRadius: 15
}