import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Context/UserContext";
import LoadingContext from "./Context/LoadingContext";
import { QueryClient, QueryClientProvider } from "react-query";
import ImageContext from "./Context/ImageContext";
import { PhotoProvider } from "react-photo-view";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <ImageContext>
          <PhotoProvider speed={() => 800}
  easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
            <LoadingContext>
              <App />
            </LoadingContext>
          </PhotoProvider>
        </ImageContext>
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
