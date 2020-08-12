import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './components/Menu'
import Dungeon from './components/Dungeon'
import Inventory from './components/inventory/Inventory'
import NotFound from './components/NotFound'

export default function BoxRoutes() {
    return (
        <section className='container' >
            <div className='box'>
                <Switch>
                    <Route path='/menu' component={Menu} />
                    <Route path='/dungeon' component={Dungeon} />
                    <Route path='/inventory' component={Inventory} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </section>
    )
}
