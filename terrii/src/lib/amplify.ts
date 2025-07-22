import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';
import awsconfig from '../aws-exports.ts';

// Configure Amplify
Amplify.configure(awsconfig);

export { Amplify, Auth };
