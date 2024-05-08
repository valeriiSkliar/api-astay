import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const emailConfig: SMTPTransport.Options = {
  name: process.env.DOMAIN_NAME,
  host: process.env.SMTP_HOST,

  secure: true,
  tls: {
    ciphers: 'SSLv3',
  },
  requireTLS: true,
  port: Number(process.env.SMTP_PORT) || 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  dkim: {
    domainName: process.env.DOMAIN_NAME ?? '',
    keySelector: process.env.DKIM_KEY_SELECTOR ?? '',
    privateKey: '',
  },
};
