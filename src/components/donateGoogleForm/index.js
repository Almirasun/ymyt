import * as Componet from "../../components";
import './index.css'

export const DonateGoogleForm = () => {
  return (
    <div className="container-fluid App">
      <Componet.Navbar />
      <div className="google-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdt_GJcaBqtiS8pZlRLrQy2ncFxR_J5XLS9KPi-yzwPbK9X5w/viewform?embedded=true"
          width="640"
          height="1150"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Загрузка…
        </iframe>
      </div>
      <Componet.Footer />
    </div>
  );
};
