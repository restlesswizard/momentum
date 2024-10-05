import { Time } from "./Time/Time";

export const Main = () => {
  return (
    <main className="main">
      <div className="slider-icons">
        <button className="slide-prev slider-icon"></button>
        <button className="slide-next slider-icon"></button>
      </div>

      <Time />
      
      <div className="greeting-container">
        <span className="greeting"></span>
        <input type="text" className="name" />
      </div>
    </main>
  );
};
