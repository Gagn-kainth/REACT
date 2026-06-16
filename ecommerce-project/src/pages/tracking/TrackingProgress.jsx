import dayjs from "dayjs";
function TrackingProgress({orders}) {
  return (
     <div className="tracking-page">
            {orders.map((order) =>
              order.products.map((orderProduct) => (
                <div key={orderProduct.productId} className="order-tracking">
                  <a className="back-to-orders-link link-primary" href="/orders">
                    View all orders
                  </a>
    
                  <div className="delivery-date">
                    Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                  </div>
    
                  <div className="product-info">{orderProduct.product.name}</div>
                  <div className="product-info">Quantity: {orderProduct.quantity}</div>
    
                  <img
                    className="product-image"
                    src={orderProduct.product.image}
                    alt={orderProduct.product.name}
                  />
    
                  <div className="progress-labels-container">
                    <div className="progress-label">Preparing</div>
                    <div className="progress-label current-status">Shipped</div>
                    <div className="progress-label">Delivered</div>
                  </div>
    
                  <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              ))
            )}
          </div>
  )
}

export default TrackingProgress