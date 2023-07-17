import { Card, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};

function Product({ id, title, price, imgUrl }: ProductProps) {
  const { addItem, decreaseItem, getItemQty, removeItem } = useCartContext();
  const count = getItemQty(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height={"200px"}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="bg-dark d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 text-light">{title}</span>
          <span className="fs-2 text-light">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {count === 0 ? (
            <Button onClick={() => addItem(id)} className="w-100 btn-secondary">
              Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => addItem(id)} className="btn-secondary">
                  +
                </Button>
                <span className="text-light fs-5">{count}</span>
                <Button
                  onClick={() => decreaseItem(id)}
                  className="btn-secondary"
                >
                  -
                </Button>
              </div>
              <Button
                onClick={() => removeItem(id)}
                className="btn-light"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
