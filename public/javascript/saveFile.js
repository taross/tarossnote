var fs = require("fs");

function saveFile(){
    var data = document.getElementById("inputText").value;
    var fileName = data.split("\n");
    fileName = fileName[0].replace(/#/g, '');
    var filepath ="public/note/" + fileName[0].replace(/#/g, '') + ".txt";
    fs.writeFile(fileName, data, function (error) {
        if (error != null) {
            alert('error : ' + error);
        }
        alert("Saved as " + fileName + "!");
    });

}
