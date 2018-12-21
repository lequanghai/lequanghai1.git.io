var Emitter = require("./emitter")
var emitter = new Emitter();
emitter.on("bad",function(){
    console.log("mot mon nao do bi diem kem !!!");
});
emitter.on("bad",function(){
    console.log("da co diem kem, can phat thong bao toi phu huynh !!!");
});
// co bang diem
var scores = [10,4];
for(var s of scores){
    if(s<5){
        console.log("diem thap qua", s);
        emitter.emit("bad");
    }
}
