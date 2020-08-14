import React, { useState } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import landingPage from 'json/landingPage.json'
import Categories from 'parts/Categories'
const LandingPage = (props) => {
	const [refMostPicked, setrefMostPicked] = useState(React.createRef)
	return (
		<>
			<Header {...props}></Header>
			<Hero refMostPicked={refMostPicked} data={landingPage.hero}></Hero>
			<MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked}></MostPicked>
			<Categories data={landingPage.categories}></Categories>
		</>
	)
}

export default LandingPage
