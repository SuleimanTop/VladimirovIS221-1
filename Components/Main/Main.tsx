import Input from "../Input/Input";
import News  from "/Components/News/News.jsx";
import { useState } from 'react';

export default function Main(params) {
    const [inputValue,setInputValue] = useState('')
    const [PostState, setPostsState] = useState([
    {nickName: 'Example 1',
      work:'Product Designer, slothUI',
      urlAva:"../News/Avatars/AvatarFirst.png",
      urlBack:"../News/Backgrounds/FrameOne.png",  
      id:1, desc:'Habitant morbi tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra. Dolor morbi non arcu risus quis varius. #amazing #great #lifetime #uiux #machinelearning'
    },
    
    {nickName: 'Example 2',
      work:'Product Designer, slothUI',
      urlAva:"../News/Avatars/AvatarSecond.png",
      urlBack:"",  
      id:2, desc:'Habitant morbi tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra. Dolor morbi non arcu risus quis varius. #amazing #great #lifetime #uiux #machinelearning'
    },
    
    {nickName: 'Example 3',
    work:'Product Designer, slothUI',
    urlAva:"../News/Avatars/AvatarThird.png",
    urlBack:"../News/Backgrounds/FrameTwo.png",  
    id:3, desc:'Habitant morbi tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra. Dolor morbi non arcu risus quis varius. #amazing #great #lifetime #uiux #machinelearning'
    },
    
    {nickName: 'Example 4',
    work:'Product Designer, slothUI',
    urlAva:"../News/Avatars/AvatarFour.png",
    urlBack:"",  
    id:4, desc:'Which drink do you think is the better summer drink, and why? #quickquestion #plsanswer'
    }
      ]
        )

        const addNewPost = (e) => {
          e.preventDefault()

          const newPost =  {
            nickName: 'X_AE_C-921',
            work:'Without work/Homeless',
            urlAva:"../ProfilesPictures/Photos/MainAva.png",
            // urlBack:"../News/Backgrounds/FrameTwo.png",  
            id:Date.now(), 
            desc: inputValue
            }

            setPostsState([...PostState, newPost])
            setInputValue('')
        }

    return (
        <main className="main">
        <div className="Switch">
          <button className="switchTitleFor">For You</button>
          <button className="switchTitleFollow">Profile</button>
        </div>
          <div>
          <Input
          Value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          />
            {/* <input className="inputMain" type="text" placeholder="What’s on your mind right now?" /> */}
                <div>
                <img className="scretch" src="../assets/scretch.png" alt="" />
                <img className="smile" src="../assets/smile.png" alt="" />
                <button onClick={addNewPost} className="post_button"><div className="textPost">Post</div> <img src="../assets/post.png" alt="" /></button>
                </div>
          </div>
   
        {PostState.map(el =>
          <News key={el.id} PostState={{...el}} />
          )}
  
      </main>
    )
};
