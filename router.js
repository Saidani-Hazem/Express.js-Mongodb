const express = require("express");
const usercontroller = require("./controllers/Usercontroller");
const router = express.Router();
const postcontroller = require("./controllers/postscontroller");

router.route("/user").post(usercontroller.store).get(usercontroller.index);

router
  .route("/user/:id")
  .get(usercontroller.show)
  .patch(usercontroller.update)
  .delete(usercontroller.deleteuser);

router.route("/post").post(postcontroller.store).get(postcontroller.index);

router
  .route("/post/:id")
  .get(postcontroller.show)
  .delete(postcontroller.postdelete)
  .patch(postcontroller.update);

module.exports = router;
