import { rules as originalRules } from 'eslint-plugin-import-helpers';

import orderImports from './rules/order-imports';

export const rules = {
  ...originalRules,
  'order-imports': orderImports
};
