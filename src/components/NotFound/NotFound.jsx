
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="back">
    <div className="container vh-100  d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
    </section>
  );
};

export default NotFound;
