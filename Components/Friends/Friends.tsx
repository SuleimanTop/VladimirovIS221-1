import Friend from "./Friend"

export default function Friends() {
    const arr = [
        {name: 'Julia Smith', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar.png", id:1},
        {name: 'Vermillon Gray', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (1).png", id:2},
        {name: 'Mai Senpai', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (2).png", id:3},
        {name: 'Saylor D. Twift', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (3).png", id:4},
        {name: 'Azunyan U. Wu', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (4).png", id:5},
        {name: 'Oarack Babama', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (5).png", id:6}
      ]

    return (
        <div className="Friends">
            <div className="titleFriends"><strong>Friends</strong></div>

            <div className="FriendsContainer">
              {arr.map(el =>
                  <Friend key={el.id}
                    options={{
                      name:el.name,
                      supText:el.supText,
                      url:el.url
                    }}
                  />
              )}
            </div>
          </div>
    )
};
