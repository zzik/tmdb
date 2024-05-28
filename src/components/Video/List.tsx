import { VideoT } from "../../types/components";
import Card from "./Card";

const Data = ({loading, error, data, imageBackup, alt} : {loading:boolean, error:boolean, data:VideoT[], imageBackup:string, alt:string}) => {
    if (loading && !error) return <div>Loading...</div>;
    if (!loading && error) return <div>Error occurred. Unable to load data</div>;
    if (!data) return null;

    const trailer = data.find(el => el.type === 'Trailer')
    const image = imageBackup

    const condition = trailer ? <Card videoKey={trailer.key as string} videoName={trailer.name as string} /> : <img src={image} alt={alt} />

    return condition
    
}

export default Data