import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Enemy from "./Enemy"
import Player from "./Player"
import ItemComponent from "../inventory/ItemComponent"

import "../../styles/gamepage/gamepage.css"
import "../../styles/item/item.css"


class Game extends React.Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        // if Enemy HP is null (happens on page refresh) => start Classic game,
        // meaning if you are fighting a Boss, on refresh it will throw you into a
        // Classic game
        if(this.props.enemy.currentHp === null) {
            this.props.startGame("Classic", this.props)
        }
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 500)
    }

    render() {     
        const game_style = {
            backgroundImage: "url(" + this.props.enemy.currentEnemy.environmentSrc + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        const winText = "Victory"
        const loseText = "Defeat"
    
        if(this.state.isLoading === false) {
            return(
                <section className="battle_section" style={game_style}>
                    <div className="dark_overlay"></div>
                    <div className="container">
                        <div className="characters">
                            <Player 
                            {...this.props}
                            attack={this.props.attack} 
                            gameManager={this.props.gameManager} 
                            canAttack={this.props.canAttack}
                            />
                            <Enemy {...this.props}/>
                        </div>
        
                        <div className="game_over" style={{ display: this.props.battleStatus === "inBattle" ? "none" : "block" }}>
                            <div className="cont">
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
                                    <div className="left">
                                        <div>
                                            <p>Gold:</p>
                                            <p>{this.props.currency.acquiredGold}</p>  
                                        </div>
                                        <div>
                                            <p>Diamonds:</p>
                                            <p>{this.props.currency.acquiredDiamonds}</p>
                                        </div>
                                        <div>
                                            <p>Experience:</p>
                                            <p>{this.props.acquiredXp}</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="generated_item">
                                            {
                                            this.props.battleStatus === "Victory" ?
                                            <ItemComponent data={this.props.generatedItem ? this.props.generatedItem : null} {...this.props} />
                                            : null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="confirm_container">
                                    <Link className="confirm_btn" to="/menu" onClick={this.props.endGame}>Continue</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <div className="loading">
                    <div className="circle-loading"></div>
                </div>
            )
        }
    }
}

Game.propTypes = {
    acquiredXp: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    acquiredXp: state.character.acquiredXp
})

export default connect(mapStateToProps)(Game)