import { Button, Stack } from "react-bootstrap";
import productItems from "../data/product.json";
import { useCartContext } from "../context/CartContext";

type CartItemProps = {
  id: number;
  qty: number;
};

function CartItem({ id, qty }: CartItemProps) {
  const { removeItem } = useCartContext();
  const products = productItems.find((item) => item.id === id);

  if (products == null) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={3}>
      <img
        src={products.imgUrl}
        style={{ width: "175px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto text-dark">
        <div>
          {products.title}
          {"  "}
          {qty > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              {qty}
            </span>
          )}
        </div>
      </div>
      <div>{products.price * qty}</div>
      <div>
        <Button size="sm" variant="outline-dark" onClick={() => removeItem(id)}>
          &times;
        </Button>
      </div>
    </Stack>
  );
}

export default CartItem;
