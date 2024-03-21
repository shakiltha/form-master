import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"mohibur"} />
        <Cousin name={"Rukeya"} />
      </section>
    </div>
  );
};

export default Aunty;
