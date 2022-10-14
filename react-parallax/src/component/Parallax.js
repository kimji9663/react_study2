import { useEffect, useState } from "react";
import item1 from "../images/item1.webp";
import item2 from "../images/item2.png";

export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper wrapper1">
        <div className="inner">
          <p
            className="desc"
            style={{
              opacity: `${1 - position/100}`,
            }}
          >
            완전히 새로운
          </p>
          <h1
            className="desc2"
            style={{
              opacity: `${1 - position/200}`, transform: `matrix(${1 + position/1000}, 0, 0, ${1 + position/1000}, 0, 0)`,
            }}
          >
            AirPods Pro
          </h1>
        </div>
      </div>

      <div className="wrapper wrapper2">
        <div
          className="bg bg1"
          style={{
            backgroundPositionY: -position / 20,
          }}
        >
          <div
            style={{
              background: `rgb(0 0, 0, ${position/50})`,
              color: `rgb(234, 234, 234, ${0 + position/50})`, 
              transform: `matrix(${1 + position/2000}, 0, 0, ${1 + position/2000}, 0, 0)`,
            }}
          >
            듣는 다는 것을 다시 생각하다
          </div>
        </div>
        <div
          className="bg bg2"
          style={{
            backgroundPositionY: -position / 10,
          }}
        >
          <div>Happy New Year</div>
        </div>
        
        <p
          className="desc3"
          style={{
            opacity: `${0 + position/2000}`, transform: `matrix(${1 + position/2000}, 0, 0, ${1 + position/2000}, 0, 0)`,
          }}
        >
          듣는 다는 것을 다시 생각하다
        </p>
        {/* <p
          className="desc3"
          style={{
            opacity: (position - 700) / 50,
          }}
        >
          Duis aute irure dolor
        </p> */}
        <p
          className="desc3"
          style={{
            opacity: (position - 960) / 50,
          }}
        >
          Excepteur sint occaecat
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 1090) / 50,
          }}
        >
          sunt in culpa qui officia deserunt
        </p>
        <img
          src={item1}
          className="item"
          alt=""
          style={{
            transform: `translateY(${position / 2}px)`,
          }}
        />
        <img
          src={item2}
          className="item item_snow"
          alt=""
          style={{
            transform: `translateY(${position / 4}px)`,
          }}
        />
      </div>
    </>
  );
}