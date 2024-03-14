let score = 0;
let wicket = 0;
let ballWiseRes = [];

function updateScore(num) {
  if (wicket < 10) {
    ballWiseRes.push(num);
    score += num;
    console.log(ballWiseRes);
    RootElement.render(<App />);
  }
}

function updateWicket() {
  if (wicket < 10) {
    ballWiseRes.push("W");
    wicket += 1;
    console.log(ballWiseRes);
    RootElement.render(<App />);
  }
}

const ScoreButtons = () => (
  <div>
    <button onClick={() => updateScore(0)}>0</button>
    <button onClick={() => updateScore(1)}>1</button>
    <button onClick={() => updateScore(2)}>2</button>
    <button onClick={() => updateScore(3)}>3</button>
    <button onClick={() => updateScore(4)}>4</button>
    <button onClick={() => updateScore(5)}>5</button>
    <button onClick={() => updateScore(6)}>6</button>
    <button onClick={updateWicket}>Wicket</button>
  </div>
);

const App = () => (
  <>
    <h1>ScoreKeeper</h1>
    <h2>
      Score: {score} / {wicket}
    </h2>
    <ScoreButtons />
  </>
);

const RootElement = ReactDOM.createRoot(document.getElementById("root"));
RootElement.render(<App />);
