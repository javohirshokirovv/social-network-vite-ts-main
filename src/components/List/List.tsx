import { Heading } from "../Index";
import { listData } from "./data"; 
import ListItem from "./ListItem";
import MusicItem from "./MusicItem";

const { subscribes, music, closeFriends } = listData; 

interface ListProps {
  listType: "subscribes" | "music" | "closeFriends";
}

const List = ({ listType }: ListProps) => {
  const renderList = () => {
    let items;
    let title;

    switch (listType) {
      case "subscribes":
        items = subscribes;
        title = "Подписки";
        break;
      case "closeFriends":
        items = closeFriends;
        title = "Близкие друзья";
        break;
      case "music":
        items = music;
        title = "Music";
        break;
      default:
        return null;
    }

    return (
      <div className="List">
        <div className="List__title">
          <Heading variant={"h2"} text={title} />
          <span className="count">{items ? items.length : ""}</span>
        </div>
        {items &&
          items.map((elem, index) =>
            listType === "music" ? (
              <MusicItem
                key={index}
                imgUrl={elem.imgUrl}
                alt={elem.alt}
                mainText={elem.mainText}
                secondaryText={elem.secondaryText}
              />
            ) : (
              <ListItem
                key={index}
                imgUrl={elem.imgUrl}
                alt={elem.alt}
                mainText={elem.mainText}
                secondaryText={elem.secondaryText}
                badgeNumber={elem.badgeNumber}
              />
            )
          )}
      </div>
    );
  };

  return renderList();
};

export default List;
