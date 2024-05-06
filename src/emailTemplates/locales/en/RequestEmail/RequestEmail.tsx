import {
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { nulling, paragraph } from "../../../styles/global";

interface RequestEmailProps {
  data: RequestEmailData;
}

export const RequestEmail = ({ data: { customerName, hostContacts } }: RequestEmailProps) => {
  const previewText = `Your request has been successfully submitted.`;

  return (
    <DefaultEmail previewText={previewText} hostData={hostContacts}>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Hi {customerName},
          </Text>
          <div>
            <Text>
              Thank you for reaching out to our hotel!
            </Text>
            <Text>
              We have received your request and appreciate your interest. Our manager will contact you shortly to discuss the details of your request and offer the best options.
            </Text>
            <Text>
              We strive to provide our guests with a high level of service and comfort, and we look forward to the opportunity to make your stay with us enjoyable and memorable.
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