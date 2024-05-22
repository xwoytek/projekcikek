import "./main.css";
import logo from "./img/logos/Trikea_Logistics.png";
import logocargo from "./img/logos/Trikea_Cargo.png";
import logorailways from "./img/logos/Trikea_Railways.png";
import linkedin from "./img/socials/linkedinlogo.png";
import twitter from "./img/socials/twitterlogo.png";
import insta from "./img/socials/instalogo.png";
import yt from "./img/socials/ytlogo.png";
import vid from "./img/trikearailwaysvid.mp4";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Datadost() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date.toISOString().split("T")[0];
}
function Main() {
  const [formData, setFormData] = useState({
    maxDystans: "",
    dataDostawy: "",
    wagaPrzesylki: "",
    rodzajTowaru: "",
    stopienDelikatnosci: "",
    punktTrikea: "",
    budzet: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      maxDystans,
      dataDostawy,
      wagaPrzesylki,
      rodzajTowaru,
      budzet,
      stopienDelikatnosci,
    } = formData;

    const today = new Date();
    const deliveryDate = new Date(dataDostawy);
    const differenceInTime = deliveryDate.getTime() - today.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    let transportType = "";

   
    if (
      maxDystans <= 3000 &&
      differenceInDays >= 7 &&
      wagaPrzesylki <= 18 &&
      budzet > 0.9 * wagaPrzesylki
    ) {
      transportType = "Trikea Logistics - transport samochodowy";
    } else if (
      maxDystans <= 10000 &&
      differenceInDays >= 14 &&
      wagaPrzesylki <= 1000 &&
      rodzajTowaru !== "delikatne" &&
      stopienDelikatnosci !== "delikatne" &&
      stopienDelikatnosci !== "bardzo-delikatne" &&
      budzet > 1.25 * wagaPrzesylki
    ) {
      transportType = "Trikea Railways - transport kolejowy";
    } else if (
      maxDystans > 10000 &&
      differenceInDays >= 30 &&
      wagaPrzesylki < 120 &&
      rodzajTowaru !== "latwopalne" &&
      rodzajTowaru !== "delikatne" &&
      stopienDelikatnosci !== "bardzo-delikatne" &&
      stopienDelikatnosci !== "delikatne" &&
      stopienDelikatnosci !== "srednio-delikatne" &&
      budzet > 3.5 * wagaPrzesylki
    ) {
      transportType = "Trikea Cargo - transport lotniczy";
    } else {
      transportType = "Brak odpowiedniego transportu według kryteriów";
    }

    setResult(transportType);
    setSubmitted(true);
  };
  return (
    <div className="bg">
      <div className="h1">
        <div className="butdivcarlog">
          <NavLink to="/cargo">
            <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">
                <img src={logocargo} className="logolog"></img>
                <div className="butlogtext">Trikea Cargo</div>
              </span>
            </button>
          </NavLink>
        </div>
        <div className="logodivlog">
          <NavLink to="/">
            <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">
                <img src={logo} className="logolog"></img>
                <div className="butlogtext">Trikea Logistics</div>
              </span>
            </button>
          </NavLink>
        </div>
        <div className="butdivraillog">
          <NavLink to="/railways">
            <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">
                <img src={logorailways} className="logolog"></img>
                <div className="butlogtext">Trikea Railways</div>
              </span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="maincontent">
        <div className="vidmain">
          <video autoPlay muted loop>
            <source src={vid}></source>
          </video>
        </div>
        <div className="corpotekst">
          <h1>
            Trikea Railways oferuje kompleksowe rozwiązania logistyczne z
            wykorzystaniem transportu kolejowego. Naszym głównym celem jest
            dostarczanie niezawodnych, szybkich i ekonomicznych usług, które
            wspierają rozwój naszych partnerów biznesowych. W Trikea Railways
            kładziemy duży nacisk na innowacje oraz nowoczesne technologie, aby
            zapewnić najwyższy standard obsługi.
          </h1>
          <div className="przerwa"></div>
          <h2>
            Naszą misją jest świadczenie efektywnych i bezpiecznych usług
            logistycznych za pomocą nowoczesnych pociągów towarowych. Dążymy do
            tego, aby być liderem w branży logistycznej, oferując usługi o
            najwyższej jakości i budując zaufanie naszych klientów.
          </h2>
          <div className="przerwa"></div>
          <h3>
            Posiadamy nowoczesny tabor kolejowy oraz zespół wykwalifikowanych
            specjalistów, którzy dbają o każdy szczegół realizowanych zleceń.
            Nasze zasoby pozwalają nam na elastyczne dostosowywanie się do
            zmieniających się wymagań rynku oraz na terminowe i skuteczne
            dostarczanie towarów. W Trikea Railways wierzymy, że nasza pasja do
            logistyki oraz zaangażowanie w doskonałość pomagają naszym klientom
            osiągać ich cele biznesowe.
          </h3>
        </div>
        <div className="questions">
          <div className="q">
            Chcesz wiedzieć jaki jest idealny transport dla ciebie wypełnij
            formularz to się dowiesz!
          </div>
          <div className="q">
            <div className="qqs">
              1. Jaki jest maksymalny dystans, na jaki przesyłka ma być
              dostarczona?
            </div>
            <form>
              <label>Ilość km:</label>
              <input
                type="number"
                name="maxDystans"
                min="1"
                max="20000"
                value={formData.maxDystans}
                onChange={handleDataChange}
              />
            </form>
          </div>
          <div className="q">
            <div className="qqs">
              2. Jaka jest najpóźniejsza akceptowalna data dostawy przesyłki?
            </div>
            <form>
              <label>Data: </label>
              <input
                type="date"
                name="dataDostawy"
                value={formData.dataDostawy}
                onChange={handleDataChange}
                min={Datadost()}
              />
            </form>
          </div>
          <div className="q">
            <div className="qqs">3. Jaka jest całkowita waga przesyłki?</div>
            <form>
              <label>Ilość Ton: </label>
              <input
                type="number"
                name="wagaPrzesylki"
                min="1"
                value={formData.wagaPrzesylki}
                onChange={handleDataChange}
              />
            </form>
          </div>
          <div className="q">
            <div className="qqs">
              4. Jaki jest typ i charakterystyka przesyłki?
            </div>
            <form>
              <label>Rodzaj Towaru: </label>
              <select
                name="rodzajTowaru"
                value={formData.rodzajTowaru}
                onChange={handleDataChange}
              >
                <option value=""></option>
                <option value="latwopalne">Towary łatwopalne</option>
                <option value="plyn">Płynne</option>
                <option value="proszek">Proszkowe</option>
                <option value="stale">Ciała stałe</option>
                <option value="gaz">Gazy</option>
                <option value="delikatne">Delikatne</option>
                <option value="inne">Inne</option>
              </select>
            </form>
          </div>
          <div className="q">
            <div className="qqs">
              5. Jaki stopień delikatności ma przesyłka?
            </div>
            <form>
              <label>Stopień: </label>
              <select
                name="stopienDelikatnosci"
                value={formData.stopienDelikatnosci}
                onChange={handleDataChange}
              >
                <option value=""></option>
                <option value="bardzo-delikatne">Bardzo delikatne</option>
                <option value="delikatne">Delikatne</option>
                <option value="srednio-delikatne">Średnio delikatne</option>
                <option value="nie-delikatne">Nie delikatne</option>
              </select>
            </form>
          </div>
          <div className="q">
            <div className="qqs">6. Wybierz najbliższy punkt Trikea</div>
            <label>Wybierz punkt Trikea:</label>
            <select
              name="punktTrikea"
              value={formData.punktTrikea}
              onChange={handleDataChange}
            >
              <option value=""></option>
              <option value="adres1">
                Międzyborska 64/70, 04-010 Warszawa
              </option>
              <option value="adres2">Motorowa 1, 04-035 Warszawa</option>
              <option value="adres3">Jarocińska 1, 04-171 Warszawa</option>
              <option value="adres4">Dęblińska 2, 04-187 Warszawa</option>
              <option value="adres5">Grochowska 357, 03-822 Warszawa</option>
              <option value="adres6">1 Maja 139, 32-332 Bukowno</option>
              <option value="adres7">
                Hamngatan 37, 111 53 Stockholm, Szwecja
              </option>
            </select>
          </div>
          <div className="q">
            <div className="qqs">
              7. Jaki jest przewidziany budżet na transport tej przesyłki?
            </div>
            <form>
              <label>Budżet: </label>
              <input
                type="number"
                name="budzet"
                min="1000"
                value={formData.budzet}
                onChange={handleDataChange}
              />
              <label> €</label>
            </form>
          </div>
          <form className="q" onSubmit={handleSubmit}>
            <button type="submit">Wyślij</button>
            {submitted && <div>{result}</div>}
          </form>
        </div>
      </div>

      <div className="f1">
        <div className="f1company">
          <div className="f1logodiv">
            <img src={logo} className="f1logo"></img>
          </div>
          <div className="f1comptext">
            <div>Trikea Logistics S.A.</div>
            <div>Odział centralny Trikea Logistics</div>
            <div>Międzyborska 64/70, 04-010 Warszawa</div>
          </div>
        </div>
        <div className="f1contact">
          <div className="f1contacts">
            <div className="f1contactdiv">
              <NavLink to="/contact">
                <button class="button-82-pushable" role="button">
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">Kontakt</span>
                </button>
              </NavLink>
            </div>
            <div className="f1applydiv">
              <NavLink to="/apply">
                <button class="button-82-pushable" role="button">
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">Dołącz do nas</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="f1social">
          <div className="linkedindiv">
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnk60XMocRBNUB6zwtTNohNGn0uxBV8V_UBP_yW14Pg&s">
              <button>
                <img src={linkedin}></img>
              </button>
            </a>
          </div>
          <div className="twitterdiv">
            <a href="https://x.com/xxwoytek">
              <button>
                <img src={twitter}></img>
              </button>
            </a>
          </div>
          <div className="instadiv">
            <a href="https://www.instagram.com/emkacz_photo/">
              <button>
                <img src={insta}></img>
              </button>
            </a>
          </div>
          <div className="ytdiv">
            <a href="https://www.youtube.com/channel/UCBH2Rz5GXfkQOzt8EIUeM9A">
              <button>
                <img src={yt}></img>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
