const Uuid = require("uuid");
const posts = require("koa");

const uuid = new Uuid.v4();

let createPost =(obj)=> {

    let post = {
        name : obj.name,
        description : obj.description,
        id : uuid.v4(),
        date : new Date()
    };
    //posts.set(post.id,post);
    posts.set(post.id,post);

    return post;
};

let getPosts = ()=>{
    return[...posts.values()];
};

let getPost = (id)=>{
    return post.get(id);
};

module.exports = {
    createPost,
    getPosts,
    getPost
};
