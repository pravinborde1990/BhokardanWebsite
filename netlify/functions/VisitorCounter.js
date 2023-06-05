const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIARDX2UDZU7A3HKKPA',
  secretAccessKey: '6JYwIno7vD1B/r0SKX30/10J8nQbgO+Jtqu2oJQy',
  region: 'ap-south-1' // e.g., 'us-east-1'
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

// Usage example
incrementFileContent('visitcounter', 'visitorcounter/number.txt');
