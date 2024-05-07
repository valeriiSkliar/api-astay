import {
  Column,
  Row,
  Text,
} from "@react-email/components";
import React from "react";
import { nulling } from "../styles/global";

interface InfoRowProps {
  leftColumn: {
    title: string;
    text: string;
  };
  rightColumn?: {
    title?: string;
    text?: string;
  };
  style?: Style,
}

export default function InfoRow(props: InfoRowProps) {

  const { leftColumn, rightColumn = undefined } = props;

  return (
    <Row style={{ ...nulling, padding: '15px 0', ...props.style }}>
      <Column style={{ textAlign: 'start', width: '50%' }}>
        <Text style={infoH}>
          {leftColumn.title}
        </Text>
        <Text style={infoP}>
          {leftColumn.text}
        </Text>
      </Column>
      {rightColumn && (<Column style={{ textAlign: 'end' }}>
        <Text style={infoH}>
          {rightColumn?.title}
        </Text>
        <Text style={infoP}>
          {rightColumn?.text}
        </Text>
      </Column>)}
    </Row>
  );
}


const infoH: Style = {
  ...nulling,
  fontSize: 20,
  fontWeight: 500,
  textTransform: 'capitalize',
}

const infoP: Style = {
  ...nulling,
  marginTop: 5,
}
