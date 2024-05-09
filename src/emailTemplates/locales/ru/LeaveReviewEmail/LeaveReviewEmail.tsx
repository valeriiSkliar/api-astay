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
import { button, heading, mainImg, paragraph, textAccent } from "../../../styles/global";

interface LeaveReviewEmailProps {
  data: LeaveReviewEmailData;
}

export const LeaveReviewEmail = ({ data }: LeaveReviewEmailProps) => {
  const headText = `${data.apartmentName} | от ${data.hostContacts.name}`;
  const previewText = `Как прошел ваш отдых в ${headText}?`;
  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Как прошел ваш отдых?</Heading>
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
            Здравствуйте {data.customerName},
          </Text>
          <Text>
            Как прошел ваш отдых?
          </Text>
          <Text>
            Пожалуйста поделитесь своими впечатлениями о пребывании у нас.
          </Text>
          <Text>У вас есть <span style={textAccent}>14 дней</span> для заполнения и отправки отзыва.</Text>
          <Text>
            Будем рады видеть вас снова
          </Text>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Button target="_blank" href={data.reviewLink} style={button}>
            Оставить Отзыв
          </Button>
        </Row>
      </Section>

    </DefaultEmail>
  );
};
