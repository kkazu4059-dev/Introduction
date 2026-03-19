'use client';

import { Amplify } from 'aws-amplify';

// amplify_outputs.json は `npx ampx sandbox` またはデプロイ後に生成される
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let outputs: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  outputs = require('@/amplify_outputs.json');
} catch {
  // ローカル開発時など outputs が存在しない場合はスキップ
}

if (outputs) {
  Amplify.configure(outputs, { ssr: true });
}

export default function ConfigureAmplify() {
  return null;
}
