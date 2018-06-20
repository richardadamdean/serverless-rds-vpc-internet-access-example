var pg = require("pg");
const axios = require('axios');

export const hello = async (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;

  // try and connect to the database
  var conn = "postgres://"+process.env.postgresUser+":"+process.env.postgresPassword+"@"+process.env.postgresEndpoint+"/"+process.env.postgresDatabase;
  var client = new pg.Client(conn);
  await client.connect();
  var res = await client.query('SELECT 1 + 1 AS COUNT');
  // just grab the first row in the result set
  var rdsQueryResult = res.rows[0];
  await client.end();

  // make an external request
  const externalRequest = await axios('https://github.com/richardadamdean/serverless-rds-vpc-internet-access-example');

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      rdsQueryResult: rdsQueryResult,
      externalRequestStatus: externalRequest.status
    }),
  };

  callback(null, response);
};