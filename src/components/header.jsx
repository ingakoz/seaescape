import context from "react-bootstrap/esm/AccordionContext";

export const Header = (props) => {
  let content = {
    English: {
      block1: "Sea Escape Yacht Charter",
      block2: "Your Unforgettable Journey Awaits!",
    },
    Polski: {
      block1: "Sea Escape Yacht Charter",
      block2: "Twoja niezapomniana podróż czeka!",
    },
    Deutsch: {
      block1: "Sea Escape Yacht Charter",
      block2: "Your Unforgettable Journey Awaits!",
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
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {content.block1}
                  <span></span>
                </h1>
                <p>{content.block2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
