import "./Stylings/Snackbar.css";
import { forwardRef, useState, useImperativeHandle } from "react";

// Define Snackbar component using forwardRef to allow parent components to directly invoke its functions
const Snackbar = forwardRef(({ data }, ref) => {
  // State to manage visibility of the Snackbar
  const [toggleSnackbar, setToggleSnackbar] = useState(false);

  // Expose the 'show' method to parent components via ref
  useImperativeHandle(ref, () => ({
    show() {
      setToggleSnackbar(true); // Open the Snackbar
    },
  }));

  return (
    // Render the Snackbar section
    <section
      className="snackbar"
      id={toggleSnackbar ? "show" : "hidden"}
      onAnimationEnd={() => {
        setToggleSnackbar(false);
      }}
    >
      {localStorage.getItem("practice-stats") && (
        <>
          <span>wpm</span>
          <span>time</span>
          <span>typos</span>
          <span>{data.wpm}</span>
          <span>{data.time}s</span>
          <span>{data.mistakes}</span>
        </>
      )}
    </section>
  );
});

export default Snackbar;
