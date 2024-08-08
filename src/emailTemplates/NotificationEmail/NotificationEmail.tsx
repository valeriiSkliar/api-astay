import {
  Button,
  Heading,
  Row,
  Section,
  Text
} from "@react-email/components";
import React from 'react';
import DefaultEmail from "../DefaultEmail/DefaultEmail";
import {
  button,
  heading,
  nulling
} from "../styles/global";

export interface NotificationEmailProps {
  data: NotificationEmailData
}

const quote: React.CSSProperties = {
  ...nulling,
  backgroundColor: '#ededed',
  padding: '30px 30px',
  borderRadius: "15px",
  fontWeight: "700",
  color: 'black',
}

export const NotificationEmail = ({data}: NotificationEmailProps) => {
  const previewText = '🚀 You have new application 🚀';

  return (
    <DefaultEmail previewText={previewText} hostData={data.hostContacts}>
      <Section style={{paddingBottom: "20px", overflow: "hidden"}}>
        <Heading as="h2" style={heading}>
          🚀 You have new application 🚀
        </Heading>
        <Row>
          <Text style={{marginTop: "5px", fontSize: "20px"}}>
            Please review it in the admin panel.
          </Text>
          <Button target="_blank" href="https://admin.astayhome.com/admin/aplications-list">
            <div style={{overflow: "hidden"}}>
              <blockquote style={quote}>
                {data.message}
              </blockquote>
            </div>
          </Button>
        </Row>
        <Row style={{textAlign: "center", margin: "20px auto", width: "100%"}}>
          <Button
            target="_blank"
            href="https://admin.astayhome.com/admin/aplications-list"
            style={{...button, padding: "15px 20px", display: "block", minWidth: "320px", fontSize: '14px'}}
          >
            Go to Admin panel
          </Button>
        </Row>
      </Section>
    </DefaultEmail>
  );
};
