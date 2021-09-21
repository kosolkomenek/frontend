export default function App() {
  const [counterA, setCouterA] = React.useState(0);
  const [counterB, setCouterB] = React.useState(0);
  const previouseCounterA = window.localStorage.getItem("counterA");
  const previouseCounterB = window.localStorage.getItem("counterB");
  if (parseInt(previouseCounterA) !== counterA) {
    console.log("counterA", counterA);
  }
  if (parseInt(previouseCounterB) !== counterB) {
    console.log("counterB", counterB);
  }
  React.useEffect(() => {
    localStorage.setItem("counterA", counterA);
    localStorage.setItem("counterB", counterB);
  });
  return (
    <div>
      <button onClick={() => setCouterA(counterA + 1)}>A</button>
      <button onClick={() => setCouterB(counterB + 1)}>B</button>
    </div>
  );
}
