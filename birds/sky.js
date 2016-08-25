(function(w) {
//        创建天空类
    function Sky(x,y){
        if(!Sky.isinit){
            throw"请先初始化"
        }
        this.x=x;
        this.y=y;
        this.speed=-4;

    };
    //初始化数据
    Sky.init=function (ctx,cvs,img){
        if(ctx&&cvs&&img){
            Sky.isinit=true;
        }
        Sky.ctx=ctx;
        Sky.cvs=cvs;
        Sky.img=img;
        Sky.imgwidth=img.width;

    };
    //创建原型的方法
    Sky.prototype={
        constructor:Sky,
        draw:function() {
            Sky.ctx.drawImage(Sky.img,this.x,this.y)
        },
        //更新数据
        upadate:function(){
            this.x +=this.speed;
            if(this.x<=-Sky.imgwidth){
                this.x+=Sky.imgwidth*2;
            }
        }
    };


    w.Sky=Sky;
}(window) );
