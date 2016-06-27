import noUiSlider from 'nouislider';
const slider = document.getElementById('rangeSlider');

noUiSlider.create(slider, {
	start: [40],
	connect: 'lower',
	range: {
		min: 0,
		max: 100
	}
});
const handle = slider.querySelector( '.noUi-handle' );
const base = slider.querySelector( '.noUi-base' );
//	show value
function jsVal() {
	const jsValue = document.querySelector('.js-level__level-value');
	const value = Number( slider.noUiSlider.get() );
	jsValue.innerHTML = Math.round(value);
	return;
}
handle.setAttribute( 'tabindex', 0 );
base.addEventListener( 'click', function () {
	handle.focus();
	jsVal();
});
handle.addEventListener( 'click', function () {
	this.focus();
});
handle.addEventListener( 'keydown', function ( e ) {

	const value = Number( slider.noUiSlider.get() );

	switch ( e.which ) {
		case 37: slider.noUiSlider.set( value - 5 );
			break;
		case 39: slider.noUiSlider.set( value + 5 );
			break;
	}
	jsVal();
});
base.addEventListener( 'wheel', function (e) {
	const value = Number( slider.noUiSlider.get() );
	const delta = e.deltaY || e.detail || e.wheelDelta;
	e.preventDefault();
	handle.focus();
	slider.noUiSlider.set( value + delta / 10 );
	jsVal();
});
