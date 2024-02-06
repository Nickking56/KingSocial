import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {

    //Temp
    const posts = [
        {
            id: 1, 
            name: "NPC", 
            userId: 1, 
            profilePic: 
            "https://images.pexels.com/photos/14549193/pexels-photo-14549193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            desc: "Look at this cool view",
            img:"https://images.pexels.com/photos/14549193/pexels-photo-14549193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2, 
            name: "NPC", 
            userId: 2, 
            profilePic: 
            "https://images.pexels.com/photos/14549193/pexels-photo-14549193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            desc: "Look at this cool view",
            img:"https://images.pexels.com/photos/14549193/pexels-photo-14549193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        
    ];

    return <div className="posts">
        {posts.map(post=>(
            <div className="post">
                <Post post = {post} key={post.id}/>
            </div>
        ))}
    </div>;
    
}

export default Posts