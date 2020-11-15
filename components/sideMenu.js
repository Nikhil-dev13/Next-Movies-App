import React from "react";
import { useRouter } from "next/router";
import { createMovie } from "../actions";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";

const SideMenu = ({ categories }) => {
  let modal = null;
  let router = useRouter();
  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={(elem) => (modal = elem)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
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
