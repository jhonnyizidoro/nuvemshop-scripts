const appendProductTriggerHTMLToDOM = () => {
	const $productImage = document.querySelector('#single-product img')
	const $productName = document.querySelector('#single-product h1')

	const ProductTriggerHTML = `
		<div class="product__trigger">
			<div class="product__trigger__image__wrapper">
				<img class="product__trigger__image" src="${$productImage.src}" alt="">
			</div>
			<div class="product__trigger__content">
				<div class="product__trigger__title">${$productName.innerText}</div>
				<div class="product__trigger__text">Últimas unidades, aproveite essa oportunidade!</div>
				<button class="product__trigger__button" type="button" aria-label="Fechar alerta">Ok, entendi</button>
			</div>
		</div>
	`

	document.body.insertAdjacentHTML('beforeend', ProductTriggerHTML)
}

const appendProductTriggerStylesToDOM = (primaryColor = '#8A1D2E') => {
	const productTriggerStyles = `
		<style>
			.product__trigger {
				animation: __slideInUp 2s 1s forwards;
				background: white;
				border-radius: 8px;
				bottom: 0;
				box-shadow: 15px 34px 30px -20px rgba(0, 0, 0, 0.15);
				display: flex;
				max-width: 95%;
				overflow: hidden;
				position: fixed;
				right: 50%;
				transform: translateX(50%) translateY(100%);
				width: 380px;
				z-index: 3;
			}
			.product__trigger__image__wrapper {
				position: relative;
				width: 35%;
			}
			.product__trigger__image {
				display: block;
				height: 100%;
				object-fit: cover;
				position: absolute;
				right: 0;
				top: 0;
				width: 100%;
			}
			.product__trigger__content {
				padding: 10px;
			}
			.product__trigger__title {
				font-family: 'Noto Sans JP', sans-serif;
				font-size: 16px;
				font-weight: 700;
			}
			.product__trigger__text {
				color: #303030;
				font-family: 'Noto Sans JP', sans-serif;
				font-size: 14px;
				font-weight: 400;
				margin-bottom: 10px;
			}
			.product__trigger__button {
				background: ${primaryColor};
				border: 0;
				border-radius: 7px;
				color: white;
				cursor: pointer;
				font-family: 'Noto Sans JP', sans-serif;
				font-size: 14px;
				font-weight: 700;
				outline: 0;
				padding: 10px 25px;
				transition: 250ms;
				white-space: nowrap;
			}
			.product__trigger__button:hover,
			.product__trigger__button:focus {
				background: #424548;
			}

			@media (max-width: 768px) {
				.product__trigger__image__wrapper {
					width: 50%;
				}
			}

			@keyframes __slideInUp {
				from {
					bottom: 0;
					transform: translateX(50%) translateY(100%);
				}
				to {
					bottom: 25px;
					transform: translateX(50%);
				}
			}			
		</style>
	`
	document.head.insertAdjacentHTML('beforeend', productTriggerStyles)
}

const appendFontFamilyLinkToDOM = () => {
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href =
		'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
	document.head.insertAdjacentElement('beforeend', link)
}

document.addEventListener('DOMContentLoaded', () => {
	const now = new Date().getTime()
	const lastShownTime = Number(localStorage.getItem('productTrigger'))

	if (!isNaN(lastShownTime) && now < lastShownTime + 600000) {
		return
	}

	appendProductTriggerHTMLToDOM()
	appendProductTriggerStylesToDOM()
	appendFontFamilyLinkToDOM()

	const $productTrigger = document.querySelector('.product__trigger')
	const $productTriggerButton = document.querySelector('.product__trigger__button')

	$productTriggerButton.addEventListener('click', () => {
		const clickedTime = new Date().getTime()
		localStorage.setItem('productTrigger', String(clickedTime))
		$productTrigger.style.display = 'none'
	})
})
