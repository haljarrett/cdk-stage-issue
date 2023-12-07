import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class StageIssueStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);
    
    new cdk.Stack(this, 'nested');
  }
}
