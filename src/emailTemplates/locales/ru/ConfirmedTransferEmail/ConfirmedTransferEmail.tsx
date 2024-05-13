import {
  Column,
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
import {
  bullet,
  heading,
  hr,
  mainImg,
  nulling,
  paragraph,
} from "../../../styles/global";
import InfoTransfers from "../../../ui/InfoTransfers";
import { textRu } from "../../../helpers/translate/translate";

interface ConfirmedTransferEmailProps {
  data: ConfirmedTransferEmailData;
}

export const ConfirmedTransferEmail = ({
  data,
}: ConfirmedTransferEmailProps) => {
  const previewText = `Ваш трансфер был успешно подтвержден.`;
  const { customerName } = data;
  const text = textRu(data);

  return (
    <DefaultEmail
      lang="ru"
      previewText={previewText}
      hostData={data.hostContacts}
    >
      <Section>
        <Heading as="h2" style={{ ...heading, marginBottom: 20 }}>
          Ваш трансфер подтвержден
        </Heading>
        <Row>
          <div style={{ overflow: "hidden" }}>
            <Img
              src="https://media4.giphy.com/media/o3LUQmlpSX54N8tc9s/giphy.gif?cid=790b76110968b654391fa3042fcfa2bbbc9d07dfd91c9e2d&rid=giphy.gif&ct=g"
              style={mainImg}
              width={580}
              height={290}
              alt=""
            />
          </div>
          <InfoTransfers lang="ru" transfer={data.transfer} />
          <Hr style={hr} />
          <InfoRow leftColumn={text.totalPrice} rightColumn={{}} />
          <Hr style={hr} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте, {customerName},
          </Text>
          <Text style={{ ...nulling, margin: "5px 0" }}>
            Мы искренне благодарим вас за выбор нашей компании. Наша цель -
            обеспечить вам комфортную и быструю поездку, а также предоставить
            высокий уровень сервиса.
          </Text>
          <Text>Ваш трансфер включает в себя:</Text>
        </Row>
      </Section>
      <Section cellSpacing={0} cellPadding={0}>
        <Row align="center">
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>
              Встречу в аэропорту с персонализированной табличкой.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>Оплату всех платных дорог.</Text>
          </Column>
        </Row>
        <Row>
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>Помощь водителя с багажом.</Text>
          </Column>
        </Row>
        <Row>
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>Бутилированная вода.</Text>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row>
          <Text>
            Наш менеджер свяжется с вами и отправит данные о водителе и месте
            встречи. Не стесняйтесь обращаться к нам, если у вас возникнут
            вопросы или потребуется дополнительная информация.
          </Text>
        </Row>
      </Section>
    </DefaultEmail>
  );
};
