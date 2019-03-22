const express = require('express');
const app = express();

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');
const error = require('./routes/errorMiddleware');

// parse body to json
app.use(express.json());

// route handlers
app.use(projectRoutes);
app.use(actionRoutes);

// error handler
app.use(error);

// port for production || development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
