const app = require('./app');

async function main(){
    app.app.listen(app.app.get('port'));
    await console.log('Servidor Iniciado...');
}

main();