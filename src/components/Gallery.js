import Card from "./UI/Card";
import classes from "./image.css"
import g1img from "../assests/image-03-03-20-07-29-1.jpeg"
import g2img from "../assests/image-03-03-20-07-29-2.jpeg"
import g3img from "../assests/image-03-03-20-07-29-3.jpeg"
import g4img from "../assests/image-03-03-20-07-29-4.jpeg"
import g5img from "../assests/image-03-03-20-07-29-5.jpeg"
import g6img from "../assests/image-03-03-20-07-29.jpeg"
import g7img from "../assests/image-03-03-20-07-55-1.jpeg"
import g8img from "../assests/image-03-03-20-07-55-2.jpeg"
import g9img from "../assests/image-03-03-20-07-55-3.jpeg"
import g10img from "../assests/image-03-03-20-07-55.jpeg"

const Gallery = (props) => {
    return (
        <Card>
            <h1>Gallery</h1>
            <p><div className={classes.row}>
                <div className={classes.column}>
                    <img src={g1img} alt="gallery-1"/>
                    <img src={g2img} alt="gallery-2"/>
                    <img src={g9img} alt="gallery-1"/>
                    <img src={g10img} alt="gallery-2"/>
                </div>
                <div className={classes.column}>
                <img src={g3img} alt="gallery-1"/>
                    <img src={g4img} alt="gallery-2"/>
                </div>
                <div className={classes.column}>
                <img src={g5img} alt="gallery-1"/>
                    <img src={g6img} alt="gallery-2"/>
                </div>
                <div className={classes.column}>
                <img src={g7img} alt="gallery-1"/>
                    <img src={g8img} alt="gallery-2"/>
                </div>
            </div></p>
        </Card>)
}

export default Gallery;