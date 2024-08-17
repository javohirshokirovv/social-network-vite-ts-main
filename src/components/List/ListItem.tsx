interface IListItemProps{
    imgUrl: string;
    alt: string;
    mainText: string;
    secondaryText: string;
    badgeNumber: number | null;
    isOnline?: boolean;
}

const ListItem = ({alt, badgeNumber, imgUrl, secondaryText, mainText, isOnline}: IListItemProps) =>{
    return(
        <div className="UserElem">
        <img src={imgUrl} alt={alt} />
        <div className="user__description">
          <p className="main__text">{mainText}</p>
          <p className="secondary__text">{secondaryText}</p>
        </div>
        <span className={`${badgeNumber !==null ? "Badge": ""}`}>{badgeNumber}</span>
      </div>
    );
};

export default ListItem;