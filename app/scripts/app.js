import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import noUiSlider from 'nouislider';

$(() => {
	svg4everybody();
});
const slider = document.getElementById('rangeSlider');
noUiSlider.create(slider, {
	start: [35],
	connect: 'lower',
	range: {
		min: 0,
		max: 100
	}
});
