import { Component } from "react";
import Lottie from "react-lottie";
import error from "./assets/76699-error.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: error,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div className="errorBoundary">
            <h1>Something went wrong....</h1>
            <div className="errorAnime">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
