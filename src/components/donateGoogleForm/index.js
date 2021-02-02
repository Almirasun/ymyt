import * as Componet from "../../components";

export const DonateGoogleForm = () => {
  return (
    <div className="container-fluid">
      <Componet.Navbar />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdt_GJcaBqtiS8pZlRLrQy2ncFxR_J5XLS9KPi-yzwPbK9X5w/viewform?embedded=true"
        width="640"
        height="920"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Загрузка…
      </iframe>
    </div>
  );
};
