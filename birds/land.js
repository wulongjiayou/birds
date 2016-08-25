(function(w) {
//        创建大地类
    function Land(x,y){
        if(!Land.isinit){
            throw"请先初始化"
        }
        this.x=x;
        this.y=y;
        this.speed=-3;

    };
    //初始化数据
    Land.init=function (ctx,cvs,img){
        if(ctx&&cvs&&img){
            Land.isinit=true;
        }
        Land.ctx=ctx;
        Land.cvs=cvs;
        Land.img=img;
        Land.imgwidth=img.width;
    };
    //创建原型的方法
    Land.prototype={
        constructor:Land,
        draw:function() {
            Land.ctx.drawImage(Land.img,this.x,this.y)
        },
//            更新数据
        upadate:function(){
            this.x +=this.speed;
            if(this.x<-Land.imgwidth){
                this.x +=Land.imgwidth*4;
            }
        }
    };


    w.Land=Land;
}(window) );