import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

interface DefaultEmailProps {
  children: React.ReactNode;
  previewText: string;
}

export const DefaultEmail = ({
  children,
  previewText,
}: DefaultEmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src='https://astayhome.com/logo.png'
              width="120"
              height="50"
              alt="AstayHome"
            />
          </Section>
          {children}
          <Section>
            <Hr style={hr} />
            <Row>
              <Text style={footer}>
                AstayHome, Inc., Pattaya City, Thailand
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

DefaultEmail.PreviewProps = {
  children: <Heading as="h1">Hi</Heading>,
  previewText: 'This is preview text of email'
} as DefaultEmailProps;

export default DefaultEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: "#484848",
};


const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};