import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import UserPreviouslyContacted from "./pages/UserPreviouslyContacted";
import UserPreviouslySaved from "./pages/UserPreviouslySaved";
import UserPreviouslyViewed from "./pages/UserPreviouslyViewed";
import UserPastSearches from "./pages/UserPastSearches";
import UserProperties from "./pages/UserProperties";
import AboutUs from "./pages/AboutUs";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import PropertyListingsPage from "./pages/PropertyListingsPage";
import PropertyExplorePage from "./pages/PropertyExplorePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/user-previously-contacted0":
        title = "";
        metaDescription = "";
        break;
      case "/user-previously-saved0":
        title = "";
        metaDescription = "";
        break;
      case "/user-previously-viewed0":
        title = "";
        metaDescription = "";
        break;
      case "/user-past-searches0":
        title = "";
        metaDescription = "";
        break;
      case "/user-properties0":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-page":
        title = "";
        metaDescription = "";
        break;
      case "/property-listings-page":
        title = "";
        metaDescription = "";
        break;
      case "/property-explore-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/user-previously-contacted0"
        element={<UserPreviouslyContacted />}
      />
      <Route path="/user-previously-saved0" element={<UserPreviouslySaved />} />
      <Route
        path="/user-previously-viewed0"
        element={<UserPreviouslyViewed />}
      />
      <Route path="/user-past-searches0" element={<UserPastSearches />} />
      <Route path="/user-properties0" element={<UserProperties />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/property-details-page" element={<PropertyDetailsPage />} />
      <Route
        path="/property-listings-page"
        element={<PropertyListingsPage />}
      />
      <Route path="/property-explore-page" element={<PropertyExplorePage />} />
    </Routes>
  );
}
export default App;
