import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext";
import { Blurhash } from "react-blurhash";

const SingleRestaurant = () => {
  const { activeRest, setActive } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setActive(null);
    navigate("/");
  };

  return (
    <section>
      <button onClick={() => handleClick()}>Go back</button>
      {!activeRest ? (
        <div>There is no restaurant like the one you were looking for</div>
      ) : (
        <div>
          <div style={{ maxWidth: "480px" }}>
            {/*<Blurhash*/}
            {/*  hash={activeRest.blurhash}*/}
            {/*  width={"100%"}*/}
            {/*  height={Math.floor((480 / 16) * 9)}*/}
            {/*  resolutionX={32}*/}
            {/*  resolutionY={32}*/}
            {/*  punch={1}*/}
            {/*/>*/}
          </div>
          <h2>{activeRest.name}</h2>
          <p>{activeRest.online ? "online" : "offline"}</p>
          <p>Opened since {activeRest.launch_date}</p>
          <p>
            situated {activeRest.location[0]} & {activeRest.location[1]}
          </p>
          <p>popularity {activeRest.popularity}</p>
        </div>
      )}
    </section>
  );
};

export default SingleRestaurant;
