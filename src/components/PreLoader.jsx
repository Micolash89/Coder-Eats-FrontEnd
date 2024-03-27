import { useEffect, useState } from "react";
import "../css/preLoader.css";
import Error from "./Error";
import { END_POINTS } from "./EndPoints.Constantes";
function PreLoader() {
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(0);
  let cont = 0;

  function fetchRetry() {
    fetch(`${END_POINTS.DEV}/api/users`)
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
    fetch(`${END_POINTS.DEV}/api/users`)
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

  useEffect(() => {
    setTimeout(() => {
      loading < 100 && !display ? setLoading(loading + 1) : "";
    }, 600);
  }, [loading]);

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
      <div className="numb">{loading}%</div>
      {error && <Error />}
    </div>
  );
}

export default PreLoader;
