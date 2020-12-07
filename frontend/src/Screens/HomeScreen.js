import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import Row from '../Components/Row'



function HomeScreen() {
    return (
        <>
        <HeaderCard/>
        
        <Row title="Best Dresses for you" category="dress" />
        <Row title="Stuffed Animals & Toys" category="children" />
        <Row title="Gamming & Computer related Stuff " category="gaming" />
        <Row title="Best wireless Products for You " category="wireless" />

        </>
    )
}

export default HomeScreen
