import React from 'react';

const VeggieList = () => {
    const veggies = ['morot', 'palsternacka', 'tomat', 'selleri', 'vitlök'];
    const jsxList = veggies.map(v => (<li key={v}> {v} </li>));
    // Alternativ lösning med forEach:
    // const jsxList = [];
    // veggies.forEach(v => { jsxList.push(<li> {v} </li>); });

    const veggieRanks = [
        { id: 1, name: 'morot', score: 3 },
        { id: 2, name: 'palsternacka', score: 2.5 },
        { id: 3, name: 'tomat', score: 4 },
        { id: 4, name: 'selleri', score: 0 },
        { id: 5, name: 'vitlök', score: 5 }
    ];
    const jsxRanks = veggieRanks.map(v => (
        <li key={v.id}> {v.name} - {v.score} poäng </li>
    ))
    return (
        <div>
            <ol>
                {jsxList}
            </ol>

            <ul> {jsxRanks} </ul>
        </div>
    )
}

export default VeggieList;
