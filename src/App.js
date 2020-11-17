import logo from './logo.svg';
import './App.css';

 
function App() {
  return (
    <div className="App">
       <h3>CREATE A TEST</h3>
       <form>
       <label>
       Question:
      <input
        type="text"
        name="question"
        placeholder="Enter your  question...."
        // onChange={handleInputChange}
        // value={questionForm.question}
        className="question-input"
      />
      </label>
      <br/>
      <label>
      options:
      <input
        type="text"
        placeholder="Add the answer to the question..."
        // value={questionForm.answer}
        // onChange={handleInputChange}
        className="question-input"
        name="answer"
      />
      </label>
      <br/>
      <input type="submit" value="Submit"/>
      </form>
      <div classname="app-test">
        <button value="Start the Test">Start the test</button>
      </div>
      
    </div> 
  
  );
}

export default App;
