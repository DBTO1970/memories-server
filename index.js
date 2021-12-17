import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


app.use(express.json({ limit: "30", extended: true}));
app.use(express.urlencoded({ limit: "30", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);


// mondodb cloud atlas

const CONNECTION_URL = "mongodb+srv://don-b-admin:javascript123@cluster0.pq1cv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    .catch((error) => console.log(error.message)));


