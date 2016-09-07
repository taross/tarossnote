window.onload = function(){

    var editor = new Vue({
        el:"#editor",
        data:{
            text: "## markdownContent!",
        },
        computed:{
            chapters: function(){
                var textArray = this.text.split("\n");
                var headerList = [];

                textArray.forEach(function(value, index, array){
                    headerList.push(proccesToHeader(value));
                });
                return headerList;
            }
        },
        filters:{
            marked:marked
        },
        methods:{
            scrollDown: function(){
                var mdContent = document.getElementById("markdownContent");
                mdContent.scrollTop = mdContent.scrollHeight;
            }
        }

    });

    var home = new Vue({
        el:"#home",
        data:{
            home:true
        }
    });
}

function directHome(){
    var home = document.getElementById("home");
    var editor = document.getElementById("editor");

    editor.style.display = none;
    home.style.display = block;
}

function proccesToHeader(text){//章分けに必要な要素を生成して返す

    if(frontMacth(text) !== -1){
        return {
            level: frontMacth(text),
            text: text.replace(/#/g, ' ')//.substring(1, text.length-1)
        };
    }
}

function frontMacth(text){//#が先頭に含まれる数を返す
    var target = text;
    if(text.indexOf('#') !== -1){
        return text.split('#').length-1;
    } else {
        return -1;
    }
}

function headerLastNum(headerList){//最後尾ヘッダーのネスト数を返す
    return headerList[headerList.length-1].split(".").length-1;
}
