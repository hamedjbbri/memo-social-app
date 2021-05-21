import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://hamed:passw0rd1722@memo-app.0e5lq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopolog: true })
   .then(() => app.listen(PORT, () => console.log(`server running onn port: ${PORT}`)))
   .catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false)   

//