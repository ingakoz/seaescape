import { CranchiModal } from "./cranchi_modal";
import { SealineModal } from "./sealine_modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserGroup,
  faArrowsLeftRight,
  faCalendar,
  faBed,
  faDoorOpen,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserGroup,
  faArrowsLeftRight,
  faCalendar,
  faBed,
  faDoorOpen,
  faToilet
);

export const Features = (props) => {
  let content = {
    English: {
      block1: "Fleet",
      block2: "Choose a yacht that meets your needs best.",
      block3: "Length",
      block4: "People",
      block5: "Cabins",
      block6: "Berths",
      block7: "Year of production",
      block8: "Toilets",
      block9: "Beds",
      block11: "See more",
    },
    Polski: {
      block1: "Flota",
      block2: "Wybierz jacht najlepiej odpowiadający Twoim potrzebą.",
      block3: "Długość",
      block4: "Max osób",
      block5: "Kabiny",
      block6: "Koje",
      block7: "Rok produkcji",
      block8: "Toalety",
      block9: "Łóżka",
      block11: "Zobacz więcej",
    },
  };

  props.language === "Polski"
    ? (content = content.Polski)
    : (content = content.English);

  return (
    <div id="fleet" className="text-center" style={{ marginBottom: "6rem" }}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="fleet-title">{content.block1}</h2>
          <p className="fleet-content">{content.block2}</p>
        </div>
      </div>
      <div className="container-cards">
        <div>
          <div
            className="col-sm-12 col-md-12 col-lg-6 card"
            style={{
              width: "45rem",
              height: "63rem",
              border: "solid 1px",
              borderColor: "gray",
              margin: "3rem",
            }}
          >
            <img
              class="card-img-top"
              className="boat-card"
              src="./img/cranchi_full.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ marginBottom: "3rem", marginTop: "2rem" }}
              >
                Cranchi Atlantique 40 | DORIAN
              </h5>
              <div>
                <p
                  class="card-text"
                  style={{ margin: "2rem", textAlign: "center" }}
                >
                  <div>
                    <span style={{ marginRight: "1rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faCalendar} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block7}
                    </span>
                    <span>2000</span>

                    <span style={{ marginRight: "1rem", marginLeft: "5rem" }}>
                      <FontAwesomeIcon
                        className="my_icon"
                        icon={faArrowsLeftRight}
                      />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block3}
                    </span>
                    <span>12m</span>
                  </div>
                </p>
              </div>
              <hr className="separator" />
              <div>
                <p
                  class="card-text"
                  style={{ margin: "2rem", textAlign: "center" }}
                >
                  <div>
                    <span style={{ marginRight: "1rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faUserGroup} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block4}
                    </span>
                    <span>10</span>

                    <span style={{ marginRight: "1rem", marginLeft: "5rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faDoorOpen} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block5}
                    </span>
                    <span>2</span>
                  </div>
                  <hr className="separator" />
                </p>
              </div>
              <div>
                <p
                  class="card-text"
                  style={{ margin: "2rem", textAlign: "center" }}
                >
                  <div>
                    <span style={{ marginRight: "1rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faBed} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block9}
                    </span>
                    <span>4 + 1</span>

                    <span style={{ marginRight: "1rem", marginLeft: "5rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faToilet} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block8}
                    </span>
                    <span>2</span>
                  </div>
                </p>
              </div>
              <button
                type="button"
                class="btn"
                id="btn-modal"
                data-toggle="modal"
                style={{ marginTop: "1rem" }}
                data-target=".cranchi"
              >
                {content.block11}
              </button>

              <div
                class="modal fade cranchi"
                tabindex="-1"
                role="dialog"
                aria-labelledby="cranchi"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div
                    class="modal-content"
                    style={{ height: "90vh", padding: "2rem" }}
                  >
                    <CranchiModal language={props.language} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-12 col-lg-6 card"
            style={{
              width: "45rem",
              height: "63rem",
              border: "solid 1px",
              borderColor: "gray",
              margin: "3rem",
            }}
          >
            <img
              class="card-img-top"
              style={{ objectFit: "cover", maxHeight: "340px" }}
              className="boat-card"
              src="./img/seal.webp"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ marginBottom: "3rem", marginTop: "2rem" }}
              >
                Sealine 28 | Kristiano
              </h5>
              <div>
                <p
                  class="card-text"
                  style={{ margin: "2rem", textAlign: "center" }}
                >
                  <div>
                    <span style={{ marginRight: "1rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faCalendar} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block7}
                    </span>
                    <span>2004</span>

                    <span style={{ marginRight: "1rem", marginLeft: "5rem" }}>
                      <FontAwesomeIcon
                        className="my_icon"
                        icon={faArrowsLeftRight}
                      />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block3}
                    </span>
                    <span>9m</span>
                  </div>
                </p>
              </div>
              <hr className="separator" />
              <div>
                <p
                  class="card-text"
                  style={{ margin: "2rem", textAlign: "center" }}
                >
                  <div>
                    <span style={{ marginRight: "1rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faUserGroup} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block4}
                    </span>
                    <span>4</span>

                    <span style={{ marginRight: "1rem", marginLeft: "5rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faDoorOpen} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block5}
                    </span>
                    <span>1</span>
                  </div>
                  <hr className="separator" />
                </p>
              </div>
              <div>
                <p
                  class="card-text"
                  style={{ margin: "2rem", textAlign: "center" }}
                >
                  <div>
                    <span style={{ marginRight: "1rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faBed} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block9}
                    </span>
                    <span>2 + 2</span>

                    <span style={{ marginRight: "1rem", marginLeft: "5rem" }}>
                      <FontAwesomeIcon className="my_icon" icon={faToilet} />
                    </span>
                    <span style={{ marginRight: "2rem" }}>
                      {content.block8}
                    </span>
                    <span>1</span>
                  </div>
                </p>
                <button
                  type="button"
                  class="btn"
                  id="btn-modal"
                  data-toggle="modal"
                  style={{ marginTop: "1rem" }}
                  data-target=".sealine"
                >
                  {content.block11}
                </button>

                <div
                  class="modal fade sealine"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="sealine"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div
                      class="modal-content"
                      style={{ height: "90vh", padding: "2rem" }}
                    >
                      <SealineModal language={props.language} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
