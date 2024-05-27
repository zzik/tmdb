import { useContext } from "react"
import { TypeContext } from "../context"

const Title = () => {
  const {type} = useContext(TypeContext)
  const currentMediaType = type === 'tv' ? 'TV Show' : 'Movie'
  return (
    <div className='app-title'>
        <h1>{currentMediaType} Lookup</h1>
    </div>
  )
}

export default Title