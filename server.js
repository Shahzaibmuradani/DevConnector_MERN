const express = require('express');
const connectDB = require('./config/db');

const UserRoute = require('./routes/api/users');
const ProfileRoute = require('./routes/api/profile');
const AuthRoute = require('./routes/api/auth');
const PostsRoute = require('./routes/api/posts');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('API Running');
})

app.use('/api/users', UserRoute);
app.use('/api/profile', ProfileRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/posts', PostsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));