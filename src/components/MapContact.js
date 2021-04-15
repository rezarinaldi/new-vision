import React from "react";

export default function MapContact() {
  return (
    <div className="row pb-5">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="440"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6583279811575!2d112.01753171415483!3d-7.8259402798974556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78570c41482ed3%3A0x28d15518ff2f1282!2sJl.%20Singonegaran%20Tengah%2C%20Jamsaren%2C%20Kec.%20Pesantren%2C%20Kediri%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1618460610167!5m2!1sid!2sid"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
