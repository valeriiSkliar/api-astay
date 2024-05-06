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

interface ConfirmedTransferEmailProps {
  data: ConfirmedTransferEmailData;
}

export const ConfirmedTransferEmail = ({ data }: ConfirmedTransferEmailProps) => {
  const previewText = `Ваш заказ такси был успешно подтвержден.`;
  const { customerName } = data;



  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={data.hostContacts}>
      <Section>
        <Heading as="h2" style={{ ...heading, marginBottom: 20 }}>Ваш заказ такси подтвержден.</Heading>
        <Row>
          <div style={{ overflow: 'hidden' }}>
            <Img src="https://media4.giphy.com/media/o3LUQmlpSX54N8tc9s/giphy.gif?cid=790b76110968b654391fa3042fcfa2bbbc9d07dfd91c9e2d&rid=giphy.gif&ct=g" style={mainImg} width={580} height={290} alt="" />
          </div>
          {data.transfer.from && (
            <>
              <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
                Поездка
              </Heading>
              <InfoRow leftColumn={data.transfer.from} rightColumn={data.transfer.to} style={{ padding: '0 0 20px' }} />
              <Hr style={hr} />
            </>
          )}
          {!data.transfer.from && data.transfer.to && (
            <>
              <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
                Поездка
              </Heading>
              <InfoRow leftColumn={data.transfer.to} rightColumn={{}} style={{ padding: '0 0 20px' }} />
              <Hr style={hr} />
            </>
          )}
          <InfoRow leftColumn={data.totalPrice} rightColumn={{}} />
          <Hr style={hr} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте {customerName},
          </Text>
          <Text style={{ ...nulling, margin: '5px 0' }}>
            Спасибо что выбрали нас. Мы стремимся обеспечить безупречный опыт от начала и до конца.
          </Text>
          <Text>
            Ваша поездка включает:
          </Text>
          <Text>
            - Встречу в аэропорту с персонализированой табличкой
          </Text>
          <Text>
            - Все платные дороги
          </Text>
          <Text>
            Пожалуйста, свяжитесь с нами, если у вас возникнут вопросы.
          </Text>
        </Row>
      </Section>
      <Section>
        <Text style={nulling}>С уважением,</Text>
        <Text style={nulling}>Команда AstayHome</Text>
      </Section>
    </DefaultEmail>
  );
};