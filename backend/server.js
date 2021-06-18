const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const storeRouter = require("./routes/store");
const { NotFoundError } = require("./utils/error");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use("/store", storeRouter);

app.use((req, res, next) => {
    return next(new NotFoundError());
});

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;

    return res.status(status).json({
        error: { message, status },
    });
});

const port = 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
