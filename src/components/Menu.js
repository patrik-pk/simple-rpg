
import React from "react"
import { Link } from "react-router-dom"

import styles from "../data/styles"
import "../styles/menu/menu.css"


class Menu extends React.Component {

    _isMounted = false
    state = {
        isLoading: true,
        timer: 500
    }

    componentDidMount() {
        this._isMounted = true
        setTimeout(() => {
            if(this._isMounted) this.setState({ isLoading: false })
        }, this.state.timer)
    }

    componentWillUnmount() { this._isMounted = false }

    render() {
        const haveSpaceInv = () => {
            if(this.props.invItems.length <= 35) return true
            else if(this.props.invItems.length > 35) return false
        }

        const canStartGame = () => {
            if(haveSpaceInv() && !this.state.isLoading) return true
            else return false
        }

        const startActiveStyle = canStartGame() ? " active" : ""
        
        return (
            <section className="menu_section" style={styles.bg_style}>
                <div className="dark_overlay"></div>
                <div className="container">
                    <div className="box">
                        <div className="content" id="main_menu">
                            <Link 
                            to={canStartGame() ? "/game" : "/menu"} 
                            className={"menu_btn start_btn" + startActiveStyle} 
                            onClick={canStartGame() ? this.props.startGame : null}>
                            Start Game
                            </Link>
                            <Link to="/inventory" className="menu_btn inventory_btn">Inventory</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu