import Request from "./Request"

export default function Requests() {
    const arr = [
        {name:'Example1', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar.png", id:1},
        {name:'Example2' , supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (3).png", id:2},
        {name:'Example3' , supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (4).png", id:3},
        {name:'Example4' , supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (1).png", id:4},
        {name:'Example5', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (2).png", id:5},
        {name:'Вильдан', supText:'Supporting Text', url:"../ProfilesPictures/FriendsContainer/Avatar (5).png", id:6}
      ]

    return (
        <div className="Friends">
            <div className="titleFriends"><strong>Requests</strong></div>

            <div className="FriendsContainer">
              {arr.map(el =>
                  <Request key={el.id}
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
