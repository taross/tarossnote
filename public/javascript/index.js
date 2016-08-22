window.onload = function(){
    var editor = new Vue({
        el:"#editor",
        data:{
            text: "## markdownContent!"
        },
        filters:{
            marked:marked,
            head:function(src){
                srcArray = src.split("\n\n");

            }
        }
    });
}
