#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StageIssueStage } from '../lib/stage-issue-stage';

const app = new cdk.App();
new StageIssueStage(app, 'beta', {});
new cdk.Stack(app, 'toplevelA');
new cdk.Stack(app, 'toplevelB');