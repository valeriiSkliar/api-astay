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

interface DefaultEmailProps {
  children: React.ReactNode;
  previewText: string;
  lang?: 'en' | 'ru';
  hostData: HostContacts;
  companyName?: string;
  emailTitle?: string;
}




export const DefaultEmail = ({ children, previewText, lang = 'en', hostData, emailTitle = 'AstayHome', companyName = 'AstayHome' }: DefaultEmailProps) => {

  const t = {
    ru: {
      first: 'С уважением,',
      second: `Команда ${companyName}`
    },
    en: {
      first: 'Best regards,',
      second: `${companyName} Team`
    }
  }

  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title>{emailTitle}</title>
      </Head>
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
              alt={companyName}
            />
          </Section>
          {children}
          <Section>
            <Text style={nulling}>{t[lang].first}</Text>
            <Text style={nulling}>{t[lang].second}</Text>
          </Section>
          <Section>
            <Hr style={hr} />
            <Row>
              <Column>
                <Text style={footer}>
                  {companyName}, Inc., Pattaya City, Thailand
                </Text>
              </Column>
              <Column style={{ textAlign: 'end', width: '50%' }}>
                <Link
                  target="_blank"
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
                target="_blank"
                href={`mailto:${hostData.email}`}
                style={contact}
              >
                {hostData.email}
              </Link>
            </Row>
            <Row style={{ textAlign: 'end', marginTop: 20 }}>
              <Button target="_blank" href={hostData.telegram} style={socials}>
                <Img
                  src="https://astayhome.com/socials/telegram.png"
                  width={30}
                  height={30}
                  alt="Telegram"
                />
              </Button>
              <Button target="_blank" href={hostData.whatsapp} style={socials}>
                <Img
                  src="https://astayhome.com/socials/whatsapp.png"
                  width={30}
                  height={30}
                  alt="Whatsapp"
                />
              </Button>
              <Button
                target="_blank"
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
              <Button target="_blank" href={hostData.youtube}>
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
