export function Navigation(props) {
  let content = {
    English: {
      block1: "About Us",
      block2: "Fleet",
      block3: "Offer",
      block4: "Gallery",
      block5: "Contact",
      block6: "About_Us",
    },
    Polski: {
      block1: "O nas",
      block2: "Flota",
      block3: "Oferta",
      block4: "Galeria",
      block5: "Kontakt",
      block6: "O_Nas",
    },
  };

  // function remove_hash_from_url() {
  //   var uri = window.location.toString();

  //   if (uri.indexOf("#") > 0) {
  //     var clean_uri = uri.replace("#", "");
  //     window.history.replaceState({}, document.title, clean_uri);
  //   }
  // }

  var category = "";

  // function clearUrl() {
  //   var uri = window.location.toString();
  //   var n = uri.lastIndexOf("/");

  //   category = uri.substring(n + 1, uri.length);

  //   if (category.length >= 0) {
  //     var cleared_url = uri.substring(0, n);
  //     console.log(cleared_url);
  //     window.history.replaceState({}, document.title, cleared_url);
  //   }
  // }

  props.language === "Polski"
    ? (content = content.Polski)
    : (content = content.English);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     remove_hash_from_url();
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      role="navigation"
    >
      <div className="container contain-nav">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand navbar-logo page-scroll" href="#page-top">
            <img
              src="img/sea2.png"
              className="img-responsive nav-logo"
              alt="logo"
            />{" "}
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#aboutus" className="page-scroll">
                {content.block1}
              </a>
            </li>
            <li>
              <a href="#offer" className="page-scroll">
                {content.block3}
              </a>
            </li>
            <li>
              <a href="#fleet" className="page-scroll">
                {content.block2}
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll">
                {content.block4}
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                {content.block5}
              </a>
            </li>
            <li>
              <div className="selector">
                <select
                  className="custom-select"
                  value={props.language}
                  onChange={(e) => props.handleSetLanguage(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Polski">Polski</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
