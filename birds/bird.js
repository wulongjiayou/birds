(function(window){
    function Bird(x,y,w,h) {
        if(!Bird.isnit){
            throw"请先初始化";
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.speed=1;
        this.fram=0;
        this.speedplus=0.1;
    } ;
    //初始化
    Bird.init=function(ctx,cvs,img) {
        if(cvs&&ctx&&img){
            Bird.isnit=true;
        }
        Bird.ctx=ctx;
        Bird.cvs=cvs;
        Bird.img=img;
        Bird.imgwidth=img.width/3;
        Bird.imgheight=img.height;
    };
//        给小鸟原型添加方法
    unit.extend(Bird.prototype,{

        draw:function() {
            //保存当前状态h
            Bird.ctx.save();
            //获得旋转的中心点
            var birdCoreX=this.x + this.w / 2;
            var birdCoreY=this.y + this.h/ 2;
//                console.log(birdCoreY);
            //小鸟移动到中心点
            Bird.ctx.translate(birdCoreX,birdCoreY);
            //约定一个角度
            var anglar=this.speed*10;
            anglar=anglar>35? 35:anglar;
            Bird.ctx.rotate(unit.anglarhu(anglar));
            //绘制小鸟
            Bird.ctx.drawImage(Bird.img,Bird.imgwidth*this.fram,0,Bird.imgwidth,
                Bird.imgheight,-this.w/2,-this.h/2,this.w,this.h);
            //回滚当前的状态
            Bird.ctx.restore();
        },
        //更新数据
        upadate:function() {
            this.fram = ++this.fram>2? 0 : this.fram;
            this.y += this.speed;
            this.speed += this.speedplus;
        },
        blind:function() {
            var self=this;
            //给画布添加点击事件
            Bird.cvs.addEventListener("click",function() {
                self.speed=-2.5;
            } );
        }
    });
    window.Bird=Bird;
}(window));