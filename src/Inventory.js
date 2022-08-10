import React from "react";
import Navbar from "./components/Navbar";
import photo from "./search.png"
import fil from "./filter.png"
import face from "./face.png"
import caret from "./caret-down.png"
import random from './random.png'
import vector from './vector.png'
import Appbar from "./components/Appbar";
import TrendShip from "./TrendShip";
import Img from './Img.png'

export default function Inventory() {
    return (
        <div className="inven-page">
            <div className="left">
                <Navbar />
            </div>
            <div className="right">
                <div className="Top">
                    <div className="input-div">
                        <img className="hold1" src={photo} alt="not" />
                        <input className="tag-input" type="text" placeholder="Search Nfts..." />
                        <img className="hold2" src={fil} alt="not" />
                    </div>
                    <Appbar />
                </div>
                <div className="Middle">
                    <span className="Heading">Trending Warships</span>
                    <div className="card-begin">
                        <TrendShip />
                        <TrendShip />
                        <TrendShip />
                        <TrendShip />
                        <TrendShip />
                        <TrendShip />
                        <TrendShip />
                        <TrendShip />
                    </div>
                </div>
                <div className="table-start">
                    <span className="Headin">Top Upgrades</span>
                    <div className="table-box">
                        <table>
                            <tbody><tr>
                                <th className="hide">SNo</th>
                                <th className="down">Collection</th> 
                                <th>Features</th>
                                <th>Become an Owner</th>
                            </tr>
                                <tr>
                                    <td>1</td>
                                    <td className="mak-flex"><img src={Img} alt="no"></img> <p>Bullet 1</p></td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="mak-flex"><img src={Img} alt="no"></img> <p>Bullet 2</p></td>
                                    <td>Francisco Chang</td>
                                    <td>Mexico</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="mak-flex"><img src={Img} alt="no"></img> <p>Bullet 3</p></td>
                                    <td>Roland Mendel</td>
                                    <td>Austria</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="mak-flex"><img src={Img} alt="no"></img> <p>Bullet 4</p></td>
                                    <td>Helen Bennett</td>
                                    <td>UK</td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
        </div >
    );
}