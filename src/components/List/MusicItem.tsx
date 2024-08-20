interface IMusicItemProps {
    imgUrl: string;
    mainText: string;
    secondaryText: string;
    isActive: boolean;
    alt: string;
  }
  
  const MusicItem = ({
    imgUrl,
    mainText,
    secondaryText,
    isActive,
    alt,
  }: IMusicItemProps) => {
    return (
      <div className="MusicElem">
        <img src={imgUrl} alt={alt} />
        <div className="music_description">
          <p className="main_text">{mainText}</p>
          <p className="secondary_text">{secondaryText}</p>
        </div>
        <div className={`plus-button ${isActive ? "_active" : ""}`}></div>
      </div>
    );
  };
  
  export default MusicItem;
 