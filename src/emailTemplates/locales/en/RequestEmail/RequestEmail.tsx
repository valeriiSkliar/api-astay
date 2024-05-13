import {
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { paragraph } from "../../../styles/global";

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
            Hello, {customerName},
          </Text>
          <Text>
            Thank you for reaching out to us!
          </Text>
          <Text>
            We have received your inquiry and appreciate your interest. Our manager will contact you shortly to discuss all the details and offer the best options.
          </Text>
        </Row>
      </Section>

    </DefaultEmail>
  );
};