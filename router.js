const express = require('express');
const usercontroller = require("./controllers/Usercontroller");
const router = express.Router()
const postcontroller = require('./controllers/postscontroller');

router.post('/user',usercontroller.store)
router.get('/users',usercontroller.index)
router.get('/user/:id',usercontroller.show)
router.patch('/user/:id',usercontroller.update)
router.delete('/user/:id',usercontroller.deleteuser)



router.post('/post',postcontroller.store)
router.get('/posts',postcontroller.index)




module.exports = router