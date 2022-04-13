import 'source-map-support/register';

import Log from '@dazn/lambda-powertools-logger';
import wrap from '@nearprime/lambda-powertools-wrapper';

import { LambdaHandler } from './types';

export const lambdaHandler: LambdaHandler = async (event) => {
  Log.debug('Received event', event);
  return { message: 'hello' };
};

export const handler = wrap(lambdaHandler);
