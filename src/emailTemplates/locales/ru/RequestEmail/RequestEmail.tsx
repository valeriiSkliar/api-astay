import {
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { nulling, paragraph } from "../../../styles/global";

interface RequestEmailProps {
  data: RequestEmailData;
}

export const RequestEmail = ({ data: { customerName, hostContacts } }: RequestEmailProps) => {
  const previewText = `Ваш запрос успешно отправлен.`;

  return (
    <DefaultEmail lang="ru" previewText={previewText} hostData={hostContacts}>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Здравствуйте {customerName},
          </Text>
          <div>
            <Text>
              Благодарим вас за обращение в наш отель!
            </Text>
            <Text>
              Мы получили ваш запрос и выражаем признательность за проявленный. Наш менеджер свяжется с вами в ближайшее время, чтобы обсудить детали вашего запроса и предложить наилучшие варианты.
            </Text>
            <Text>
              Мы стремимся обеспечить наших гостей высоким уровнем обслуживания и комфорта, и с нетерпением ждем возможности сделать ваше пребывание у нас приятным и запоминающимся.
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