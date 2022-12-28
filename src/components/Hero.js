import "./HeroStyles.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <img alt="HeroImg" src="http"/>
        <div className="hero-text">
            <h1>The Journey Your Story</h1>
            <p>Chose Your Fafourite Destination.</p>
            <a href="/">
                Travel Plan
            </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
