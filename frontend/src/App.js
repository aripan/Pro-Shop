import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/placeOrder" component={PlaceOrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
