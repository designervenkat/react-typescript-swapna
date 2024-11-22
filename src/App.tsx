

import GenericList from "./components/Props/Generic";
import CardImage from "./components/Props/Image";


import Button from "./components/Props/Unions";

export default function App() {

  type User = {
    id: number,
    name: string
  }

  const users: User[] = [
      {id: 1, name: "john"},
      {id: 2, name: "smith"}
  ]


  const renderUser = (user: User) => (
    <div className="flex gap-x-2">
      <h2>{user.id}</h2>
      <p>{ user.name}</p>
    </div>
  )

  const ImageData = {
    src: "https://placehold.co/600x400",
    alt: "brand-logo",
    size: {
      width: 300,
      height: 300
    }
  }
  
  return (
    <div className="h-screen w-screen grid place-content-center gap-y-10">
      {/* // union */}
      <Button color="bg-orange-300" type="button" label="Add to Cart" />
      <Button color="bg-green-200" type="submit" label="Send Form" />
      <Button color="bg-red-200" type="button" label="Delete" />

      {/* // Generic List */}
      <GenericList items={users} renderItem={renderUser} />
      
      {/* // enum */}
      {/* <StatusBadge status={Active}></StatusBadge> */}

      <CardImage src={ImageData.src} alt={ImageData.alt} size={ImageData.size} />
 
    </div>
  )
}
