import './App.css';
import React from 'react'
import TileDiv from './TileDiv'


// PUT CODE FOR PROJECT FETCH
// THIS FUNCTION IS ONLY TO SIMULATE THE PROJECT LIST / DATASET LIST THAT JSON RETURNS
function getProjName() {
  return ['Dank_1', 'Dank_test', 'test_1', 'Dank_2', 'Dank_3', 'test_2', 'Another_fffftest', 'Dank_7', ' Test_vikram']
}
function App() {
  const [showResults, setShowResults] = React.useState(false)
  const btnClick = (e) => setShowResults(!showResults)
  return (
    <div className="App">
      <button onClick={btnClick}>Select Project</button>
      <div>
        {showResults ? <TileDiv list={getProjName()}/> : null}
      </div>

    </div>
  );
}

export default App;
