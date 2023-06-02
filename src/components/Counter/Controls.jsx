export const Controler = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter_controls">
      <button className="btn" type="button" onClick={onIncrement}>
        +1
      </button>
      <button className="btn" type="button" onClick={onDecrement}>
        -1
      </button>
    </div>
  );
};
