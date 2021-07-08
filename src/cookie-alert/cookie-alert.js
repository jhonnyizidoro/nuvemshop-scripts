const appendCookeAlertHTMLToDOM = (privacyPolicyLink = '/politica-de-privacidade') => {
	const cookieAlertHTML = `
				<div class="cookie__alert">
					<svg class="cookie__alert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M507.44,208.64c-1.296-6.88-6.88-12.096-13.824-12.928c-6.96-0.832-13.6,2.928-16.48,9.312c-5.072,11.2-16.208,18.992-29.12,18.976c-14.32,0.032-26.416-9.632-30.448-22.896c-2.432-8.096-10.752-12.896-18.976-10.976C393.536,191.312,388.752,192,384,192c-35.248-0.064-63.936-28.752-64-64c0-4.752,0.688-9.536,1.872-14.576c1.936-8.224-2.88-16.56-10.976-18.992C297.632,90.416,287.968,78.32,288,64c-0.016-12.928,7.776-24.048,18.976-29.12c6.384-2.88,10.144-9.536,9.312-16.48c-0.832-6.96-6.048-12.544-12.928-13.84C288.096,1.696,272.288,0,256,0C114.784,0.032,0.032,114.784,0,256c0.032,141.216,114.784,255.968,256,256c141.216-0.032,255.968-114.784,256-256C512,239.712,510.304,223.904,507.44,208.64z M414.32,414.32C373.696,454.912,317.792,480,256,480s-117.696-25.088-158.32-65.68C57.088,373.696,32,317.792,32,256S57.088,138.304,97.68,97.68C138.304,57.088,194.208,32,256,32c2.88,0,5.696,0.304,8.56,0.432C259.216,41.744,256.016,52.464,256,64c0.032,23.888,13.28,44.368,32.592,55.296C288.288,122.144,288,124.992,288,128c0.032,52.976,43.024,95.968,96,96c3.008,0,5.856-0.288,8.704-0.592C403.632,242.704,424.096,255.968,448,256c11.536-0.016,22.256-3.216,31.568-8.56c0.128,2.848,0.432,5.68,0.432,8.56C480,317.792,454.912,373.696,414.32,414.32z" />
							<circle cx="192" cy="128" r="32" />
							<circle cx="128" cy="256" r="32" />
							<circle cx="288" cy="384" r="32" />
							<circle cx="272" cy="272" r="16" />
							<circle cx="400" cy="336" r="16" />
							<circle cx="176" cy="368" r="16" />
						</svg>
						<p class="cookie__alert__content">
							Este site usa cookies e outras tecnologias que ajudam a personalizar o conteúdo de acordo com nossa <a class="cookie__alert__link" href="${privacyPolicyLink}" target="_blank" rel="nofollow">Politica de Privacidade</a>. Ao continuar navegando, você declara estar ciente dessas condições.
						</p>
						<button class="cookie__alert__button" type="button" aria-label="Concordar com o uso de cookies">Ok, entendi</button>
					</div>`

	document.body.insertAdjacentHTML('beforeend', cookieAlertHTML)
}

const appendCookieAlertStylesToDOM = (primaryColor = '#8A1D2E') => {
	const cookieAlertStyles = `
				<style>
					.cookie__alert {
						align-items: center;
						background-color: white;
						border: 1px solid #e2e2e2;
						border-radius: 10px;
						bottom: -50px;
						box-shadow: 0 34px 30px -20px rgba(0, 0, 0, 0.1);
						box-sizing: border-box;
						display: flex;
						max-width: calc(100% - 30px);
						opacity: 0;
						padding: 16px 24px;
						pointer-events: none;
						position: fixed;
						right: 50%;
						transform: translateX(50%);
						transition: 1s;
						width: 1030px;
						z-index: 99999;
					}
					.cookie__alert--active {
						bottom: 25px;
						opacity: 1;
						pointer-events: all;
					}
					.cookie__alert__icon {
						flex-shrink: 0;
						fill: #424548;
						width: 30px;
					}
					.cookie__alert__content {
						color: #424548;
						flex-grow: 1;
						font-family: 'Noto Sans JP', sans-serif;
						font-size: 14px;
						line-height: 24px;
						margin: 0 40px 0 20px;
					}
					.cookie__alert__button {
						background: ${primaryColor};
						border: 0;
						border-radius: 7px;
						color: white;
						cursor: pointer;
						font-family: 'Noto Sans JP', sans-serif;
						font-size: 14px;
						font-weight: 700;
						outline: 0;
						padding: 15px 25px;
						transition: 250ms;
						white-space: nowrap;
					}
					.cookie__alert__button:hover,
					.cookie__alert__button:focus {
						background: #424548;
					}
					.cookie__alert__link {
						color: #048DF6;
						text-decoration: none;
					}

					@media (max-width: 768px) {
						.cookie__alert {
							display: block;
						}
						.cookie__alert__content {
							margin: 20px 0;
						}
					}
				</style>
			`
	document.head.insertAdjacentHTML('beforeend', cookieAlertStyles)
}

const appendFontFamilyLinkToDOM = () => {
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href =
		'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap'
	document.head.insertAdjacentElement('beforeend', link)
}

document.addEventListener('DOMContentLoaded', () => {
	const cookiesAccepted = !!localStorage.getItem('cookiesAccepted')

	if (cookiesAccepted) {
		return
	}

	appendCookeAlertHTMLToDOM()
	appendCookieAlertStylesToDOM()
	appendFontFamilyLinkToDOM()

	const $cookieAlert = document.querySelector('.cookie__alert')
	const $cookieAlertButton = document.querySelector('.cookie__alert__button')

	setTimeout(() => {
		$cookieAlert.classList.add('cookie__alert--active')
	}, 2000)

	$cookieAlertButton.addEventListener('click', () => {
		localStorage.setItem('cookiesAccepted', 'true')
		$cookieAlert.classList.remove('cookie__alert--active')
	})
})
