import type { DynamoDBStreamHandler } from 'aws-lambda';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: process.env.AWS_REGION });

export const handler: DynamoDBStreamHandler = async (event) => {
  for (const record of event.Records) {
    if (record.eventName !== 'INSERT') continue;

    const img = record.dynamodb?.NewImage;
    if (!img) continue;

    const name    = img.name?.S    ?? '';
    const email   = img.email?.S   ?? '';
    const phone   = img.phone?.S   ?? '未入力';
    const message = img.message?.S ?? '';
    const to      = process.env.NOTIFICATION_EMAIL!;

    const body = [
      `【お問い合わせが届きました】`,
      ``,
      `お名前　　: ${name}`,
      `メール　　: ${email}`,
      `電話番号　: ${phone}`,
      ``,
      `【お問い合わせ内容】`,
      message,
    ].join('\n');

    await ses.send(new SendEmailCommand({
      Source:      to,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: `【お問い合わせ】${name}様より`, Charset: 'UTF-8' },
        Body:    { Text: { Data: body, Charset: 'UTF-8' } },
      },
    }));
  }
};
