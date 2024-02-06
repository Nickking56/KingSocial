import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import "./stories.scss"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    //TEMP
    const stories = [
        {
            id: 1,
            name: "NPC", 
            img: "https://images.pexels.com/photos/14284443/pexels-photo-14284443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }, 
        {
            id: 2,
            name: "NPC", 
            img: "https://images.pexels.com/photos/14284443/pexels-photo-14284443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            name: "NPC", 
            img: "https://images.pexels.com/photos/14284443/pexels-photo-14284443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 4,
            name: "NPC", 
            img: "https://images.pexels.com/photos/14284443/pexels-photo-14284443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ];
    return (
        <div className="stories">
             <div className="story">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories