
import React from "react"
import { Link } from "react-router-dom"

import Enemy from "./Enemy"
import Player from "./Player"

import ItemComponent from "../inventory/ItemComponent"

import "../../styles/gamepage/gamepage.css"
import "../../styles/item/item.css"


export default class Game extends React.Component {

    componentDidMount() {
        this.props.startGame()
    }

    render() {
        const game_style = {
            backgroundImage: "url(" + this.props.environmentSrc + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center -100px"
        }

        const winText = "You WON"
        const loseText = "You LOST"
    
        return(
            <section className="battle_section" style={game_style}>
                <div className="dark_overlay"></div>
                <div className="container">
                    <div className="characters">
                        <Player 
                        player={this.props.player} 
                        enemy={this.props.enemy}
                        attack={this.props.attack} 
                        gameManager={this.props.gameManager} 
                        canAttack={this.props.canAttack}
                        />
                        <Enemy enemy={this.props.enemy}/>
                    </div>
    
                    <div className="game_over" style={{ display: this.props.battleStatus === "inBattle" ? "none" : "block" }}>
                        <div className="end_text">
                            {
                            this.props.battleStatus === "Victory" 
                            ?
                            <p>{winText}</p>
                            :
                            <p>{loseText}</p>
                            }
                        </div>
                        <div className="reward">
                            <p>{this.props.currency.acquiredGold}</p>
                            <p>{this.props.currency.acquiredDiamonds}</p>
                            <div className="generated_items">
                                {
                                this.props.battleStatus === "Victory" ?
                                <ItemComponent data={this.props.generatedItem ? this.props.generatedItem : null} />
                                : null
                                }
                            </div>
                        </div>
                        <div className="confirm_container">
                            <Link className="confirm_btn" to="/menu" onClick={this.props.endGame}>Continue</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}