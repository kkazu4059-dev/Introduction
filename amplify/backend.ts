import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { contactNotify } from './functions/contactNotify/resource.js';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { StartingPosition } from 'aws-cdk-lib/aws-lambda';
import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';

const backend = defineBackend({
  auth,
  data,
  contactNotify,
});

// SES送信権限を Lambda に付与
backend.contactNotify.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ['ses:SendEmail', 'ses:SendRawEmail'],
    resources: ['*'],
  })
);

// Contact テーブルの DynamoDB Stream を Lambda に接続
const contactTable = backend.data.resources.tables['Contact'];
backend.contactNotify.resources.lambda.addEventSource(
  new DynamoEventSource(contactTable, {
    startingPosition: StartingPosition.LATEST,
  })
);
