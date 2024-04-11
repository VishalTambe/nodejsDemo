const express=require('express');
const routes=require('./routes/routes');

//const hostname='localhost';
const port=8090
const router = express.Router();
// const skillServer=http.createServer(function(request,response){
// response.writeHead(200,{'Conent-Type':'text/plain'});
// response.write("Hello Vishal !");
// response.end();
// });


// skillServer.listen(port,hostname);       

const app = express();
app.use(express.json());
app.use('/',router);

routes(router);

 
router.post('/addEmployee',function(req,res) {
    console.log("POST start");
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.end("POST method success: "+empName);
    console.log("POST END");

} );

app.listen(port,() =>
console.log("Listning on port: "+port));

