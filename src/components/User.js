import{useState, useEffect} from 'react'

const User = () => {

const [user, setUser] = useState([]) 

const getUser = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users') 
  const data = await res.json() 
  setUser(data)
}

useEffect(() => {
getUser()
}, []) 



  return (
    <div style={{margin: '9em'}}>
      {user && user?.map((item, index) => (
        <div key={item?.id} data-testid="users"> 
           <h1>{item?.name}</h1>
        </div>
      ))}
    </div>
  )
}
export default User