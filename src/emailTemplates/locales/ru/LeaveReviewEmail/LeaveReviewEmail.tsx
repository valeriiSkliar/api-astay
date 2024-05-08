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
import { heading, mainImg, nulling, paragraph, textAccent } from "../../../styles/global";

interface LeaveReviewEmailProps {
  data: LeaveReviewEmailData;
}

export const LeaveReviewEmail = ({ data }: LeaveReviewEmailProps) => {
  const headText = `${data.roomCategory} room in ${data.location.city}, ${data.location.country} | by ${data.hostContacts.name}`;
  const previewText = `Как прошло ваше пребывание в ${headText}?`;
  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={data.hostContacts}>
      <Section style={{ overflow: 'hidden' }}>
        <Heading as="h2" style={heading}>Как прошло ваше пребывание в апартаменте?</Heading>
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
            Мы надеемся, что во время вашего пребывания с нами у вас появились незабываемые воспоминания. Нам действительно было приятно принимать вас.
          </Text>
          <Text>
            Не могли бы вы поделиться своими впечатлениями о пребывании с нами, оставив отзыв? Это поможет нам и другим гостям понять, насколько им понравиться у нас. Вы можете узнать, как это сделать, перейдя по ссылке.
          </Text>
          <Text>У вас есть <span style={textAccent}>14 дней</span> для заполнения и отправки вашего отзыва.</Text>
          <Text>
            Будем рады видеть вас снова.
          </Text>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Button href={data.reviewLink} style={button}>
            Оставить Отзыв
          </Button>
        </Row>
      </Section>
      <Section>
        <Text style={nulling}>С уважением,</Text>
        <Text style={nulling}>Команда AstayHome</Text>
      </Section>
    </DefaultEmail>
  );
};


const button: Style = {
  margin: '0 auto',
  padding: '15px 50px',
  background: '#3e3790',
  color: '#fff',
  fontWeight: 900,
  textTransform: 'uppercase',
  borderRadius: 15
}