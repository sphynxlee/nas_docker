import express from 'express';
const app = express();
const port = 3000;

// Define your routes here
interface RequestWithName {
  name: string;
  // Add other properties if needed
}

app.get('/', (req: RequestWithName, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});