import "./appHeader.scss";
import header from "../../assets/img/header.png";
import nbc from "../../assets/img/nbc.png";

export const AppHeader = () => {
	return (
		<header className="header">
			<div className='container header__container'>
				<div className='headerTop'>
						<a href='https://www.homebuddy.com/' className='text-logo' target="_blank" rel="noreferrer">
								<div class="text-logo__top">
									HomeBuddy
									<span class="text-logo__dot">.</span>
								</div>
							<small className='text-logo__small'>for homeowners</small>
						</a>
						<nav className='nav'>
							<ul className='nav__list'>
								<li className='nav__item'>
									<a className='nav__anchor' href='#zipCode'>Link to form</a>
								</li>
							</ul>
						</nav>
				</div>
				<div className='headerBottom'>
					<h1 className='headerBottom__text'>
						<p>
							How
							<span className='headerBottom__text_green'>
								Over 410,000 Americans
							</span>{" "}
							Increased Their Property Value
							<span className='headerBottom__text_green'>
								{" "}
								In Under 6 Hours*
							</span>{" "}
							With This Simple Upgrade.
						</p>
						<p className='headerBottom__description'>
							Ideal for detached and semi-detached homes with sloped roofs.
						</p>
					</h1>
					<div className='headerBottom__img'>
						<figure>
							<img sizes="(max-width: 375px) 343px, 581px" src={header} alt="house" className='headerBottom__img_big' />
							<a href='https://google.com' rel="noreferrer" target="_blank">
								<img src={nbc} alt="nbc logo" className='headerBottom__img_sm' />
							</a>
							<figcaption className='visually-hidden'>
								The facade, which depicts a part of a brick wall connected to
								the siding. A coniferous tree grows against the background of
								the wall
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</header>
	);
};
