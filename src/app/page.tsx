import Image from 'next/image'
import { getAllUser } from '../../lib/getAllUser'

export default async function Home() {
  const data:User[] = await getAllUser();
  console.log(data);
  return (
        <div>
          <h1>User</h1>
          {data?.map((item)=>(
              <div key={item.id}>
              <h3> {item.name}</h3>
              <h3> {item.email}</h3>
              <h3> {item.address.city}</h3>
              </div>
          ))}
        </div>
         )
        } 

