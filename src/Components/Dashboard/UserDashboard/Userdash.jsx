import React, { useEffect, useState } from 'react';
import { Card, Layout, Rate, Button, Modal } from 'antd';
import axios from 'axios';
import './Userdash.css';

const { Header, Footer, Content } = Layout;

function Userdash() {
  const [products, setProducts] = useState([]);
  const [modOpen, setModOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // to fetch the data from the api
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
      });
  }, []);
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModOpen(true);
  };

  return (
    <div>
      <Layout className='layout'>
        <Header>Header</Header>
        <Content className='Product-content-container'>
          <div className="Product-container">
            {products.map((product, index) => (
              <Card key={index} className='Product-card' onClick={() => handleCardClick(product)}>
                <img src={product.image} alt={product.title} width="100" style={{ height: "150px", objectFit: "scale-down" }} />
                <h4>{product.title}</h4>
                <p className='product-rate-price'>RATE:<Rate disabled value={product.rating.rate}></Rate></p>
                <p className='product-rate-price'>Price:${product.price}</p>
                <div className="product-buy-cart">
                  <Button style={{ width: "95%", backgroundColor: "yellow", borderRadius: "15px" }}>Add to Cart</Button><br />
                  <Button style={{ width: "95%", backgroundColor: "orange", borderRadius: "15px" }}>Buy Now</Button>
                </div>
              </Card>
            ))}
          </div>
          <Modal centered open={modOpen} onOk={() => { setModOpen(false); setSelectedProduct(null); }}
            onCancel={() => { setModOpen(false); setSelectedProduct(null); }}  className="custom-modal">
            {selectedProduct && (
              <div>
                <h2>{selectedProduct.title}</h2><br />
                <img src={selectedProduct.image} alt={selectedProduct.title} width={100} height={100} /><br />
                <h3 style={{ fontSize: "15px", marginLeft: "15px" }}>{selectedProduct.category}</h3><br />
                <p style={{ fontSize: "15px", marginLeft: "15px" }}>{selectedProduct.description}</p><br />
                <Rate disabled value={selectedProduct.rating.rate}></Rate><br />
                <p style={{ fontSize: "15px", marginLeft: "15px" }}>PRICE: ${selectedProduct.price}</p><br />
              </div>
            )}
          </Modal>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Userdash;
