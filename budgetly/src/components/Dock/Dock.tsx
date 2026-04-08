import { useLocation, useNavigate } from "react-router-dom";

const Dock = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dock dock-bottom bg-base-100">
      <button
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <span className="dock-label">Dashboard</span>
      </button>

      <button
        className={location.pathname === "/create" ? "active" : ""}
        onClick={() => navigate("/create")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="dock-label">New Payment</span>
      </button>

      <button
        className={location.pathname === "/success" ? "active" : ""}
        onClick={() => navigate("/success")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M9.75 17.25a.75.75 0 0 1-.53-1.28l4.5-4.5a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 1 1-1.06 1.06l-1.72-1.72-3.97 3.97a.75.75 0 0 1-.53.22Z" />
          <path d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5Z" />
        </svg>
        <span className="dock-label">Success</span>
      </button>
    </div>
  );
};

export default Dock;
