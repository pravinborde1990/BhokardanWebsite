const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIARDX2UDZU7A3HKKPA',
  secretAccessKey: '6JYwIno7vD1B/r0SKX30/10J8nQbgO+Jtqu2oJQy',
  region: 'YOUR_REGION' // e.g., 'us-east-1'
});

const s3 = new AWS.S3();

const incrementFileContent = async (bucketName, key) => {
  const params = {
    Bucket: bucketName,
    Key: key
  };

  try {
    const result = await s3.getObject(params).promise();
    const fileContent = result.Body.toString('utf-8');
    console.log('Original file content:', fileContent);

    // Increment the file content by one
    const newContent = parseInt(fileContent, 10) + 1;

    // Write the incremented content back to the file
    await writeFileToS3(bucketName, key, newContent.toString());

    console.log('File content incremented and written to S3 successfully');
  } catch (error) {
    console.error('Error processing file:', error);
    throw error;
  }
};

const writeFileToS3 = async (bucketName, key, content) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: content
  };

  try {
    await s3.putObject(params).promise();
    console.log('File written to S3 successfully');
  } catch (error) {
    console.error('Error writing file to S3:', error);
    throw error;
  }
};

// Handler function for the Netlify function
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  const body = JSON.parse(event.body);
  const bucketName = 'visitcounter';
  const key = 'visitorcounter/number.txt';

  try {
    await incrementFileContent(bucketName, key);

    return {
      statusCode: 200,
      body: 'File content incremented and written to S3 successfully'
    };
  } catch (error) {
    console.error('Error executing function:', error);

    return {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }
};
