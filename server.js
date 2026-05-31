const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ received: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
