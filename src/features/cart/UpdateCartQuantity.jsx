import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, icreaseItemQuantity } from "./cartSlice";

function UpdateCartQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(icreaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
