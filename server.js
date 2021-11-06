const app = require('./app');

const dotenv = require('dotenv');

// To specify the path for config file
dotenv.config({path: './config.env'});
// To check the current environment set by express
console.log(app.get('env'));

// To check the current environment variables set by nodeJS
console.log(process.env);

const port = process.env.port;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});