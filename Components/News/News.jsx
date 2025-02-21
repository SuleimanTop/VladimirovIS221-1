export default function News({PostState}) {
    return (
        <div className="News">
          
        <div className="Post">
          <div className="Newstitle"> {/*Начало дива Тайтл*/}
            <img className="AvatarNewsPhoto" src={PostState.urlAva} alt="" />
            <div className="nickAndWork">
              <div className="nickname">{PostState.nickName}</div>
              <div className="workPlace">{PostState.work}</div>
            </div>
          </div> {/*Конец дива Тайтл*/}

          <div className="descNews">{PostState.desc}</div>

          <div className="NewsBackground">
            <img className="BackgroundPhotoNews" src={PostState.urlBack} alt="" />
          </div>

            <div className="NewsCommets">
              <div className="NewsCommet">  <img className="NewsIconPhoto" src="../News/Icons/ThumbsUp.png" alt="" /> <p>12K Likes</p> </div>
              <div className="NewsCommet">  <img className="NewsIconPhoto" src="../News/Icons/ChatDots.png" alt="" /> <p>25 Comments</p> </div>
              <div className="NewsCommet">  <img className="NewsIconPhoto" src="../News/Icons/Vector.png" alt="" /> <p>187 Share</p> </div>
            </div>
        </div>

      </div>
    )
}