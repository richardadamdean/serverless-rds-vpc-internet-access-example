### Serverless-rds-internet-access Sample

This is a sample implementation which shows an example of how to setup a [serverless](https://serverless.com/) project which allows your lambda(s) to connect to both an RDS instance from within a VPC as well as connecting out to the internet. If you don't have much experience working with configuring VPCs or networking rules this will should provide a boilerplate example to get you started with (and is a product of my own initial journey trying to understand and set this up myself).

There is only a small collection of literature about why this is tricky to do and also why you need to do it at all. I won't repeat what's already been written, but it's worth having a read through of some of these resources:

* [Accessing VPC Resources With Lambda](http://blog.brianz.bz/post/accessing-vpc-resources-with-lambda/)
* [The Dark Art of VPC Networking](http://blog.brianz.bz/post/dark-art-of-vpc-networking/)
* [Enabling Outbout Internet Access Within a VPC](https://medium.com/@philippholly/aws-lambda-enable-outgoing-internet-access-within-vpc-8dd250e11e12)
* [Configure Lambdas to Access an RDS Instance Within a VPC](https://docs.aws.amazon.com/lambda/latest/dg/vpc-rds.html)
* [How to set up Lambda to talk to the Internet and a VPC](https://gist.github.com/reggi/dc5f2620b7b4f515e68e46255ac042a7)

This snippet also borrows heavily from other example configs and setups provided by other developers out there. This setup borrows heavily from:

* https://github.com/ittus/aws-lambda-vpc-nat-examples
* https://github.com/ikim23/aws-lambda-static-ip
* https://github.com/mugglmenzel/serverless-examples-cached-rds-ws

### Setup

##### Install your dependancies
```
npm install
```

##### Deploy

```
sls deploy
```

### What do you get?

The