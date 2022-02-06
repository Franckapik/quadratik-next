import "bootstrap/dist/css/bootstrap.css";
import "../public/styles/quadratik.css";

import { SSRProvider } from "react-bootstrap";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
