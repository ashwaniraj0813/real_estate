import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import UserPreviouslyContacted from "./pages/UserPreviouslyContacted";
import UserPreviouslySaved from "./pages/UserPreviouslySaved";
import UserPreviouslyViewed from "./pages/UserPreviouslyViewed";
import UserPastSearches from "./pages/UserPastSearches";
import UserProperties from "./pages/UserProperties";
import AboutUs from "./pages/AboutUs";
import PropertyExplorePage from "./pages/PropertyExplorePage";
import PropertyListingsPage from "./pages/PropertyListingsPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
=======
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import LogIn from "./pages/LogIn";
import UserProfile from "./pages/UserProfile";
import UserPastSearches from "./pages/UserPastSearches";
import PropertyListingsPage from "./pages/PropertyListingsPage";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import UserPreviouslyViewed from "./pages/UserPreviouslyViewed";
import UserPreviouslySaved from "./pages/UserPreviouslySaved";
import UserPreviouslyContacted from "./pages/UserPreviouslyContacted";
import UserProperties from "./pages/UserProperties";
import Register from "./pages/Register";
import PropertyExplorePage from "./pages/PropertyExplorePage";
import AboutUs from "./pages/AboutUs";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc

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
<<<<<<< HEAD
      case "/user-profile":
=======
      case "/admin-login":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
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
=======
      case "/user-profile":
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
        title = "";
        metaDescription = "";
        break;
      case "/user-past-searches0":
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
=======
      case "/property-listings-page":
        title = "";
        metaDescription = "";
        break;
      case "/rent":
        title = "";
        metaDescription = "";
        break;
      case "/sell":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-page":
        title = "";
        metaDescription = "";
        break;
      case "/user-previously-viewed0":
        title = "";
        metaDescription = "";
        break;
      case "/user-previously-saved0":
        title = "";
        metaDescription = "";
        break;
      case "/user-previously-contacted0":
        title = "";
        metaDescription = "";
        break;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
      case "/user-properties0":
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/aboutus":
=======
      case "/register":
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
        title = "";
        metaDescription = "";
        break;
      case "/property-explore-page":
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/property-listings-page":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-page":
=======
      case "/aboutus":
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
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
<<<<<<< HEAD
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
      <Route path="/property-explore-page" element={<PropertyExplorePage />} />
=======
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-past-searches0" element={<UserPastSearches />} />
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
      <Route
        path="/property-listings-page"
        element={<PropertyListingsPage />}
      />
<<<<<<< HEAD
      <Route path="/property-details-page" element={<PropertyDetailsPage />} />
=======
      <Route path="/rent" element={<Rent />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/property-details-page/:property_id" element={<PropertyDetailsPage />} />
      <Route
        path="/user-previously-viewed0"
        element={<UserPreviouslyViewed />}
      />
      <Route path="/user-previously-saved0" element={<UserPreviouslySaved />} />
      <Route
        path="/user-previously-contacted0"
        element={<UserPreviouslyContacted />}
      />
      <Route path="/user-properties0" element={<UserProperties />} />
      <Route path="/register" element={<Register />} />
      <Route path="/property-explore-page" element={<PropertyExplorePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    </Routes>
  );
}
export default App;
