const controller = require('../controllers/controller');
module.exports=function(router){
    router.get('/',controller.getDefault);
    router.get('/aboutus',controller.aboutUs);
    router.post('/addEmployee',controller.addEmployee);
    router.get('/getEmployee',controller.getEmployee);
    router.put('/updateEmployee',controller.updateEmployee);

};