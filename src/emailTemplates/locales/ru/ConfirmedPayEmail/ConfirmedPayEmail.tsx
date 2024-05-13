import {
  Button,
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
import { button, nulling } from "../../../styles/global";
import { ruFormatDate } from "../../../helpers/formatDate";
import InfoTransfers from "../../../ui/InfoTransfers";
import { textRu } from "../../../helpers/translate/translate";

interface ConfirmedPayEmailProps {
  data: ConfirmedPayEmailData;
}
export const ConfirmedPayEmail = ({ data }: ConfirmedPayEmailProps) => {
  const previewText = `Бронирование на ${ruFormatDate(data.checkIn)} успешно подтверждено.`;

  const headText = `${data.apartmentName} | от ${data.hostContacts.name}`;

  const text = textRu(data);

  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ paddingBottom: "20px", overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Ваше бронирование подтверждено</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {headText}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={headText} />
          </div>
        </Row>
        <Row style={{ textAlign: 'center', margin: '20px 0' }}>
          <Button target="_blank" href={`https://astayhome.com/ru/apartment/${data.apartmentId}`} style={{ ...button, padding: '15px 0', width: '100%' }}>Посмотреть апартамент</Button>
        </Row>
        <Row>
          <InfoRow leftColumn={text.checkIn} rightColumn={text.checkOut} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={text.guests} rightColumn={text.rooms} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoRow leftColumn={text.address} />
          <Hr style={{ ...hr, margin: 0, }} />
          <InfoTransfers transfer={data.transfer} lang="ru" />
          <Hr style={hr} />
          <InfoRow leftColumn={text.totalPrice} rightColumn={{}} />
          <Hr style={{ ...hr, margin: 0, }} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте {data.customerName},
          </Text>
          <div>
            <Text>
              Мы надеемся, что вы с нетерпением ждете вашего заезда <span style={textAccent}>{ruFormatDate(data.checkIn)}</span> года. Вы можете заселиться с <span style={textAccent}>14:00</span> или прибыть в любое удобное для вас время после этого.
            </Text>

            {data.apartmentPassword &&
              (
                <Text>Ваш код доступа к двери - <span style={textAccent}>({data.apartmentPassword})</span>. Он будет активен с момента заезда.</Text>
              )
            }

            {data.wifiPassword &&
              (
                <Text>Пароль от Wi-Fi -<span style={textAccent}>({data.wifiPassword})</span>.</Text>
              )
            }

            <Text>
              Наш менеджер будет ожидать вас в лобби, поэтому пожалуйста, свяжитесь с ним за 2 часа до вашего приезда по номеру <Link target="_blank" href={`tel:${data.hostContacts.phone}`} style={{ ...textAccent, textDecoration: 'underline' }}>{data.hostContacts.phone}</Link>. Также по этому же номеру вы можете заказать трансфер из аэропорта. Мы всегда рады помочь.
            </Text>

            <Text>
              Мы понимаем, что возможно вам понадобится обменять вашу валюту на тайский бат, поэтому полную оплату за проживание можно будет сделать в течение дня после заселения.
            </Text>

            <Text>С нетерпением ждем встречи с вами <span style={textAccent}>{ruFormatDate(data.checkIn)}</span> года.</Text>
          </div>
        </Row>
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
