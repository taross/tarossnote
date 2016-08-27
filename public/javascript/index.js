window.onload = function(){
    var editor = new Vue({
        el:"#editor",
        data:{
            text: "## markdownContent!"
        },
        computed{
            chapters: function(){
                var textArray = editor.text.split("\n");
                var headerList = {}

                textArray.forEach(function(value, index, array){
                    proccesToHeader(value, headerList);
                });
                return headerList;
            }
        },
        filters:{
            marked:marked,

            head:function(src){
                // 一行ずつテキストを分割
                var textArray = src.split("\n");
                var headerList = "";

                textArray.forEach(function(value, index, array){
                    //前方一致判定
                    var text = " " + value;
                    if(text.indexOf(" " + "#") !== -1){
                        headerList += "<p>" + value + "</p><br>";
                    }
                });
                return headList;
            }
        }

    });
}

function proccesToHeader(text, headerList){

    if(frontMacth(text) !== -1){
        headerList.push({
            level: frontMacth(text),
            text: text.substring(frontMacth(text),text.length);
        });
    }
}

function frontMacth(text){//#が先頭に含まれる数を返す
    var target = " " + text;
    if(text.indexOf(" " + "#") !== -1){
            return text.split("#").length-1;
    }
}

function headerLastNum(headerList){//最後尾ヘッダーのネスト数を返す
    return headerList[headerList.length-1].split(".").length-1;
}
