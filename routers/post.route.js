const Router = require('@koa/router');

const {createPost,getPosts,getPost} = require('../api/posts.api');

const router = new Router({
    prefix :'/posts'
});
router.get('/',ctx=>{
    const id = ctx.params.id;
    ctx.body = getPost(id);
});

router.post('/',ctx=>{
    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;

    ctx.body = post;
});
module.exports = router;