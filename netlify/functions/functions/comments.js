exports.handler = async (event, context) => {
    // logic goes here
  };
  exports.handler = async (event) => {
    const issueNumber = event.queryStringParameters.id;
  };
  exports.handler = async (event) => {
    const issueNumber = event.queryStringParameters.id;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ issueNumber }),
    };
  };
      