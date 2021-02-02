import * as Componet from "..";

export const RequestGoogleForm = () => {
  return (
    <div className="container-fluid">
      <Componet.Navbar />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxiZyWBapHYvb7cKaN3kTA7QV8A7GrqwK0yWaA46gTqWKAZw/viewform?embedded=true" width="640" height="922" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
    </div>
  );
};
