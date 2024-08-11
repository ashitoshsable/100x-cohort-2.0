const express = require('express');
const cors = require('cors');
const mainRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.use('/api/v1', mainRouter);

app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`);
})

