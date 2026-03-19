import { defineFunction } from '@aws-amplify/backend';

export const contactNotify = defineFunction({
  name: 'contact-notify',
  environment: {
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL ?? '',
  },
});
