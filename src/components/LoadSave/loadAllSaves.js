import React from 'react'
import SaveItem from './SaveItem'

export default (loadData, deleteData) => {
    const savesArr = []
    
    // loop through localStorage and create save item for each index
    for (let i = 0; i < 4; i++) {
        if (i < localStorage.length) {
            const key = localStorage.key(i)
            let item = localStorage.getItem(key)
            item = JSON.parse(item)
    
            const date = key.slice(3)
    
            savesArr.push({
                itemState: item,
                render: <SaveItem
                    key={key}
                    id={key}
                    date={date}
                    level={item.character.currentLevel}
                    onLoad={loadData}
                    onDelete={deleteData}
                />
            })
        } else {
            savesArr.push({ render: <SaveItem key={i} id='empty' /> })
        }
    }
    
    return savesArr
}