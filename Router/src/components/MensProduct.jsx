import { useEffect, useState } from "react"
import { Card, CardBox } from "./Card"

 

export const MensProduct = () => {
    const [menData, setMenData] = useState([])
    useEffect(() => {
        getData();
        return function cleanup() { };
    },[])
    
    async function getData() {
        const data = await fetch(`http://localhost:8080/mensData`).then((d) => d.json());
        setMenData(data)
        console.log(data)
    }

  const addToCart = (d ) => {
      console.log(d)
        fetch("http://localhost:8080/cartData", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(d),
        });
    }

    return (

      <div>
        <CardBox>
          {menData.map((e, i) => (
            <Card key={i}>
              <div>
                <img src={e.image} alt="img" />
              </div>
              <div>
                <p>{e.name}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    margin: "auto auto",
                  }}
                >
                  <div>{e.price}</div>
                  <div> 
                    <span style={{textDecoration: "line-through"}}>{e.strikedoffprice}</span>
                  </div>
                </div>
                <div>
                  <button onClick={() => { addToCart(e) }}>Add to Cart</button>
                </div>
              </div>
            </Card>
          ))}
        </CardBox>
      </div>
    );
      
}