import {
  Heading,
} from "@react-email/components";
import React from "react";
import { nulling } from "../styles/global";
import InfoRow, { InfoData } from "./InfoRow";

interface InfoRowProps {
  transfer?: Transfer;
  lang?: string;
}


const t = {
  en: {
    header: 'Transfer',
    from: 'From Airport',
    to: 'To Airport'
  },
  ru: {
    header: 'Поездка',
    from: 'Из Аэропорта',
    to: 'В Аэропорт'
  }
}


export default function InfoTransfers({ transfer, lang }: InfoRowProps) {

  const locale = lang === 'ru' ? 'ru' : 'en';

  if (!transfer || Object.is(transfer, null)) return null;

  if (transfer.from && !transfer.to) {
    const from: InfoData = {
      title: t[locale].from,
      text: transfer.from?.price || transfer.from?.date || '',
    }

    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {t[locale].header}
        </Heading>
        <InfoRow leftColumn={from} rightColumn={{}} style={{ padding: '0 0 20px' }} />
      </>
    );
  }

  if (!transfer.from && transfer.to) {
    const to: InfoData = {
      title: t[locale].to,
      text: transfer.to?.price || transfer.to?.date || '',
    }

    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {t[locale].header}
        </Heading>
        <InfoRow leftColumn={to} rightColumn={{}} style={{ padding: '0 0 20px' }} />
      </>
    );
  }
  if (transfer.from && transfer.to) {

    const from: InfoData = {
      title: t[locale].from,
      text: transfer.from?.price || transfer.from?.date || '',
    }


    const to: InfoData = {
      title: t[locale].to,
      text: transfer.to?.price || transfer.to?.date || '',
    }

    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {t[locale].header}
        </Heading>
        <InfoRow leftColumn={from} rightColumn={to} style={{ padding: '0 0 20px' }} />
      </>

    );
  }

  return null
}
