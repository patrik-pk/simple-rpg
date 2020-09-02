import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidemenu from './components/Sidemenu/Sidemenu'
import ClassicGame from './components/ClassicGame/ClassicGame'
import Dungeon from './components/Dungeon/Dungeon'
import Inventory from './components/Inventory/Inventory'
import Crafting from './components/Crafting/Crafting'
import Credits from './components/Credits/Credits'
import LoadSave from './components/LoadSave/LoadSave'
import NotFound from './components/NotFound/NotFound'

export default function BoxRoutes() {
    return (
        <section className='page-wrapper' >
            <div className='content-container'>
                <Sidemenu />
                <div className='main-content'>
                    <Switch>
                        <Route path='/classic_game' component={ClassicGame} />
                        <Route path='/dungeon' component={Dungeon} />
                        <Route path='/inventory' component={Inventory} />
                        <Route path='/crafting' component={Crafting} />
                        <Route path='/credits' component={Credits} />
                        <Route path='/load_and_save' component={LoadSave} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </section>
    )
}
