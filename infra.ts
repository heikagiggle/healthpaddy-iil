#!/usr/bin/env node
import "dotenv/config"
import 'source-map-support/register';

import {App, Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {AppType, FullStackConstruct} from "@fy-stack/fullstack-construct";
import * as cdk from "aws-cdk-lib";

const appId = process.env['AWS_APP_ID'];
if (!appId) throw new Error('App ID is missing');

const props = {
    stackName: `${appId}-hosting`,
    env: {
        account: process.env['CDK_DEFAULT_ACCOUNT'],
        region: process.env['CDK_DEFAULT_REGION'],
    },
};


class AppStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const app = new FullStackConstruct(this, "FullStackApp", {
            appId: `${appId}-web`,
            apps: {
                web: {
                    type: AppType.NEXT_APP_ROUTER,
                    output: process.cwd(),
                    buildParams: {command: "node server.js"},
                }
            },
            cdn: {
                routes: {
                    "/*": {$resource: "web"}
                }
            }
        })

        if (app.cdn) {
            new cdk.CfnOutput(this, 'AppUrl', {
                key: 'appUrl',
                value: "https://" + app.cdn.distribution.distributionDomainName,
            });
        }

        const isProduction = process.env.NODE_ENV === 'production';
        if (isProduction) {
            // todo configure domain mapping
        }
    }
}

const app = new App();
new AppStack(app, "app", props);