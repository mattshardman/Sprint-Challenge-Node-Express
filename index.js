const express = require('express');
const app = express();

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

app.use(express.json());

app.use(projectRoutes);
app.use(actionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
