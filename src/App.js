import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cover from "./components/Cover/Cover";
import Wedding from "./components/Wedding/Wedding";
import BookStudio from "./components/BookStudio/BookStudio";
import Feedback from "./components/Feedback/Feedback";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Admin/Login";
import Feedbacks from "./components/Admin/Feedbacks";
import UploadImage from "./components/Admin/UploadImage";
import "./App.css";
import { useState } from "react";
import PreWedding from "./components/PreWedding/PreWedding";
import Makeup from "./components/Makeup/Makeup";
import Aishwarya from "./components/Makeup/Aishwarya";
import Archana from "./components/Makeup/Archana";
import Shreya from "./components/Makeup/Shreya";
import FashionPortrait from "./components/FashionPortrait/FashionPortrait";
import BookPhotoshoot from "./components/BookPhotoshoot/BookPhotoshoot";
import StudioBookings from "./components/Admin/StudioBookings";
import Photoshoots from "./components/Admin/Photoshoots";
import Rent from "./components/Rent/Rent";
import Rentals from "./components/Admin/Rentals";
import Products from "./components/Admin/Products";
import AddProduct from "./components/Admin/AddProduct";

function App() {
   const [isAdmin, setAdmin] = useState(window.localStorage.getItem("admin"));

   return (
      <Router>
         <Navbar isAdmin={isAdmin} setAdmin={setAdmin} />
         <Switch>
            <Route exact path="/" component={Cover} />
            <Route path="/spectrum-client" component={Cover} />
            <Route path="/porfolio/wedding" component={Wedding} />
            <Route path="/porfolio/prewedding" component={PreWedding} />
            <Route path="/porfolio/makeup" component={Makeup} />
            <Route path="/porfolio/aishwarya" component={Aishwarya} />
            <Route path="/porfolio/archana" component={Archana} />
            <Route path="/porfolio/shreya" component={Shreya} />
            <Route
               path="/porfolio/fashionportrait"
               component={FashionPortrait}
            />
            <Route path="/bookstudio" component={BookStudio} />
            <Route path="/bookphotoshoot" component={BookPhotoshoot} />
            <Route path="/rent" component={Rent} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/about" component={About} />
            <Route exact path="/admin">
               {isAdmin ? (
                  <h1 className="display-4 text-center py-5">
                     Welcome to admin dashboard
                  </h1>
               ) : (
                  <Login setAdmin={setAdmin} />
               )}
            </Route>
            <Route path="/admin/photoshoots">
               {isAdmin ? <Photoshoots /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/studiobookings">
               {isAdmin ? <StudioBookings /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/rentals">
               {isAdmin ? <Rentals /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/products">
               {isAdmin ? <Products /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/addProduct">
               {isAdmin ? <AddProduct /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/feedbacks">
               {isAdmin ? <Feedbacks /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/uploadimage">
               {isAdmin ? <UploadImage /> : <Login setAdmin={setAdmin} />}
            </Route>
         </Switch>
         <Footer isAdmin={isAdmin} />
      </Router>
   );
}

export default App;
