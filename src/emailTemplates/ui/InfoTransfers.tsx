/* eslint-disable @typescript-eslint/naming-convention */
import {
  Heading,
} from "@react-email/components";
import React from "react";
import { nulling } from "../styles/global";
import InfoRow from "./InfoRow";

interface InfoRowProps {
  transfer?: Transfer;
  lang?: string;
}

export default function InfoTransfers({ transfer, lang }: InfoRowProps) {

  const locale = lang === 'ru' ? 'ru' : 'en';

  const header = locale === 'ru' ? 'Поездка' : 'Transfer';

  if (!transfer || Object.is(transfer, null)) return null;

  if (transfer.from && !transfer.to) {
    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {header}
        </Heading>
        <InfoRow leftColumn={transfer.from} rightColumn={{}} style={{ padding: '0 0 20px' }} />
      </>
    );
  }

  if (!transfer.from && transfer.to) {
    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {header}
        </Heading>
        <InfoRow leftColumn={transfer.to} rightColumn={{}} style={{ padding: '0 0 20px' }} />
      </>
    );
  }
  if (transfer.from && transfer.to) {
    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {header}
        </Heading>
        <InfoRow leftColumn={transfer.from} rightColumn={transfer.to} style={{ padding: '0 0 20px' }} />
      </>

    );
  }

  return null
}
