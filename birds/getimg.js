(function(w) {
    //创建图片路径对象
    var imgpathobj={
        "birds":"./imgs/birds.png",
        "land":"./imgs/land.png",
        "pipeDown":"./imgs/pipeDown.png",
        "pipeUp":"./imgs/pipeUp.png",
        "sky":"./imgs/sky.png"
    };
    var imgObj={},img,total= 0,callback;

    for(var key in imgpathobj){
        img=new Image();
        img.src=imgpathobj[key];
        img.addEventListener("load",function() {
            total++;
            if(total>=5){
                callback(imgObj)
            }
        } );
        imgObj[key]=img;
    }
    w.getImg=function(fn) {
        callback=fn;
    }
} (window));