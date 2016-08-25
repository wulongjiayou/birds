(function(w) {
  function Text(obj){
        this.ctx=obj.ctx;
        this.cvs=obj.cvs;
        this.time=obj.time;
        this.x=obj.x;
        this.y=obj.y;
        this.font=obj.font;
        this.color=obj.color;
        this.align=obj.align;
        this.baseline=obj.baseline;
  };
    Text.prototype={
        constructor:Text,
        draw:function() {
            this.ctx.save();
            this.ctx.font=this.font;
            this.ctx.fillStyle=this.color;
            this.ctx.textAlign=this.align;
            this.ctx.textBaseline=this.baseline;
            this.ctx.fillText(this.text, this.x,this.y);
            this.ctx.restore();
        }

    };
    w.Text=Text;
} (window));