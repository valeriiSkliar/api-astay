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
import { heading, hr, mainImg, nulling, paragraph } from "../../../styles/global";
import { ruFormatDate } from "../../../helpers/formatDate";
import InfoTransfers from "../../../ui/InfoTransfers";

interface ConfirmedBookingEmailProps {
  data: ConfirmedBookingEmailData;
}

export const ConfirmedBookingEmail = ({ data }: ConfirmedBookingEmailProps) => {
  const previewText = `Ваше бронирование на ${ruFormatDate(data.checkIn)} успешно отправлено.`;
  const { customerName, guests, location, roomCategory, rooms } = data;

  const aptName = `${roomCategory} апартамент в ${location.city}, ${location.country}`;

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
        <Heading as="h2" style={heading}>Ваше бронирование отправлено.</Heading>
        <Row>
          <div>
            <Text style={{ marginTop: '5px', fontSize: '20px' }}>
              {aptName}
            </Text>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <Img src={data.img} style={mainImg} width={1920} height={1080} alt={aptName} />
          </div>
          <InfoRow leftColumn={checkIn} rightColumn={checkOut} />
          <Hr style={hr} />
          <InfoRow leftColumn={guests} rightColumn={rooms} />
          <Hr style={hr} />
          <InfoTransfers transfer={data.transfer} lang="ru" />
          <Hr style={hr} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте {customerName},
          </Text>
          <div>
            <Text>
              Ваш запрос на бронирование {aptName} был отправлен. Мы хотим ясно указать, что это еще не подтвержденное бронирование. По крайней мере, пока нет.
            </Text>
            <Text>
              Наш менеджер ответит на ваш запрос в течение 24 часов, но чаще всего это происходит еще быстрее!
            </Text>
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