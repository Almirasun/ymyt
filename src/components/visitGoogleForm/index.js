import * as Componet from "..";
import './index.css'

export const VisitGoogleForm = () => {
  return (
    <div className="container-fluid App">
      <Componet.Navbar />
      <div className="google-form">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOmvxLZNcGyK6GBhC9ZJUl0SKlm-z5P4TsFEnAcyNvAhlH6g/viewform?embedded=true" width="640" height="1300" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
      </div>
      <Componet.Footer />
    </div>
  );
};
