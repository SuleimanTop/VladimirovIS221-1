export default function Profile() {
    return (
        <div className="Profile">
          <div className="own">
            <img className="logoBlock" src="../ProfilesPictures/Photos/MainAva.png" alt="" />
            <div className="titleOfPerson">X_AE_C-921</div>
            <div className="idOfPerson">@xtheobliterator</div>
            <div className="placeOfPerson">Osaka, Japan  🎌 </div>
          </div>

          <div className="stats">
            <button className="buttonStat">548 <br/>Posts</button>
            <button className="buttonStat">12.7k <br/>Followers</button>
            <button className="buttonStat">221 <br/>Following</button>
          </div>

          <div className="AboutMe">
            <strong className="aboutMeTitle">About Me</strong>

            <div className="aboutMeDesc">Hi there! 👋 I'm X-AE-A-19, an AI enthusiast and<br/> fitness aficionado. When I'm not crunching <br/>numbers or optimizing algorithms, you can find <br/>me hitting the gym.</div>

            <button className="aboutMeBtn">Read More</button>
          </div>
        </div>

    )
};
