import { useContext } from "react"
import { TypeContext } from "../context"

const Title = () => {
  const {type} = useContext(TypeContext)
  const currentMediaType = type === 'tv' ? 'TV Shows' : 'Movies'
  return (
    <div className='app-title'>
        <h1>{currentMediaType}</h1>
    </div>
  )
}

export default Title