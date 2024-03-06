import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

config.aws_appsync_apiKey = process.env.NEXT_PUBLIC_aws_appsync_apiKey!

Amplify.configure(config);
const client = generateClient();

export const glClient = client;
