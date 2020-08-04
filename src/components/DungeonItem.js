
import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Stat from "./Stat"

class DungeonItem extends React.Component {

    state = {
        isHovered: null
    }

    componentDidMount() {
        this.setState({ isHovered: false })
    }

    handleHover = (type) => {
        if(type === "Enter") this.setState({ isHovered: true })
        if (type === "Leave") this.setState({ isHovered: false })
    }

    render() {
        if(this.props.boss !== "Finished") {
            const activeClass = this.state.isHovered ? " active" : ""
    
            // boss's name color is set based on differe between Player level and Boss level
            const enemyStyle = () => {
                const diff = this.props.boss.level - this.props.currentLevel
                if(diff >= 2) return { color: "red" }
                if (diff < 2 && diff >= 1) return { color: "orange" }
                if (diff < 1 && diff >= -1) return { color: "yellow" }
                if (diff < -1) return { color: "green" } 
            }

            return (
                <div className="dungeon_item">
                    <div className="img_cont">
                        <img alt="" src={this.props.boss.currentEnemy.imgSrc} />
                        <div className="dark_overl"></div>
                    </div>
                    <div className="name" onMouseEnter={() => this.handleHover("Enter")} onMouseLeave={() => this.handleHover("Leave")} >
                        <p id="dungeon">{this.props.dungeon} ({this.props.count + 1}/5)</p>
                        <p id="enemy" style={enemyStyle()}>{this.props.boss.currentEnemy.name} ({this.props.boss.level})</p>
                    </div>
                    <div className={"stats " + activeClass} >
                        <Stat name="HP:" value={this.props.boss.maxHp} />
                        <Stat name="M-Armor:" value={this.props.boss.meleeArmor} enemy={this.props.boss} />
                        <Stat name="R-Armor:" value={this.props.boss.rangedArmor} enemy={this.props.boss} />
                        <Stat name="Strength:" value={this.props.boss.damage} />
                        <Stat name="Crit:" value={this.props.boss.critChance} />
                        <Stat name="M-Dodge:" value={this.props.boss.meleeDodgeChance} />
                        <Stat name="R-Dodge:" value={this.props.boss.rangedDodgeChance} />
                    </div>
                    <Link to="/game" onClick={() => this.props.startGame("Boss", this.props, this.props.boss)} className="enter_btn">Enter</Link>
                </div>
            )
        }
        if(this.props.boss === "Finished") {

            const finished_style = {
                backgroundImage: "url('resources/environment/dungeon.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            }

            return (
                <div className="dungeon_item finished" style={finished_style}>
                    <div className="dark-overlay"></div>
                    <div className="text">
                        <p id="dungeon">{this.props.dungeon}</p>
                        <p>Finished</p>
                    </div>
                </div>
            )
        }
    }
}

DungeonItem.propTypes = {
    currentLevel: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel
})

export default connect(mapStateToProps)(DungeonItem)