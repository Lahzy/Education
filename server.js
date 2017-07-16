//import config, {nodeEnv, logStars} from './config';

//console.log(config,nodeEnv);
//logStars('test');
// import https from 'https';
//
// https.get('https://www.lynda.com', res=>{
//   console.log('Response Status Code: ', res.statusCode);
//
//   res.on('data', chunck=>{
//     console.log(chunck.toString());
//   });
// });
import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request', (req,res) => {
  res.write('hello http!\n');
  setTimeout(()=> {
    res.write('I can stream!\n');
    res.end();
  },3000);
})
