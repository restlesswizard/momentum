export const Main = () => {
  return (
    <main className="main">
      <div className="slider-icons">
        <button className="slide-prev slider-icon"></button>
        <button className="slide-next slider-icon"></button>
      </div>
      <time className="time"></time>
      <date className="date"></date>
      <div className="greeting-container">
        <span className="greeting"></span>
        <input type="text" className="name" />
      </div>
    </main>
  );
};
