
const Card = ({videoKey, videoName} : {videoKey:string, videoName: string}) => {
  return <>
    <iframe frameBorder="0" src={`https://www.youtube.com/embed/${videoKey}`}></iframe>
    <h4>{videoName}</h4>
  </>
}

export default Card