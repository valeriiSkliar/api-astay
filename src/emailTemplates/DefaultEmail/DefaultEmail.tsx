import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import { nulling } from "../styles/global";
import { HostContacts } from '../../models';

interface DefaultEmailProps {
  children: React.ReactNode;
  previewText: string;
  lang?: 'en' | 'ru';
  hostData: HostContacts;
}

export const DefaultEmail = ({ children, previewText, lang = 'en', hostData }: DefaultEmailProps) => {
  return (
    <Html lang={lang}>
      <Head />
      <Preview>
        {previewText}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src="https://astayhome.com/emailLogo.png"
              width="90"
              height="60"
              alt="AstayHome"
            />
          </Section>
          {children}
          <Section>
            <Hr style={hr} />
            <Row>
              <Column>
                <Text style={footer}>
                  AstayHome, Inc., Pattaya City, Thailand
                </Text>
              </Column>
              <Column style={{ textAlign: 'end', width: '50%' }}>
                <Link
                  href={`tel:${hostData.phone}`}
                  style={contact}
                >
                  {hostData.phone}
                </Link>
              </Column>
            </Row>
          </Section>
          <Section style={{ marginTop: 10 }}>
            <Row style={{ textAlign: 'end' }}>
              <Link
                href={`mailto:${hostData.email}`}
                style={contact}
              >
                {hostData.email}
              </Link>
            </Row>
            <Row style={{ textAlign: 'end', marginTop: 20 }}>
              <Button href={hostData.telegram} style={socials}>
                <Img
                  src="https://astayhome.com/socials/telegram.png"
                  width={30}
                  height={30}
                  alt="Telegram"
                />
              </Button>
              <Button href={hostData.whatsapp} style={socials}>
                <Img
                  src="https://astayhome.com/socials/whatsapp.png"
                  width={30}
                  height={30}
                  alt="Whatsapp"
                />
              </Button>
              <Button
                href={hostData.instagram}
                style={socials}
              >
                <Img
                  src="https://astayhome.com/socials/instagram.png"
                  width={30}
                  height={30}
                  alt="Telegram"
                />
              </Button>
              <Button href={hostData.youtube}>
                <Img
                  src="https://astayhome.com/socials/youtube.png"
                  width={30}
                  height={30}
                  alt="Telegram"
                />
              </Button>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

DefaultEmail.PreviewProps = {
  children: <Heading as="h1">Hi</Heading>,
  previewText: "This is preview text of email",
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

const footer: Style = {
  color: "#9ca299",
  fontSize: "14px",
  margin: 0,
};

const socials: Style = {
  ...nulling,
  marginRight: 15,
};

const contact: Style = {
  display: 'block',
  // marginTop: 20,
  color: "inherit",
  textDecoration: "underline",
  fontWeight: 500,
  fontSize: 18
};
