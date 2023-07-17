import { Col, Row } from "react-bootstrap";
import products from "../data/product.json";
import Product from "../components/Products";

function Shop() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => {
          return (
            <Col key={item.id}>
              <Product {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Shop;
