import "./Footer.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      {/* 0  - 1*/}
      <Box>
        <Box>
          <address className="addressDecahf mt-3">
            <div>
              <strong>Desarrollado por:</strong>
            </div>
            <div>
              <span>Gerencia de Gestión y Servicios Ferroviarios</span>
            </div>
            <div>
              <span>SubGerencia de Tecnologías y Sistemas de Información</span>
            </div>
          </address>
        </Box>
        <Box>
          <section className="fondo-argentina mt-3 p-3">
            <div className="container">
              <div className="d-flex justify-content-between p-3">
                <Link to="/">
                  <Box>
                    <img
                      src="../LOGO-TRENES-ARGENTINOS-CAPITAL-HUMANO-BLANCO.png"
                      title="Trenes Argentinos Capital Humano"
                      alt="Trenes Argentinos Capital Humano"
                      className="footer-logoTrenes"
                    />
                  </Box>
                </Link>
                <Link to="/">
                  <Box className="fondo-argentina">
                    <img
                      src="../logo-ministerio-blanco.png"
                      title="Ministerio de Transporte"
                      alt="Ministerio de Transporte"
                      className="footer-logo"
                    />
                  </Box>
                </Link>
              </div>
              <div></div>
            </div>
          </section>
        </Box>
      </Box>

      {/* <hr /> */}

      {/* 2 */}
      {/* <Box>
        <footer className="footerClass2 fondo-argentina">
          <div>
            <div className="footerClass fondo-argentina">
              <Box className="addressClass">
                <div>
                  <span>Desarrollado por: </span>
                </div>
                <div>
                  <span>Gerencia de Gestión y Servicios Ferroviarios</span>
                </div>
                <div>
                  <span>
                    SubGerencia de Tecnologías y Sistemas de Información
                  </span>
                </div>
              </Box>
            </div>
          </div>

          <div className="container">
            <div className="d-flex justify-content-between p-4">
              <Link to="/">
                <Box>
                  <img
                    src="../LOGO-TRENES-ARGENTINOS-CAPITAL-HUMANO-BLANCO.png"
                    title="Trenes Argentinos Capital Humano"
                    alt="Trenes Argentinos Capital Humano"
                    className="footer-logoTrenes"
                  />
                </Box>
              </Link>
              <Link to="/">
                <Box className="fondo-argentina">
                  <img
                    src="../logo-ministerio-blanco.png"
                    title="Ministerio de Transporte"
                    alt="Ministerio de Transporte"
                    className="footer-logo"
                  />
                </Box>
              </Link>
            </div>
          </div>
        </footer>
      </Box>

      <hr /> */}

      {/* 3 */}
      {/* <Box>
        <section className="fondo-argentina">
          <div className="container">
            <div className="d-flex justify-content-between p-4 footer-logo">
              <Link to="/">
                <Box>
                  <img
                    src="../LOGO-TRENES-ARGENTINOS-CAPITAL-HUMANO-BLANCO.png"
                    title="Trenes Argentinos Capital Humano"
                    alt="Trenes Argentinos Capital Humano"
                    className="footer-logoTrenes"
                  />
                </Box>
              </Link>

              <Link to="/">
                <Box className="fondo-argentina">
                  <img
                    src="../logo-ministerio-blanco.png"
                    title="Ministerio de Transporte"
                    alt="Ministerio de Transporte"
                    className="footer-logo"
                  />
                </Box>
              </Link>
            </div>

            <div>
              <div className="footerClass fondo-argentina">
                <Box className="addressClass mb-3">
                  <div>
                    <hr />
                    <span>Desarrollado por: </span>
                  </div>
                  <div>
                    <span>Gerencia de Gestión y Servicios Ferroviarios</span>
                  </div>
                  <div>
                    <span>
                      SubGerencia de Tecnologías y Sistemas de Información
                    </span>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </section>
      </Box> */}

      {/* <hr /> */}

      {/* 4 */}
      {/* <Box>
        <footer className="footerClass fondo-argentina">
          <address className="addressClass">
            <div>
            <span>Desarrollado por: </span>
            </div>
            <div>
              <span>Gerencia de Gestión y Servicios Ferroviarios</span>
            </div>
            <div>
              <span>SubGerencia de Tecnologías y Sistemas de Información</span>
            </div>
            <hr />
          </address>
          <Box position="static" className="footerClass fondo-argentina">
            <Link to="/">
              <Box className="footerLogo">
                <img
                  src="../LOGO-TRENES-ARGENTINOS-CAPITAL-HUMANO-BLANCO.png"
                  title="Trenes Argentinos Capital Humano"
                  alt="Trenes Argentinos Capital Humano"
                  className="footer-logoTrenes"
                />
              </Box>
              <Box className="p-3"></Box>
              <Box className="fondo-argentina mb-2">
                <img
                  src="../logo-ministerio-blanco.png"
                  title="Ministerio de Transporte"
                  alt="Ministerio de Transporte"
                />
              </Box>
            </Link>
          </Box>
        </footer>
      </Box> */}
    </Box>
  );
};
export default Footer;
