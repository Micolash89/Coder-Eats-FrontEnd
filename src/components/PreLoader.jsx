import { useEffect, useState } from "react";
import "../css/preLoader.css";
import Error from "./Error";

function PreLoader() {
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(false);
  let cont = 0;

  function fetchRetry() {
    fetch("https://codereats-backend-1.onrender.com/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplay(true);
      })
      .catch((err) => {
        if (cont < 12) {
          setTimeout(() => {
            fetchRetry();
            cont++;
          }, 10000);
          console.log(err);
        } else {
          setError(true);
        }
      });
  }

  useEffect(() => {
    fetch("https://codereats-backend-1.onrender.com/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplay(true);
      })
      .catch((err) => {
        fetchRetry();
        console.log(err);
      });
  }, []);

  return (
    <div
      className={`containerPreLoader ${display ? "ocultar" : ""} `}
      id="preloader"
    >
      <div className="text">
        <span>Cargando...</span>
      </div>
      <div className="loading">
        <div className="line-box">
          <div className="line"></div>
        </div>
      </div>
      {error && <Error />}
    </div>
  );
}

export default PreLoader;
