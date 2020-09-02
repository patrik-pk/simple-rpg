import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidemenu from '../Sidemenu/Sidemenu'
import ClassicGame from '../ClassicGame/ClassicGame'
import Dungeon from '../Dungeon/Dungeon'
import Inventory from '../Inventory/Inventory'
import Crafting from '../Crafting/Crafting'
import Credits from '../Credits/Credits'
import LoadSave from '../LoadSave/LoadSave'
import NotFound from '../NotFound/NotFound'

export default () => {
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
