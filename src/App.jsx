import { useRef, useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    setList((prevList) => [...prevList, text]);
    setText('');
  };

  return (
    <>
      <h2>React Project Ideas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Idea"
        />
        <button>Submit</button>
      </form>

      <ol>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default App;
