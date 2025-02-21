export default function Request({options}) {
    return (
            <div className="FriendEl">
                <div className="FriendImage"><img src={options.url} alt="" /></div>

                <div className="FriendsStats">
                    <div className="friendName">{options.name}</div>
                    <div className="friendDesc">{options.supText}</div>
                </div>
                <div className="IconTrashBox"><img src="../News/Icons/ThumbsUp.png" alt="" /></div>
                <div className="IconTrashBox"><img src="../ProfilesPictures/Icons/trashBox.png" alt="" /></div>
            </div>
    )
};
