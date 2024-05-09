import {
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import DefaultEmail from "../../../DefaultEmail/DefaultEmail";
import { paragraph } from "../../../styles/global";

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
            Здравствуйте, {customerName},
          </Text>
          <div>
            <Text>
              Благодарим вас за обращение!
            </Text>
            <Text>
              Мы получили ваш запрос и благодарим за проявленный интерес. Наш менеджер свяжется с вами в ближайшее время, чтобы обсудить все детали и предложить наилучшие варианты.
            </Text>
          </div>
        </Row>
      </Section>

    </DefaultEmail>
  );
};