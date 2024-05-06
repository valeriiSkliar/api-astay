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
import { heading, mainImg, nulling, paragraph, textAccent } from "../../../styles/global";

interface LeaveReviewEmailProps {
  data: LeaveReviewEmailData;
}

export const LeaveReviewEmail = ({ data }: LeaveReviewEmailProps) => {
  const previewText = `How was your stay at apartment?`;
  const headText = `${data.roomCategory} room in ${data.location.city}, ${data.location.country} | by ${data.hostContacts.name}`;
  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>How was your stay at apartment?</Heading>
        <Row>
          <Text style={{ marginTop: '5px', fontSize: '20px' }}>
            {headText}
          </Text>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={headText} />
          </div>
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Hi {data.customerName},
          </Text>
          <Text>
            We hope you've managed to make precious memories during your stay with us. We certainly had a blast hosting you at {headText}.
          </Text>
          <Text>
            Would you mind sharing your experience with us by leaving a review? You can find out how to here.
          </Text>
          <Text>You have <span style={textAccent}>14 days</span> to complete and submit your review.</Text>
          <Text>
            We will be glad to see you again.
          </Text>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Button href={data.reviewLink} style={button}>
            Leave Review
          </Button>
        </Row>
      </Section>
      <Section>
        <Text style={nulling}>Best regards,</Text>
        <Text style={nulling}>The AstayHome Team</Text>
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