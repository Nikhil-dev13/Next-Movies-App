import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";

const SideMenu = ({ categories }) => {
  return (
    <div>
      <Modal>
        <MovieCreateForm />
      </Modal>
      <h1 className="my-4">Movies DB</h1>
      <div className="list-group">
        {categories.map((c) => (
          <a key={c.id} href="#" className="list-group-item">
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
