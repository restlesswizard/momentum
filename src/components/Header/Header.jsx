import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="player">
        <div className="player-controls">
          <button className="play-prev player-icon"></button>
          <button className="play player-icon"></button>
          <button className="play-next player-icon"></button>
        </div>
        <ul className="play-list"></ul>
      </div>
      <div className="weather">
        <input type="text" className="city" />
        <i className="weather-icon owf"></i>
        <div className="weather-error"></div>
        <div className="description-container">
          <span className="temperature"></span>
          <span className="weather-description"></span>
        </div>
        <div className="wind"></div>
        <div className="humidity"></div>
      </div>
    </header>
  );
};
