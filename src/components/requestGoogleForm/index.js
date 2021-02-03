import * as Componet from "..";
import "./index.css";

export const RequestGoogleForm = () => {
  return (
    <div className="container-fluid App">
      <Componet.Navbar />
      <div className="container google-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScxiZyWBapHYvb7cKaN3kTA7QV8A7GrqwK0yWaA46gTqWKAZw/viewform?embedded=true"
          width="640"
          height="1000"
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
