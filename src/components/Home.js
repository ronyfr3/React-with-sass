import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my website</h1>
      <div className="home__content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <img src="logo192.png" alt="react-logo" />
        <button>see more</button>
      </div>
    </div>
  );
};

export default Home;
