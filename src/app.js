// app.js
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const { connectDB } = require('./config/index.js');

// Routes
const productRoutes = require('./routes/api/products.router');
const cartRoutes = require('./routes/api/cart.router');
const viewRoutes = require('./routes/views.router');
const authRoutes = require('./routes/auth.router');
const mocksRouter = require('./routes/mocks.router');
const usersRouter = require('./routes/api/users.router');
const petsRouter = require('./routes/api/pets.router');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'defaultSecret',
  resave: false,
  saveUninitialized: true,
}));

// Handlebars Configuration
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Routes
app.use('/', viewRoutes);
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

// Start Server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(`Server running on port: ${PORT}`);
  }
});
