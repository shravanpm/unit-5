import "./App.css";

function App() {

  var midData = ["Service", "About", "Projects"];
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Logo />
        </div>
        <div className="mid">
          {
            midData.map((e)=>{
             return  <Link data={e} />;
            })
          }
        </div>
        <div className="right">
          <Button />
        </div>
      </div>
    </>
  );
}
function Link({data}){
  return <a href="www.google.com">{data}</a>;
}
function Button(){
  return <button>contact</button>;
}
function Logo(){
  return <h4>LOGOBAKERY</h4>;
}
export default App;
