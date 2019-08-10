import React from "react";
import Image from "./components/Image";


var my_images = [
    { id: 0, alt: "Altair", src: "https://fanatical.cdn.prismic.io/fanatical/81b21a845687192657e03fa138e219ba0a1376b3_ac1_ss5_full_164886.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 1, alt: "Ezio", src: "https://fanatical.cdn.prismic.io/fanatical/6c6a8f47cb5c8f5dabe6e81d39c7e24b2594dd0b_assassins-creed-2-feature.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 2, alt: "Raonhnaké:ton aka Connor", src: "https://fanatical.cdn.prismic.io/fanatical/8621a5322ac97b3cd5f614644530a35b66eb1777_assassins_creed_3_cut.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 3, alt: "Hatham", src: "https://fanatical.cdn.prismic.io/fanatical/0526b6a36a05d67b09c69b248c2d751ff82dd3f6_haythamkenwayac3.jpeg?auto=compress,format&w=710&fit=fillmax" },
    { id: 4, alt: "Aveline", src: "https://fanatical.cdn.prismic.io/fanatical/233edc2dff0de6fe2b5f12cf4e15ca4857710abd_acliberation.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 5, alt: "Edward", src: "https://fanatical.cdn.prismic.io/fanatical/bdf4f6f9f2f2b15c79cb607247df6465197480f2_85816-assassins_creed_black_flag-video_games-ubisoft.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 6, alt: "Adéwalé", src: "https://fanatical.cdn.prismic.io/fanatical/da7c1a4d30daa7e85732158c1d33ced9a82c317e_freedomcry.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 7, alt: "Shay", src: "https://fanatical.cdn.prismic.io/fanatical/a177da130a2fc467dba20dd9941a6966782a886d_acrogue.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 8, alt: "Arno", src: "https://fanatical.cdn.prismic.io/fanatical/5fef95185d878953aa0b26b69e9ae36fdeb54cbd_assassins-creed-unity.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 9, alt: "Shao", src: "https://fanatical.cdn.prismic.io/fanatical/aeb1c73ebb43cd8455c437d223df0d1521557623_acchina.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 10, alt: "Arbaaz", src: "https://fanatical.cdn.prismic.io/fanatical/87096a1c429e0c9c21f16242d382ebb9c8484c5d_acc-india.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 11, alt: "Nikolai", src: "https://fanatical.cdn.prismic.io/fanatical/fbf329c6083ce8c34351379e42d659347d163a17_acc-russia-screen4.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 12, alt: "Jacob and Evie", src: "https://fanatical.cdn.prismic.io/fanatical/7922915fd2f967669c923867682830a8a4389038_assassins-creed_dd.jpeg?auto=compress,format&w=710&fit=fillmax" },
    { id: 13, alt: "Bayek", src: "https://fanatical.cdn.prismic.io/fanatical/d947373aafe38d274210bb71052a74c2518552a7_ac_news_preorder_ncsa_293208.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 14, alt: "Kassandra", src: "https://fanatical.cdn.prismic.io/fanatical/4789a933d34ec848ff1d473e59e25d2859126c6b_5afda5f788a7e34d25b5012f-9.jpg?auto=compress,format&w=710&fit=fillmax" },
    { id: 15, alt: "Alexios", src: "https://fanatical.cdn.prismic.io/fanatical/ffa3bd3d54bbfdc4e1881921a6f098dac3e8c408_acod_screen_navalboarding_1538388601.jpg?auto=compress,format&w=710&fit=fillmax" }
]

class App extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        images: my_images,
        images_clicked: [],
        message: "Click an image to earn points, but don't click on the same image twice or you'll go back to 0!",
        maxScore: 16
    }

    clickme = data => {
        let id = data.id;


        if (this.state.images_clicked.indexOf(id) === -1) {
            if (this.state.score + 1 > this.state.topScore) {
                this.setState({
                    topScore: this.state.topScore + 1
                });
            }
            this.setState({
                score: this.state.score + 1,
                images_clicked: [...this.state.images_clicked, id],
                images: this.state.images.sort(() => Math.random() - .5),
                message: "You haven't clicked that picture yet!  Great job!  Click another picture you haven't clicked yet!"
            });
            if (this.state.topScore + 1  === this.state.maxScore) {
                this.setState({
                message: "Congratulations!  You've clicked all 16 (well, 17 since Jacob and Evie are together) assassins without repeating!"
            })}
            
        } else {
            this.setState({
                score: 0,
                images_clicked: [],
                images: this.state.images.sort(() => Math.random() - .5),
                message: "Too bad, you've already clicked that picture once.  Try again!"
            })
        }

        
    }

    render() {


        return (
            <div>
                <h1>Find Each Assassin!</h1>
                <div>{this.state.message}</div>
                <div id="score"> Score: {this.state.score} Top Score: {this.state.topScore}</div>
                

                {this.state.images.map(img => (
                    <Image
                        id={img.id}
                        alt={img.alt}
                        src={img.src}
                        clickme={this.clickme}
                        key={img.id}
                    />
                ))}
            </div>
        )
    }
}

export default App;