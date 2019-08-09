import React from "react";
import Image from "./compnents/Image";

class App extends React.Component {
    state = {
        score: 0,
        images: [],
        images_clicked: [],
        message: "Click an image to earn points, but don't click on the same image twice or you'll go back to 0!"
    }
    
    clickme = data =>{
        let id = data.id;
        
        if (this.state.images_clicked.indexOf(id) === -1) {

            this.setState({
                score: this.state.score +1,
                images_clicked: [...this.state.images_clicked, id],
                images: this.state.images.sort(() => Math.floor(Math.random))
            })

        } else {

            this.setState({
                score: 0,
                images_clicked: [],
                images: this.state.images.sort(() => Math.floor(Math.random))
            })
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.mssage}</div>
                <div>Score: {this.state.score}</div>

                <Image
                    id={import.id}
                    alt={img.alt}
                    src={img.src}
                    clickme={this.clickme}
                    key={img.id}
                    />
            </div>
        )
    }
}

export default App;