import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, icreaseItemQuantity } from "./cartSlice";

function UpdateCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="text-sm font-medium">{currentQuantity}</p>
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
