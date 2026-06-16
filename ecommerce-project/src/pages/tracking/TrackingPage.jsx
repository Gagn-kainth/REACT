import "./TrackingPage.css";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import TrackingProgress from "./TrackingProgress";

function TrackingPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <title>Tracking</title>
      <Header cart={cart} />
        <TrackingProgress orders={orders}/>
    </>
  );
}

export default TrackingPage;