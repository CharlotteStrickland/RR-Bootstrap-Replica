import Card from 'react-bootstrap/Card'

export default function Background() {
    return (

        <div style={{ display: "flex", flexDirection: "row", backgroundSize: "contain" }}>
            <Card style={{ width: "1300px", maxHeight: "428px", marginBottom: "20px", backgroundColor: "#DEEED6", zIndex: "-1" }} className="text-black">
                <img style={{ zIndex: "-1", maxHeight: "428px", width: "100%", backgroundPosition: "right center", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card Image" />

                <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    </div>   
                </Card>
          </div>

    )
}