import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Drop.css";
import Card from "../Card/Card";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Drop() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(1);
  const [paisesPerPage] = useState(20);
  const indexLast = page * paisesPerPage;
  const indexFirst = indexLast - paisesPerPage;
  const currentPaises = paises.slice(indexFirst, indexLast);

  console.log("paises", paises);
  let flag = true;

  function details(e) {
    e.preventDefault();
    if (show === true) {
      setShow(false);
    }
    if (show === false) {
      setShow(true);
    }
  }

  // function nextPage() {
  //   setPage(page + 1);
  //   console.log("page", page);
  // }

  useEffect(() => {
    getData();
  }, [flag, page]);

  async function getData() {
    await axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setPaises(res.data));
  }

  function change(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  
  if (input) {
    var aux = paises.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log("aux", aux);
  }

  function addCard(e) {
    e.preventDefault();
    let bus = { name: input };
    paises.push(bus);
    alert("Agregado");
  }

  return (
    <div className="challenge-container">
      <div className="input-container">
        <input
          name="input"
          onChange={change}
          placeholder="Ingresa tu busqueda"
        />
        <button type="submit" name="details" id="details" onClick={details}>
          D
        </button>
      </div>
      <div className="before-card-container">
        {!input ? (
          <div className="tuGerente">
            <h3>Challenge tuGerente</h3>
          </div>
        ) : aux.length ? (
          aux.map((el) => {
            return (
              <div className="card-container">
                {/* <InfiniteScroll
                  dataLength={aux.length}
                  hasMore={true}
                  next={nextPage}
                > */}
                  <Card
                    hidden={show}
                    key={el.id}
                    name={el.name}
                    population={el.population}
                    nativeName={el.nativeName}
                    region={el.region}
                    flag={el.flag}
                  />
                {/* </InfiniteScroll> */}
              </div>
            );
          })
        ) : (
          <div className="card-container">
            <Card name={input} onClick={addCard} />
            <input type="submit" onClick={addCard} value="Agregar" />
          </div>
        )}
      </div>
    </div>
  );
}
