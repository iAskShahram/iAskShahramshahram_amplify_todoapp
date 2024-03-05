import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(config);
const client = generateClient();

export const glClient = client