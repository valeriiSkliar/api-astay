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
import { ruFormatDate } from "../../../helpers/formatDate";
import InfoTransfers from "../../../ui/InfoTransfers";
import { textRu } from "../../../helpers/translate/translate";

interface ConfirmedBookingEmailProps {
  data: ConfirmedBookingEmailData;
}

export const ConfirmedBookingEmail = ({ data }: ConfirmedBookingEmailProps) => {
  const previewText = `Ваше бронирование на ${ruFormatDate(data.checkIn)} успешно отправлено.`;
  const { customerName, apartmentName } = data;

  const headText = `${apartmentName} | от ${data.hostContacts.name}`;
  const text = textRu(data);

  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ paddingBottom: "20px", overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Ваше бронирование отправлено</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {headText}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={headText} />
          </div>
          <InfoRow leftColumn={text.checkIn} rightColumn={text.checkOut} />
          <Hr style={hr} />
          <InfoRow leftColumn={text.guests} rightColumn={text.rooms} />
          <Hr style={hr} />
          <InfoTransfers transfer={data.transfer} lang="ru" />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте {customerName},
          </Text>
          <div>
            <Text>
              Мы получили ваш запрос на бронирование апартаментов в Паттайе, Таиланд. Хотелось бы подчеркнуть, что это еще не подтвержденное бронирование. По крайней мере, на данный момент.
            </Text>
            <Text>
              Наш менеджер ответит на ваш запрос в течение 8 часов, но обычно это происходит ещё быстрее!
            </Text>
          </div>
        </Row>
      </Section>

    </DefaultEmail>
  );
};