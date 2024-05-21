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
import { textEn } from "../../../helpers/translate/translate";

interface ConfirmedTransferEmailProps {
  data: ConfirmedTransferEmailData;
}

export const ConfirmedTransferEmail = ({
  data,
}: ConfirmedTransferEmailProps) => {
  const previewText = `Your transfer has been successfully confirmed.`;
  const { customerName } = data;

  const text = textEn(data);

  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section>
        <Heading as="h2" style={{ ...heading, marginBottom: 20 }}>
          Your transfer has been confirmed
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
          <InfoTransfers transfer={data.transfer} />
          <InfoRow leftColumn={text.totalPrice} rightColumn={{}} />
          <Hr style={hr} />
        </Row>
      </Section>
      <Section>
        <Row>
          <Text style={{ ...paragraph, fontWeight: "700" }}>
            Dear, {customerName},
          </Text>
          <Text style={{ ...nulling, margin: "5px 0" }}>
            We sincerely thank you for choosing our company. Our goal is to
            provide you with a comfortable and swift journey, as well as to
            deliver a high level of service.
          </Text>
          <Text>Your transfer includes:</Text>
        </Row>
      </Section>
      <Section cellSpacing={0} cellPadding={0}>
        <Row align="center">
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>
              Airport pick-up with a personalized sign.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>Payment for all toll roads.</Text>
          </Column>
        </Row>
        <Row>
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>Driver assistance with luggage.</Text>
          </Column>
        </Row>
        <Row>
          <Column width={20} align="center" valign="middle">
            <div style={bullet}></div>
          </Column>
          <Column align="left" valign="middle">
            <Text style={nulling}>Bottled water.</Text>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row>
          <Text>
            Our manager will contact you and provide details about the driver
            and meeting point. Please feel free to contact us if you have any
            questions or need further information.
          </Text>
        </Row>
      </Section>
    </DefaultEmail>
  );
};


