import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidemenu from './components/sidemenu/Sidemenu'
import HomePage from './components/HomePage'
import ClassicGame from './components/classic_game/ClassicGame'
import Dungeon from './components/Dungeon'
import Inventory from './components/inventory/Inventory'
import Crafting from './components/Crafting'
import Credits from './components/Credits'
import NotFound from './components/NotFound'

export default function BoxRoutes() {
    return (
        <section className='page-wrapper' >
            <div className='content-container'>
                <Sidemenu />
                <div className='main-content'>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/classic_game' component={ClassicGame} />
                        <Route path='/dungeon' component={Dungeon} />
                        <Route path='/inventory' component={Inventory} />
                        <Route path='/crafting' component={Crafting} />
                        <Route path='/credits' component={Credits} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </section>
    )
}
