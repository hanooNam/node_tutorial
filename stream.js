const http=require('http');
const fs=require('fs');

var file = fs.createReadStream('prototype.html');
var newFile = fs.createWriteStream('new.html');
//file이 없으면 --upload-file "파일명" http://localhost:8080
http.createServer(function(req,res){ //req = readable & res = writeable
  res.writeHead(200);
  // file.pipe(newFile); 이렇게 하면 바로 정보를 넘길 수 있음
  // req.pipe(newFile); 이렇게 하면 파일을 따로 넣어줘야함
  file.pipe(newFile, {end:false});
  // pipe를 쓰면 그냥 서버가 끝나버리는데,
  // pipe에 두번째 파라미터로 {end: false}를 넣어주면 그게 안됨
  fs.readFile('new.html',function(err, content){
      res.write(content);
      res.end('<br>good job');
  });



}).listen(8080);

console.log('connected to 8080 port');
