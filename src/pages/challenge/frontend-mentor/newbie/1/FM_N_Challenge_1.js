import Measure from "react-measure";
import QRCode from "qrcode.react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./FM_N_Challenge_1.module.scss";

// Name             : QR code component
// Level            : Newbie
// From             : https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H
// Description      : Recently, I found a website about frontend from a friend.
//                    I explored it and found it interesting and decide to take all challenges.
//                    I try it from easiest level to the hardest. After it accomplish maybe I take the most recent.
//
//                    I try to attempt this and smoothly. I decide to attempt it with flex.
//                    Generate QR with qrcode.react then use react-measure to control height from a width of qr wrapper that will be usefull when the size of width screen changing.
//
//                    This challenge is pretty easily from me but everything it's about a journey.
// Created Date     : 08/03/2022
// Last Update Date : 08/03/2022

const FM_N_Challenge_1 = () => {
  // QR
  const [QR_WRAPPER_WIDTH, setQrWrapperWidth] = useState();
  return (
    <Container className={styles.container} fluid={true}>
      <div className={styles.card}>
        <Measure
          bounds
          onResize={(contentRect) => {
            setQrWrapperWidth(contentRect.bounds.width);
          }}
        >
          {({ measureRef }) => (
            <div
              className={styles.qr}
              ref={measureRef}
              style={{ height: QR_WRAPPER_WIDTH }}
            >
              <QRCode
                bgColor="transparent"
                fgColor="#ffffff"
                renderAs="svg"
                value="Hello world!"
              />
            </div>
          )}
        </Measure>
        <div className={styles.title}>
          Improve your front-end skills by building projects
        </div>
        <div className={styles.desc}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </Container>
  );
};

export default FM_N_Challenge_1;
