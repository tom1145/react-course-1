import React from "react";
import Popup from "reactjs-popup";
import cs from "classnames";
import "reactjs-popup/dist/index.css";

import s from "./style.module.scss";

import { ReactComponent as CloseIcon } from "./assets/close-icon.svg";

function Modal({ ...rest }) {
  const overlayStyle = { width: "auto", height: "auto" };

  return (
    <Popup className="" {...rest} {...{ overlayStyle }}>
      {(close) => (
        <div className="d-flex flex-column justify-content-center p-2 card">
          <div className="d-flex flex-row justify-content-end px-2">
            <button type="button" onClick={close}>
              <CloseIcon />
            </button>
          </div>
          <div className={cs(s.awarnessBox, "w-50")}>
            <span>The 50% rule is inactive</span>
          </div>
          <div className="text-center">
            To activate the 50% RULE and get a bigger commission, you must have
            investments from at least two (2) lines of the selected period of
            time.
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Modal();
