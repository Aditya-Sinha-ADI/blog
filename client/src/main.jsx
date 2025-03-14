import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/write.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import SinglePostPage from "./routes/SinglePostPage.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <HomePage />, // HomePage has no layout
  },
  {
    element: <MainLayout />, // Everything else uses MainLayout
    children: [
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <PostListPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/post",
        element: <SinglePostPage />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {/* ✅ Wrap everything inside the Scrollbars component */}
      <Scrollbars 
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ width: "100vw", height: "100vh" }}
        renderThumbVertical={(props) => (
          <div {...props} style={{ backgroundColor: "#888", borderRadius: "8px", width: "18px" }} />
        )}
      >
        <RouterProvider router={router} />
      </Scrollbars>
    </ClerkProvider>
  </StrictMode>
);
