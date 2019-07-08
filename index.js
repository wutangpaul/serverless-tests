// CORS response headers
const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": false,
  "Access-Control-Allow-Headers":
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent,X-Requested-With"
};

// Lambda handler
const hello = (event, context, callback) => {
  response = {
    statusCode: 200, // Return HTTP 200
    headers: responseHeaders, // For CORS support
    body: JSON.stringify({ message: "Hello World" }) // Response body
  };

  callback(null, response);
};

module.exports = {
  hello // index.hello
};
