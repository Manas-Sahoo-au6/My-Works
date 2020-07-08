var express = require('express');
var router = express.Router();
var {getBlogs,createBlog,updateBlog,deleteBlog} = require('../../controllers/apiControllers/blogApiControllers');
var authenticate = require('../../middlewares/authenticate');

router.get('/blogs', getBlogs);
router.post('/blog/create', authenticate, createBlog);
router.put('/blog/update/:blogId', authenticate, updateBlog);
router.delete('/blog/delete/:blogId', authenticate, deleteBlog);

module.exports = router;