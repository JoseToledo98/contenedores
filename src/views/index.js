const app = require ('./app');
require('./database');

async function main(){
    await app.listen(3000);
    console.log('serber is running');
}

main();