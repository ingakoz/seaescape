import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserGroup,
  faArrowsLeftRight,
  faArrowsUpDown,
  faCalendar,
  faBed,
  faDoorOpen,
  faToilet,
  faGasPump,
  faGlassWaterDroplet,
  faCouch,
  faDollarSign,
  faIdCard,
  faMoon,
  faWalkieTalkie,
  faMoneyBillTransfer,
  faReceipt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserGroup,
  faArrowsLeftRight,
  faArrowsUpDown,
  faCalendar,
  faBed,
  faDoorOpen,
  faToilet,
  faGasPump,
  faGlassWaterDroplet,
  faCouch,
  faDollarSign,
  faIdCard,
  faMoon,
  faWalkieTalkie,
  faReceipt,
  faCheck
);

export const CranchiModal = (props) => {

  let content = {
    English: {
      block1: "Amenities",
      block2: "Draught",
      block3: "Length",
      block4: "People",
      block5: "Cabins",
      block6: "Berths",
      block7: "Year of production",
      block8: "Toilets",
      block9: "Beds",
      block10: "Beam",
      block11: "Engine",
      block12: "Fuel tank",
      block13: "Water tank",
      block14: "Navigation and safety",
      block15: "Saloon and cabins",
      block16: "Entertainment",
      block17: "Autopilot?",
      block18: "Outside GPS plotter",
      block19: "Bow thruster",
      block20: "Generator",
      block21: "Bimini",
      block22: "Dinghy",
      block23: "Radar",
      block24: "Teak on board",
      block25: "Flybridge",
      block26: "AC?",
      block27: "Coffee machine",
      block28: "Outside shower",
      block29: "Cooker",
      block30: "Refrigerator",
      block31: "Heating",
      block32: "Kitchen utensils",
      block33: "Oven",
      block34: "Pillows and blankets",
      block35: "Shower",
      block36: "Sink",
      block37: "Washing machine",
      block38: "Bathing platform",
      block39: "Outside deck speakers",
      block40: "Flat screen TV",
      block41: "Inside cockpit speakers",
      block42: "Audio speakers",
      block43: "Sun pads",
      block44: "Microwave",
      block45: "Fridge",
      block46: "Overview",
      block47: "Double cabin",
      block48: "Upper deck bed",
      block49: "Request availability",
      block50: "Towels",
      block51: "Pricing",
      block52: "From 600€ / daily charter",
      block53: "Services & Extras",
      block54: "Daily skipper",
      block55: "Overnight skipper",
      block56: "Dinghy engine",
      block57: "Additional fees",
      block58: "To be paid at yacht pick-up",
      block59: "Refundable security deposit",
      block60:
        "Required at yacht pick-up and returned upon returning the yacht with no damage",
      block61: "Turist tax",
      block62: "Required license",
      block63: "Standard sailing licence",
      block64: "VHF license",
      block65: "daily",
      block66: "per person per day",
    },
    Polski: {
      block1: "Udogodnienia",
      block2: "Zanurzenie",
      block3: "Długość",
      block4: "Max osób",
      block5: "Kabiny",
      block6: "Koje",
      block7: "Rok produkcji",
      block8: "Toalety",
      block9: "Łóżka",
      block10: "Szerokość",
      block11: "Silnik",
      block12: "Zbiornik paliwa",
      block13: "Zbiornik wody",
      block14: "Nawigacja i bezpieczeństwo",
      block15: "Salon i kabiny",
      block16: "Rozrywka",
      block17: "Autopilot",
      block18: "Zewnętrzny ploter map",
      block19: "Ster strumieniowy",
      block20: "Generator",
      block21: "Bimini",
      block22: "Ponton",
      block23: "Radar",
      block24: "Teak na pokładzie",
      block25: "Flybridge",
      block26: "AC?",
      block27: "Ekspres do kawy",
      block28: "Prysznic zewnętrzny",
      block29: "Kuchenka",
      block30: "Zamrażarka",
      block31: "Ogrzewanie",
      block32: "Sprzęt kuchenny",
      block33: "Piekarnik",
      block34: "Poduszki i koce",
      block35: "Prysznic",
      block36: "Zlew",
      block37: "Pralka",
      block38: "Platforma kąpielowa",
      block39: "Głośniki zewnętrzne",
      block40: "TV z płaskim ekranem",
      block41: "Głośniki wewnętrzne",
      block42: "System audio",
      block43: "Materace do opalania",
      block44: "Kuchenka mikrofalowa",
      block45: "Lodówka",
      block46: "Podstawowe informacje",
      block47: "Kabina dwuosobowa",
      block48: "Łóżko rozkładane na górnym pokładzie",
      block49: "Sprawdź dostępność",
      block50: "Ręczniki",
      block51: "Cena",
      block52: "Już od 600€ / dzień",
      block53: "Usługi dodatkowe",
      block54: "Skipper (dzień)",
      block55: "Skipper (dzień + noc)",
      block56: "Silnik do pontonu",
      block57: "Opłaty dodatkowe",
      block58: "Płatne przy odbiorze jachtu",
      block59: "Depozyt zwrotny",
      block60:
        "Wymagany przy odbiorze jachtu i zwracany po zwróceniu jachtu bez uszkodzeń",
      block61: "Podatek turystyczny",
      block62: "Wymagana licencja",
      block63: "Standardowy patent sternika motorowodnego",
      block64: "Licencja radiooperatora SRC VHF",
      block65: "dzień",
      block66: "osoba / dzień",
    },
  };

  props.language === "Polski"
    ? (content = content.Polski)
    : (content = content.English);

  return (
    <div id="cranchimodal">
      <div
        id="madinah-carousel"
        class="carousel slide"
        data-ride="carousel"
        style={{ marginBottom: "3rem" }}
      >
        <ol class="carousel-indicators">
          <li
            data-target="#madinah-carousel"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#madinah-carousel" data-slide-to="1"></li>
          <li data-target="#madinah-carousel" data-slide-to="2"></li>
          <li data-target="#madinah-carousel" data-slide-to="3"></li>
          <li data-target="#madinah-carousel" data-slide-to="4"></li>
          <li data-target="#madinah-carousel" data-slide-to="5"></li>
          <li data-target="#madinah-carousel" data-slide-to="6"></li>
          <li data-target="#madinah-carousel" data-slide-to="7"></li>
          <li data-target="#madinah-carousel" data-slide-to="8"></li>
          <li data-target="#madinah-carousel" data-slide-to="9"></li>
        </ol>

        <div
          class="carousel-inner"
          role="listbox"
          style={{ maxHeight: "520px" }}
        >
          <div class="item active">
            <img src="img/portfolio/cranchi_1.jpeg" alt="0" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_2.jpeg" alt="1" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_3.jpeg" alt="2" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_4.jpeg" alt="3" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_5.jpeg" alt="4" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_6.JPG" alt="5" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_7.JPG" alt="6" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_8.JPG" alt="7" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_10.jpg" alt="8" />
          </div>
          <div class="item">
            <img src="img/portfolio/cranchi_4.jpeg" alt="9" />
          </div>
        </div>

        <a
          class="left carousel-control"
          href="#madinah-carousel"
          role="button"
          data-slide="prev"
        >
          <span class="icon-prev" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#madinah-carousel"
          role="button"
          data-slide="next"
        >
          <span class="icon-next" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block46}</h4>
        <hr className="modal-separator" />
      </div>
      <div
        class="container"
        style={{
          fontSize: "15px",
          maxWidth: "70vw",
          marginLeft: "2rem",
          marginTop: "2.5rem",
        }}
      >
        <div
          class="row justify-content-md-center"
          style={{ marginBottom: "1.4rem" }}
        >
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faCalendar} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block7}</span>
            <span>2000</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            {" "}
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faArrowsUpDown} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block3}</span>
            <span>12m</span>
          </div>
        </div>
        <div
          class="row justify-content-md-center"
          style={{ marginBottom: "1.4rem" }}
        >
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faUserGroup} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block4}</span>
            <span>10</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            {" "}
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faBed} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block6}</span>
            <span>4 + 1</span>
          </div>
        </div>
        <div
          class="row justify-content-md-center"
          style={{ marginBottom: "1.4rem" }}
        >
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faDoorOpen} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block5}</span>
            <span>2</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            {" "}
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faToilet} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block8}</span>
            <span>2</span>
          </div>
        </div>
        <div
          class="row justify-content-md-center"
          style={{ marginBottom: "1.4rem" }}
        >
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faGasPump} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block11}</span>
            <span>2 x Volvo Penta 370hp</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            {" "}
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faArrowsLeftRight} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block10}</span>
            <span>3.87 m</span>
          </div>
        </div>
        <div
          class="row justify-content-md-center"
          style={{ marginBottom: "1.4rem" }}
        >
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faGlassWaterDroplet} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block13}</span>
            <span>350 l</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: "left" }}>
            {" "}
            <span style={{ marginRight: "1rem" }}>
              <FontAwesomeIcon className="my_icon" icon={faGasPump} />
            </span>
            <span style={{ marginRight: "2rem" }}>{content.block12}</span>
            <span>1050 l</span>
          </div>
        </div>
      </div>
      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block1}</h4>
        <hr className="modal-separator" />

        <div class="container" style={{ marginTop: "2.5rem" }}>
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3 col-md-3 col-lg-3 text-left">
              <h4 className="amenities-title">{content.block14}</h4>
              <ul>
                <li>{content.block18}</li>
                <li>{content.block19}</li>
                <li>{content.block20}</li>
                <li>{content.block21}</li>
                <li>{content.block22}</li>
                <li>{content.block23}</li>
                <li>{content.block24}</li>
                <li>{content.block25}</li>
              </ul>
            </div>
            <div class="col-12 col-sm-3 col-md-3 col-lg-3 text-left">
              <h4 className="amenities-title">{content.block15}</h4>{" "}
              <ul>
                <li>{content.block27}</li>
                <li>{content.block28}</li>
                <li>{content.block29}</li>
                <li>{content.block30}</li>
                <li>{content.block31}</li>
                <li>{content.block32}</li>
                <li>{content.block34}</li>
                <li>{content.block35}</li>
                <li>{content.block36}</li>
                <li>{content.block44}</li>
                <li>{content.block45}</li>
                <li>{content.block50}</li>
              </ul>{" "}
            </div>
            <div class="col-12 col-sm-3 col-md-3 col-lg-3  text-left">
              <h4 className="amenities-title">{content.block16}</h4>{" "}
              <ul>
                <li>{content.block32}</li>
                <li>{content.block38}</li>
                <li>{content.block39}</li>
                <li>{content.block40}</li>
                <li>{content.block41}</li>
                <li>{content.block42}</li>
                <li>{content.block43}</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block5}</h4>
        <hr className="modal-separator" />
        <div className="cabin-div">
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span className="cabin-num">2x</span>
              <FontAwesomeIcon className="bed_icon" icon={faBed} />

              <p>{content.block47}</p>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span className="cabin-num">1x</span>
              <FontAwesomeIcon className="bed_icon" icon={faCouch} />

              <p>{content.block48}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block51}</h4>
        <hr className="modal-separator" />
        <div
          className="cabin-div"
          style={{ marginTop: "4.5rem", marginBottom: "6rem" }}
        >
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span className="pricing">{content.block52}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block53}</h4>
        <hr className="modal-separator" />
        <div className="cabin-div" style={{ marginTop: "2rem" }}>
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon className="my_icon" icon={faIdCard} />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block54}</span>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span>100 € / {content.block65}</span>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span style={{ marginRight: "1.5rem" }}>
                <FontAwesomeIcon className="my_icon" icon={faMoon} />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block55}</span>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span>150 € / {content.block65}</span>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span style={{ marginRight: "1.5rem" }}>
                <FontAwesomeIcon className="my_icon" icon={faWalkieTalkie} />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block56}</span>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span>50 € / {content.block65}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block57}</h4>
        <hr className="modal-separator" />
        <div className="cabin-div" style={{ marginTop: "2rem" }}>
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon
                  className="my_icon"
                  icon={faMoneyBillTransfer}
                />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block59}</span>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 text-left">
              <span>1200 € / {content.block65}</span>
              <p style={{ marginRight: "2rem", fontSize: "10px" }}>
                {content.block60}
              </p>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 text-left">
              <span style={{ marginRight: "1.6rem" }}>
                <FontAwesomeIcon className="my_icon" icon={faReceipt} />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block61}</span>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 text-left">
              <span>1.49 € / {content.block66}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="amenities"
        style={{ textAlign: "left", marginTop: "4rem", marginLeft: "2rem" }}
      >
        <h4 style={{ marginBottom: "1px" }}>{content.block62}</h4>
        <hr className="modal-separator" />
        <div className="cabin-div" style={{ marginTop: "2rem" }}>
          <div class="row justify-content-md-center">
            <div class="col-8 col-sm-8 col-md-8 col-lg-8 text-left">
              <span style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon className="my_icon" icon={faCheck} />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block63}</span>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-8 col-sm-8 col-md-8 col-lg-8 text-left">
              <span style={{ marginRight: "1.6rem" }}>
                <FontAwesomeIcon className="my_icon" icon={faCheck} />
              </span>
              <span style={{ marginRight: "2rem" }}>{content.block64}</span>
            </div>
          </div>
        </div>
      </div>

      <hr
        className="modal-separator"
        style={{ marginTop: "2rem", marginLeft: "2rem", width: "88%" }}
      />
      <a href="mailto:info@seaescape.io" className="page-scroll">
        <button
          type="button"
          class="btn"
          id="btn-modal"
          data-toggle="modal"
          className="btn-in-modal"
          style={{ marginTop: "5rem" }}
        >
          {content.block49}
        </button>
      </a>
    </div>
  );
};
