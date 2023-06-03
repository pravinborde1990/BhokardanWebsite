const fs = require('fs');

exports.handler = async () => {
  const fileName = 'number.txt';
  let number = 0;

  try {
    // Check if the file exists
    const fileExists = fs.existsSync(fileName);

    if (fileExists) {
      // Read the number from the file
      const fileContent = fs.readFileSync(fileName, 'utf8');
      number = parseInt(fileContent);
    } else {
      // Create a new file with initial value 0
      fs.writeFileSync(fileName, '0', 'utf8');
    }

    // Increment the number
    number++;

    // Update the file with the incremented number
    fs.writeFileSync(fileName, number.toString(), 'utf8');
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error occurred',
    };
  }

  return {
    statusCode: 200,
    body: number.toString(),
  };
};
