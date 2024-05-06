import {
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
import { nulling } from "../../../styles/global";
import { ruFormatDate } from "../../../helpers/formatDate";

interface ConfirmedPayEmailProps {
  data: ConfirmedPayEmailData;
}
export const ConfirmedPayEmail = ({ data }: ConfirmedPayEmailProps) => {
  const previewText = `Бронирование на ${ruFormatDate(data.checkIn)} успешно подтверждено.`;

  const headText = `${data.roomCategory} комната в ${data.location.city}, ${data.location.country} | от ${data.hostContacts.name}`;

  const checkIn = {
    title: ruFormatDate(data.checkIn, true),
    text: 'Check in after 2PM'
  };
  const checkOut = {
    title: ruFormatDate(data.checkOut, true),
    text: 'Check out 11AM',
  }

  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ paddingBottom: "20px", overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Ваше бронирование подтверждено.</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {headText}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={headText} />
          </div>
          <InfoRow leftColumn={checkIn} rightColumn={checkOut} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={data.infoBox.guests} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={data.infoBox.address} />
          <Hr style={{ ...hr, margin: 0, }} />
          {data.infoBox.transfer && (
            <>
              <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
                Поездка
              </Heading>
              <InfoRow leftColumn={data.infoBox.transfer.from} rightColumn={data.infoBox.transfer.to} style={{ padding: '0 0 20px' }} />
              <Hr style={{ ...hr, margin: 0, }} />
            </>
          )}
          <InfoRow leftColumn={data.infoBox.totalPrice} rightColumn={{}} />
          <Hr style={{ ...hr, margin: 0, }} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте!
          </Text>
          <div>
            <Text>
              Мы надеемся, что вы уже готовы к поселению <span style={textAccent}>{ruFormatDate(data.checkIn)}</span> и с нетерпением ждете вашего пребывания у нас.
              Вы можете поселиться с <span style={textAccent}>15:00</span> или вы можете прибыть в любое время после этого, если хотите.
            </Text>

            {data.apartmentPassword &&
              (
                <Text>Ваш код доступа к двери - <span style={textAccent}>(access code)</span>. Он будет активен с момента заезда.</Text>
              )
            }

            {data.wifiPassword &&
              (
                <Text>Пароль от Wi-Fi -<span style={textAccent}>(wi-fi password)</span>.</Text>
              )
            }

            <Text>Если у вас возникнут проблемы с попаданием в ваш номер, не стесняйтесь связаться с нами по номеру <Link href={`tel:${data.hostContacts.phone}`} style={{ ...textAccent, textDecoration: 'underline' }}>{data.hostContacts.phone}</Link> в любое время. Мы всегда рады помочь.</Text>

            <Text>Увидимся <span style={textAccent}>{ruFormatDate(data.checkIn)}</span>.</Text>
          </div>
        </Row>
      </Section>
      <Section>
        <Text style={nulling}>С уважением,</Text>
        <Text style={nulling}>Команда AstayHome</Text>
      </Section>
    </DefaultEmail>
  );
};


const textAccent: React.CSSProperties = {
  color: 'inherit',
  fontWeight: 500,
  textDecoration: 'underline'
}


const heading = {
  marginBottom: '0',
  fontSize: "32px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
};

const mainImg: Style = {
  ...nulling,
  objectFit: "contain",
  width: '100%',
  height: '100%',
  borderRadius: 20
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
