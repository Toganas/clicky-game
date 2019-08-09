import React from "react";
import Image from "./compnents/Image";

class App extends React.Component {
    state = {
        score: 0,
        images: [],
        images_clicked: [],
        message: "Click an image to earn points, but don't click on the same image twice or you'll go back to 0!"
    }
}