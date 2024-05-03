import Mail from 'nodemailer/lib/mailer';

export type MailInterface = Omit<Mail.Options, 'from'> & {
  from?:
    | '"AstayHome" noreply@astayhome.com'
    | '"AstayHome" info@astayhome.com'
    | '"AstayHome" support@astayhome.com';
};
