
import React from "react"
import { Link } from "react-router-dom"

import home from "../resources/icons/home.svg"
import tips from "../data/tips"
import "../styles/menu/menu.css"


class Menu extends React.Component {

    _isMounted = false
    state = {
        randomTip: null
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({ 
            randomTip: tips[Math.floor(Math.random() * tips.length)]
        })
    }

    componentWillUnmount() { 
        this._isMounted = false
    }

    render() {
        const haveSpaceInv = () => {
            if(this.props.invItems.length <= 35) return true
            else if(this.props.invItems.length > 35) return false
        }

        const canStartGame = () => {
            if(haveSpaceInv()) return true
            else return false
        }

        const startActiveStyle = canStartGame() ? " active" : ""
        
        return (
            <div className="menu">
                <div className="home_btn">
                    <Link to="/">
                        <img alt="" src={home}/>
                    </Link>
                </div>

                <div className="content">
                    <Link 
                    to={canStartGame() ? "/game" : "/menu"} 
                    className={"menu_btn start_btn" + startActiveStyle} 
                    onClick={() => { this.props.startGame("Classic", this.props) }}
                    >
                    Start Game
                    </Link>
                    <Link to="/dungeon" className="menu_btn dungeon_btn">Dungeon</Link>
                    <Link to="/inventory" className="menu_btn inventory_btn">Inventory</Link>
                </div>

                <div className="tip">
                    <p>TIP: {this.state.randomTip}</p>
                </div>
            </div>
        )
    }
}

export default Menu