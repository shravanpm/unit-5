import './App.css';


function App() {

  var data = [
    {
      heading: "Mobile Operating System",
      list: ["Android", "Iphone", "Blackberry", "Windows Phones"],
    },
    {
      heading: "Mobile Manufacturers",
      list: ["samsung", "HTC", "Micromax", "Apple"],
    },
  ];
  return (
    <div className="App">
      {data.map((item) => {
        return <Heading heading={item.heading} sub={item.list} />;
      })}
    </div>
  );
}
function Heading({ heading, sub }) {
  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {sub.map((ite) => {
          return <li className={ite}>{ite}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
