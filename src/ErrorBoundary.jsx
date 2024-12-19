import React from 'react';

export default function ErrorBoundary() {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Log the error and info
    console.error("Error in ErrorBoundary:", error, info);

    // Update the state to display the fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Display the fallback UI
      return <h1>Something went wrong!</h1>;
    }

    // Render the children
    return this.props.children;
  }
}
}

