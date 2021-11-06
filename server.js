const app = require('./app');

// To check the current environment set by express
console.log(app.get('env'));

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});