import "./main.css";
import logo from "./img/logos/Trikea_Logistics.png";
import logocargo from "./img/logos/Trikea_Cargo.png";
import logorailways from "./img/logos/Trikea_Railways.png";
import linkedin from "./img/socials/linkedinlogo.png";
import twitter from "./img/socials/twitterlogo.png";
import insta from "./img/socials/instalogo.png";
import yt from "./img/socials/ytlogo.png";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Datadost() {
  const date = new Date();
  date.setDate(date.getDate());
  return date.toISOString().split("T")[0];
}

function Apply() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    city: "",
    street: "",
    house_number: "",
    apartament_number: "",
    education: "",
    qualifications: "",
    expirience: "",
    workstart: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const isDateAtLeast10YearsAgo = (inputDate) => {
    const today = new Date();
    const tenYearsAgo = new Date(
      today.getFullYear() - 10,
      today.getMonth(),
      today.getDate()
    );

    if (new Date(inputDate) < tenYearsAgo) {
      return true;
    } else {
      return false;
    }
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
        <div>
          <div className="cnt1">Dołącz do nas</div>
          <div>
            <div className="cnt">
              <label>Imię i Nazwisko* : </label>
              <input
                value={formData.full_name}
                type="text"
                name="full_name"
                onChange={handleInputChange}
                className="imieinazwisko"
              ></input>
            </div>
            <div className="cnt">
              <label>Numer Telefonu* : </label>
              <input
                value={formData.phone_number}
                type="number"
                name="phone_number"
                onChange={handleInputChange}
                className="nrtel"
              ></input>
            </div>
            <div className="cnt">
              <label>Email* : </label>
              <input
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                type="email"
                className="email"
              ></input>
            </div>
            <div className="cnt">
              <label>Miasto* : </label>
              <input
                value={formData.city}
                onChange={handleInputChange}
                type="text"
                name="city"
                className="miasto"
              ></input>
            </div>
            <div className="cnt">
              <label>Ulica* : </label>
              <input
                value={formData.street}
                onChange={handleInputChange}
                type="text"
                name="street"
                className="ulica"
              ></input>
            </div>
            <div className="cnt">
              <label>Numer Budynku* : </label>
              <input
                value={formData.house_number}
                onChange={handleInputChange}
                type="number"
                name="house_number"
                className="nrbud"
              ></input>
            </div>
            <div className="cnt">
              <label>Numer Lokalu : </label>
              <input
                value={formData.apartament_number}
                onChange={handleInputChange}
                type="number"
                name="apartament_number"
                className="nrbud"
              ></input>
            </div>
            <div className="cnt">
              <label>Wykształcenie* : </label>
              <input
                value={formData.education}
                onChange={handleInputChange}
                type="text"
                name="education"
                className="msg"
              ></input>
            </div>
            <div className="cnt">
              <label>Kwalifikacje zawodowe* : </label>
              <input
                value={formData.qualifications}
                onChange={handleInputChange}
                type="text"
                name="qualifications"
                className="msg"
              ></input>
            </div>
            <div className="cnt">
              <label>Dotychczasowe zatrudnienie* : </label>
              <input
                value={formData.expirience}
                onChange={handleInputChange}
                type="text"
                name="expirience"
                className="msg"
              ></input>
            </div>
            <div className="cnt">
              <label>Początek Kariery* : </label>
              <input
                value={formData.workstart}
                onChange={handleInputChange}
                type="date"
                name="workstart"
                className="msg"
                max={Datadost()}
              ></input>
            </div>
            <div className="cnt">
              <button
                onClick={() => {
                  let alertDisplayed = false;

                  const isQualified = isDateAtLeast10YearsAgo(
                    formData.workstart
                  );

                  if (isQualified && !alertDisplayed) {
                    alert(
                      "Brawo przeszedłeś wstępną kwalifikację, ktoś z firmy się z tobą skontaktuje"
                    );
                    alertDisplayed = true;
                  } else if (!isQualified && !alertDisplayed) {
                    alert(
                      "Przykro nam bardzo, ale pan nie przeszedł kwalifikacji wstępnej"
                    );
                    alertDisplayed = true;
                  }
                }}
              >
                Wyślij
              </button>
            </div>
          </div>
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

export default Apply;
