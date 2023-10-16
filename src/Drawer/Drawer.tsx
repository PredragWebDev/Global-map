import { FC, useEffect } from "react";
import { StyledDrawer } from "./Drawer.styled";
import { useDrawerStore } from "../stores/drawerStore";
import { chooseEmoji } from "../utils/chooseEmoji";
import Event from "./Event";
import { formatPrice } from "../utils/formatPrice";

const Drawer: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const selectedProperty = useDrawerStore((state) => state.selectedProperty);

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  return (
    <StyledDrawer $isOpen={isOpen}>
      <div className="drawer-header">
        <h2>{selectedProperty?.address}</h2>
        <button onClick={closeDrawer}>&#x2715;</button>
      </div>
      <div className="details-row">
        <div className="status">
          {selectedProperty?.events[0].description}{" "}
          {chooseEmoji(selectedProperty?.events[0].description || "")}
        </div>
        {selectedProperty?.events[0].price && (
          <p className="price">
            {formatPrice(selectedProperty?.events[0].price)}
          </p>
        )}
      </div>
      <div className="history">
        <h3>History</h3>
        {selectedProperty?.events.map((event, i) => (
          <Event key={event.date + event.description + i} event={event} />
        ))}
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
