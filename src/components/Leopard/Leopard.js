import leopard from "./../../assets/leopard.jpg";

const Leopard = () => {

  return (
    <div>
      <h2 data-testid="who">
        I am a Leopard!
      </h2>
      <img src={leopard} alt="leopard" />
      <h3 data-testid="name">Leopard</h3>
    </div>
  );
};

export default Leopard;