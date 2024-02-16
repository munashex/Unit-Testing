import {useState} from 'react'

const Clicked = () => {
const [clicked, setClicked] = useState(false) 
const [user, setUser] = useState('munashe')

const handleClick = () => {
    setClicked(true)
}

const handleChange = (e) => {
    setUser(e.target.value)
}

    return (
        <div>
          <button onClick={handleClick}>click</button> 
          <p>{clicked ? 'clicked': 'click me'}</p>
          <input 
          type="text"
          value={user} 
          onChange={handleChange} 
          placeholder="name"
          />
        </div>
    )
}

export default Clicked