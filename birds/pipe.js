(function(w) {
    function Pipe(x){
        if(!Pipe.isinit){
            throw"请先初始化";
        }
        this.x=x;
        this.speed=-2;
        this.pipecreat();
    };
    Pipe.init=function(ctx,cvs,Dimg,UPimg) {
        if(ctx&&cvs&&Dimg&&UPimg){
            Pipe.isinit=true;
        }
        Pipe.ctx=ctx;
        Pipe.cvs=cvs;
        Pipe.Dimg=Dimg;
        Pipe.UPimg=UPimg;
        Pipe.UPimgwidth=UPimg.width;
        Pipe.UPimgheight=UPimg.height;

    };


    Pipe.prototype={
        construct:Pipe,
        draw:function() {
            Pipe.ctx.drawImage(Pipe.Dimg,this.x,this.DimgY);
            Pipe.ctx.rect(this.x,this.DimgY,Pipe.UPimgwidth,Pipe.UPimgheight);
            Pipe.ctx.drawImage(Pipe.UPimg,this.x, this.UPimgY);
            Pipe.ctx.rect(this.x,this.UPimgY,Pipe.UPimgwidth,Pipe.UPimgheight);
        },
        pipecreat:function() {
            this.viewidth=Math.random()*200+100;
            this.DimgY=this.viewidth-Pipe.Dimg.height;
            this.UPimgY=this.viewidth+100;
        } ,
        update:function() {
          this.x += this.speed;
            if(this.x <= -Pipe.UPimgwidth){
                this.pipecreat();
                this.x +=Pipe.UPimgwidth*3*6;
            }
        }
    };

    w.Pipe=Pipe;
} (window));
