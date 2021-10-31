import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                iam {person.name}.Iam {person.age} from namelist one {person.skills}
            </h2>
        </div>
    )
}

export default Person
