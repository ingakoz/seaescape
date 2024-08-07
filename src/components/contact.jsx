import { Form } from "./form/form";

export const Contact = (props) => {
  let content = {
    English: {
      block1: "Contact us",
      block2: "Address",
      block3: "Marina Lav",
      block4: "Grljevačka ul. 2a, 21312, Podstrana, Croatia",
      block5: "Phone number",
      block6: "+48 600 889 968",
      block7: "Email address",
      block8: "info@seaescape.io",
    },
    Polski: {
      block1: "Kontakt",
      block2: "Adres",
      block3: "Marina Lav",
      block4: "Grljevačka 2a, 21312, Podstrana, Chorwacja",
      block5: "Telefon kontaktowy",
      block6: "+48 600 889 968",
      block7: "Email",
      block8: "info@seaescape.io",
    },
    Deutsch: {
      block1: "Kontakt",
      block2: "Adres",
      block3: "Marina Lav",
      block4: "Grljevačka 2a, 21312, Podstrana, Chorwacja",
      block5: "Telefon kontaktowy",
      block6: "+48 600 889 968",
      block7: "Email",
      block8: "info@seaescape.io",
    },
  };

  if (props.language === "Polski") {
    content = content.Polski
  }
  else if (props.language === "Deutsch") {
    content = content.Deutsch
  }
  else {
    content = content.English
  }


  return (
    <div>
      <div id="contact">
        <div className="container kontakt-box">
          <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <div className="section-title">
                <h2>{content.block1}</h2>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> {content.block2}
                    </span>
                    {content.block3} <br />
                    {content.block4}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> {content.block5}
                    </span>{" "}
                    {content.block6}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> {content.block7}
                    </span>{" "}
                    <a href={content.block8} className="mail-click">
                      {" "}
                      {content.block8}
                    </a>
                  </p>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61558228761709">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/sea_escape_yachtcharter/">
                        <i class="fa fa-instagram insta"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
            <Form props={props} />
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Sea Escape Yacht Charter
            <a href="https://github.com/ingakoz" rel="nofollow">
              {" "}
              ikoz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
