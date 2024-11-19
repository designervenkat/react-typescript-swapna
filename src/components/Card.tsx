
type CardProps = {
  title: string,
  image: string,
  desc: string,
  price: number,
  label: string,
  clickEvent: () => void
  onToggle: () => void

}
export default function Card({ title, image, desc, price, label, clickEvent, onToggle }: CardProps) {


  return (
    <div className="w-96 bg-slate-600 h-[400px] grid place-content-center">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{desc}</p>
      <p>{price}</p>
      <button onClick={clickEvent}>{label}</button>
      <button onClick={onToggle}>Favourite</button>
    </div>
  )
}
