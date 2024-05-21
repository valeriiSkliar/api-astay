import {
  Heading,
  Hr,
} from "@react-email/components";
import React from "react";
import { hr, nulling } from "../styles/global";
import InfoRow, { InfoData } from "./InfoRow";
import getFormattedPrice from "../../utils/beautyfyPrice";

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
    const { price = 0 } = transfer.from;
    if (!price || price <= 0) return null;

    const from: InfoData = {
      title: t[locale].from,
      text: getFormattedPrice(price),
    }

    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {t[locale].header}
        </Heading>
        <InfoRow leftColumn={from} rightColumn={{}} style={{ padding: '0 0 20px' }} />
        <Hr style={hr} />
      </>
    );
  }

  if (!transfer.from && transfer.to) {
    const { price = 0 } = transfer.to;

    if (!price || price <= 0) return null;

    const to: InfoData = {
      title: t[locale].to,
      text: getFormattedPrice(price),
    }

    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {t[locale].header}
        </Heading>
        <InfoRow leftColumn={to} rightColumn={{}} style={{ padding: '0 0 20px' }} />
        <Hr style={hr} />
      </>
    );
  }
  if (transfer.from && transfer.to) {

    const { price: priceFrom = 0 } = transfer.from;
    const { price = 0 } = transfer.to;

    if (!price || price <= 0 || !priceFrom || priceFrom <= 0) return null;


    const from: InfoData = {
      title: t[locale].from,
      text: getFormattedPrice(priceFrom),
    }


    const to: InfoData = {
      title: t[locale].to,
      text: getFormattedPrice(price),
    }

    return (
      <>
        <Heading as="h3" style={{ ...nulling, marginTop: 16, fontSize: 20, textAlign: 'center' }}>
          {t[locale].header}
        </Heading>
        <InfoRow leftColumn={from} rightColumn={to} style={{ padding: '0 0 20px' }} />
        <Hr style={hr} />
      </>

    );
  }

  return null
}
