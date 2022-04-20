import hippo from './../../assets/hippo.jpg';

const Hippo = () => {
  return (
    <div>
      <h2 data-testid="who">I am a Hippo!</h2>
      <img src={hippo} alt={hippo} />
      <h3 data-testid="name">Hippo</h3>
    </div>
  );
};

export default Hippo;
