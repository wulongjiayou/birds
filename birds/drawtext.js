(function(w){
    function Drawtext(obj){
        Text.call(this,obj)
    };
    Drawtext.prototype=Object.create(Text.prototype);
    unit.extend(Drawtext.prototype,{
        gettime:function() {
          var hourse=Math.floor(this.time/1000/3600);
            var minutes=Math.floor(this.time/1000%3600/60);
            var seconds=Math.floor(this.time/1000%60);
            this.text='你已经玩了'+hourse+'小时'+minutes+'分钟'+seconds+'秒';
        },
        gettext:function() {
          this.gettime();
          this.draw();
        }
    });

    w.Drawtext=Drawtext;
}(window));