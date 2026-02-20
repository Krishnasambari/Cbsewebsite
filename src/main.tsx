import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage: string;
};

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, errorMessage: "" };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error) {
    console.error("Runtime error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
          <h1 style={{ marginBottom: "12px" }}>App crashed at runtime</h1>
          <p style={{ color: "#b00020" }}>{this.state.errorMessage}</p>
          <p style={{ marginTop: "12px" }}>
            Open browser console for full stack trace.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
