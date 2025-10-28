
function getUser(userId , callBack){
    setTimeout(()=>{
        console.log("Fetchied User From DataBase....");
        callBack({id: userId , name: "Ayush"});
    } , 2000);
}

function getPost(user , callBack){
    setTimeout(()=>{
        console.log("Fetched Post for user: " , user.name);
        callBack([
            {id: 1 , title : "Post 1" , author: user.name},
            {id:2 , title : "Post 2" , author: user.name}
        ]);   
    },2000);
}


function getComment(post , callBack){
    setTimeout(()=>{
        console.log("Fetched comments for post: ", post.title);
        callBack([
            {id:1 , content: " Great Post!" , postId: post.id},
            {id:2 , content: " Thanks for Sharing!" , postId: post.id}
        ]);
    },2000);
}

// CallBack hell example  nested callbacks = pyramid structure and difficult to read

getUser(1 , (user)=>{
    getPost(user , (post)=>{
        getComment(post[0],(comments)=>{
            console.log("Fetched comments: ", comments);
            
        });
    });
});