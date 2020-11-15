import { useState } from "react";

const MovieCreateForm = () => {
  const [form, setForm] = useState({
    name: "Some Movie",
    description: "Description",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;

    let value = [];
    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  return (
    <form>
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          name="name"
          type="text"
          class="form-control"
          id="name"
          onChange={handleChange}
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div class="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          onChange={handleChange}
          name="description"
          type="text"
          class="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div class="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={form.rating}
          onChange={handleChange}
          name="rating"
          type="number"
          max="5"
          min="0"
          class="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" class="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div class="form-group">
        <label htmlFor="image">Image</label>
        <input
          value={form.image}
          onChange={handleChange}
          name="image"
          type="text"
          class="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div class="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          value={form.cover}
          onChange={handleChange}
          name="cover"
          type="text"
          class="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div class="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          class="form-control"
          onChange={handleChange}
          id="longDesc"
          name="longDesc"
          rows="3"
          value={form.longDesc}
        ></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          class="form-control"
          id="genre"
          onChange={handleGenreChange}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
    </form>
  );
};

export default MovieCreateForm;
