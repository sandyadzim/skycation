import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icon/icon-cities.svg'
import IconTravelers from 'assets/images/icon/icon-traveler.svg'
import IconTreasure from 'assets/images/icon/icon-treasure.svg'

import Button from 'elements/Button'
import numberFormat from 'utils/FormatNumber'

const Hero = (props) => {
	const showMostPicked = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: 'smooth',
		})
	}

	return (
		<section className="container pt-4">
			<div className="row align-items-center">
				{/* KIRI */}
				<div className="col-md-6">
					<h1 className="font-weight-bold line-height-1 mb-3">
						Forget Busy Work, <br />
						Start Next Vacation
					</h1>
					<p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: '170%' }}>
						We provide what you need to enjoy your holiday with family. Time to make another memorable moments
					</p>
					<Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
						Show Me Now
					</Button>

					<div className="row" style={{ marginTop: 80 }}>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img src={IconTravelers} alt={`${props.data.travelers} Travelers`} width="36" height="36" />
							<h6 className="mt-3">
								{numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
							</h6>
						</div>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img src={IconTreasure} alt={`${props.data.treasure} Treasure`} width="36" height="36" />
							<h6 className="mt-3">
								{numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">treasure</span>
							</h6>
						</div>
						<div className="col-auto">
							<img src={IconCities} alt={`${props.data.cities} Cities`} width="36" height="36" />
							<h6 className="mt-3">
								{numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
							</h6>
						</div>
					</div>
				</div>
				{/* END KIRI */}
				{/* KANAN */}
				<div className="col-md-6">
					<div style={{ width: 520, height: 410 }}>
						<img
							src={ImageHero}
							alt="Room with couches"
							className="img-fluid position-absolute"
							style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
						/>
						<img
							src={ImageHero_}
							alt="Room with frame"
							className="img-fluid position-absolute"
							style={{ margin: '-15px 0 0 -15px' }}
						/>
					</div>
				</div>
				{/* END KANAN */}
			</div>
		</section>
	)
}

export default Hero
