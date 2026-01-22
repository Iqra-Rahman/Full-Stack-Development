const express = require('express');
const { dbConnect, sequelize } = require('./config/dbConnect');
const facultyRoutes = require('./routers/facultyRouter');
const departmentRoutes = require('./routers/DeptRouter')
// const Faculty = require('./models/Faculty');

const app = express();
app.use(express.json());

app.use('/faculty', facultyRoutes);
app.use('/departments', departmentRoutes);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8080, async () => {
  console.log('server listening at port 8080');

  await dbConnect();

  // Sync models AFTER connection
  await sequelize.sync({ alter: true });
  console.log('Models synced');
});
