import Card from "./components/Card";
import Greet from "./components/Greet";

export default function App() {
  const handleCart = () => {
    console.log("iPhone added to cart");
    
  }
   const handleFav = () => {
    console.log("Add to whishlist");
    
  }
  return (
    <div className="grid place-content-center h-screen w-screen">
      {/* <h1 className="text-xl">React TypeScript</h1> */}
      {/* <Greet age={40} /> */}
      
      <Card title="iPhone" desc="This is iPhone" image="https://placehold.co/400" price={400} label="Add to Card" clickEvent={handleCart} onToggle={handleFav} />
      
    </div>
  )
}
