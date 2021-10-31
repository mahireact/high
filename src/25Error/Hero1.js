import React from 'react'

function Hero1({heroName}) {
    if(heroName ==="joker"){
        throw new Error('not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero1
