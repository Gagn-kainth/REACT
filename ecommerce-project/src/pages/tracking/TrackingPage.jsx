import "./TrackingPage.css";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import TrackingProgress from "./TrackingProgress";

function TrackingPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchTracking = async()=>{
    const response = axios.get("/api/orders?expand=products")
      setOrders(response.data);
    };
    fetchTracking();
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