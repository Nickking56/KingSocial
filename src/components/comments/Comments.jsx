import { useContext } from 'react';
import './comments.scss'
import { AuthContext } from '../../context/authContext';

const Comments = () => {

    const {currentUser} = useContext(AuthContext);
    //temp
    const comments = [
        {
          id: 1,
          desc: "very pretty",
          name: "Jane Smith",
          userId: 1,
          profilePic:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "no way thats real",
          name: "Jake Peralta",
          userId: 2,
          profilePic:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="comment here" />
            <button>Send</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments