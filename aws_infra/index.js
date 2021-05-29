"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");

const serverSize = "t2.micro";
const config = new pulumi.Config();

const keyName = config.get("keyName");
const publicKey = config.get("publicKey");

if (!keyName) {
  const key = new aws.ec2.KeyPair("key", { publicKey });
  keyName = key.keyName;
}

const serverType = pulumi.output(
  // click on EC2, go to the images option in the left sidebar, and click "AMIs". Then, search for the AMI by ami-ID (as they show up in `EC2 Launch Instance Step 1`)
  // once you select the AMI from the filtered results (should only be one result), the name is `AMI name` and the owner is `owner`
  aws.ec2.getAmi({
    filters: [
      {
        name: "name",
        values: [
          "ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-20210430",
        ],
      },
    ],
    owners: ["099720109477"],
    mostRecent: true,
  })
);

const securityGroup = new aws.ec2.SecurityGroup("3dvation-grp", {
  ingress: [
    {
      description: "Inbound CNX for Staging and Prod Servers",
      protocol: "tcp",
      fromPort: 22,
      toPort: 22,
      cidrBlocks: ["0.0.0.0/0"],
    },
  ],
  egress: [
    {
      description:
        "Outbound CNX for Staging and Prod Servers, lets you ssh from Staging to Prod",
      protocol: "tcp",
      fromPort: 22,
      toPort: 22,
      cidrBlocks: ["0.0.0.0/0"],
    },
  ],
  tags: {
    Name: "3dvation_sec_grp",
  },
});

const stagingServer = new aws.ec2.Instance("staging-3dvation", {
  instanceType: serverSize,
  vpcSecurityGroupIds: [securityGroup.id],
  keyName: "vindici-3d",
  ami: serverType.id,
});

const prodServer = new aws.ec2.Instance("prod-3dvation", {
  instanceType: serverSize,
  vpcSecurityGroupIds: [securityGroup.id],
  keyName: "vindici-3d",
  ami: serverType.id,
});

exports.publicIp_staging = stagingServer.publicIp;
exports.publicHostName_staging = stagingServer.publicDns;
exports.publicIp_prod = prodServer.publicIp;
exports.publicHostName_prod = prodServer.publicDns;

// Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("3dvation_static_files");
// Export the name of the bucket
// exports.bucketName = bucket.id;
