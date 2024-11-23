type CardProps = { title: string; image: string; desc: string; price: number; label: string; clickEvent?: () => void; onToggle?: () => void; };

function Card({title, image, desc, price, label, clickEvent, onToggle,}:CardProps) {
  return (
    <div>
      <div className="w-96 bg-slate-600 h-[400px] grid place-content-center"> 
        <img src={image} alt={title} />
        <p>{desc}</p>
        <p>{price}</p>
        <p>{label }</p>
        </div>
    </div>
  )
}

export default Card