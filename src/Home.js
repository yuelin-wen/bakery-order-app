import Card from "./components/UI/Card";
import heroImg from "./assests/WechatIMG15202.jpeg"

export default function Home() {
    return (
        <Card>
            <p><img src={heroImg} alt="main page" /></p>
        </Card>)
}