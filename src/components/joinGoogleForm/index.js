import * as Componet from "..";
import "./index.css";

export const JoinGoogleForm = () => {
  return (
    <div className="container-fluid App">
      <Componet.Navbar />
      <div className="container google-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfTLRZ01Tn4MHuAt7PuVYC5baRQrjNjxBL_H2WlgOCHM22Fbw/viewform?embedded=true"
          width="640"
          height="1150"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Загрузка…
        </iframe>
        <Componet.Footer />
      </div>
    </div>
  );
};
