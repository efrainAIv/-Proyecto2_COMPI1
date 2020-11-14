const scann = require('../analyzer/scanner');

function readFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        console.log(contents);
        tokens = scann.hola();

        for (let index = 0; index < tokens.length; index++) {
            console.log(token[index]);
        }

    };
    reader.readAsText(file);
}
