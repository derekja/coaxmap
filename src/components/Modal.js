import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FunderLogo = props => (
  <a href={props.url} target="_blank" rel="noopener noreferrer">
    <img className="logo" src={props.path} alt={props.alt} />
  </a>
);

const LogoList = [
  {
    url: "https://www.uvic.ca/socialsciences/geography/index.php",
    path: "/p3aqua/images/uvic_logo_white.png",
    alt: "Logo for University of Victoria"
  },
  {
    url: "http://meopar.ca/",
    path: "/p3aqua/images/meopar_logo_white.png",
    alt: "Logo for MEOPAR"
  },

  {
    url: "http://www.oceannetworks.ca/",
    path: "/p3aqua/images/onc_logo.png",
    alt: "Logo for Ocean Network Canada"
  },

  {
    url: "https://www.hakai.org/",
    path: "/p3aqua/images/hakai_logo.png",
    alt: "Logo for Hakai Institute"
  },

  {
    url: "https://www.psf.ca/",
    path: "/p3aqua/images/psf_logo.png",
    alt: "Logo for Pacific Salmon Foundation"
  }
];

const IntroModal = props => (
  <Modal isOpen={props.show} toggle={props.toggle} className={props.className}>
    <ModalHeader toggle={props.toggle}>Algae Explorer</ModalHeader>
    <ModalBody>
      <p>
        Welcome to P3Aqua - Preserve, Predict, and Protect our oceans! This is V0.1 of the Earth Data Store based Ocean application, built by the University of Victoria Mod Squad in collaboration with:
      </p>
      <div className="logos">
        {LogoList.map((logo, index) => (
          <FunderLogo
            url={logo.url}
            path={logo.path}
            alt={logo.alt}
            key={index}
          />
        ))}
      </div>
      <p>
        Special thanks to the European Space Agency for providing the data which
        makes this project possible.
      </p>
      <div className="esa">
        <a
          href="https://www.esa.int/ESA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/p3aqua/images/eesa_logo_white.png"
            alt="Logo for European Space Agency"
          />
        </a>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={props.toggle}>
        View Map
      </Button>{" "}
    </ModalFooter>
  </Modal>
);

export default IntroModal;
