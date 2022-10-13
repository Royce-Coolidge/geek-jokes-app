import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJokes } from "../../context/jokes-context";

export default function New() {
  const { setMyJokes, myJokes } = useJokes();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleContent = (e) => setContent(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
      setMyJokes((jokes) => [...jokes, { name: name, content: content }]);
      navigate("/jokes")
  };

  return (
    <div className="bg-blue-500">
      <div className="content">
        <p>Add your own hilarious joke...</p>
        <form>
          <div>
            <label>
              Name:{" "}
              <input
                onChange={handleName}
                type="text"
                name="name"
                value={name}
              />
            </label>
          </div>
          <div>
            <label>
              Content:{" "}
              <textarea
                onChange={handleContent}
                name="content"
                value={content}
              />
            </label>
          </div>
          <div>
            <button onClick={handleSubmit} type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
