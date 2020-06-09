let currentPhoto = 0;
let imagesData = [
	{
		photo: 'images-galery/Hot-Cappy.jpg',
		title: 'Hot Cappy',
		description: 'S tím u nás nikdy neudìláte chybu'
	},

	{
		photo: 'images-galery/jsme-tu-pro-vas.jpg',
		title: 'Jsme tu vždy pro Vás!',
	},

	{
		photo: 'images-galery/okurka-burger.jpg',
		title: 'U nás se dobøe najíte i napijete!',
	},

	{
		photo: 'images-galery/dvojity-burger.jpg',
		title: 'Kdo si dá dvojitý burger?',
	},

];

let loadPhoto = (photoNumber) => {
	$('#photo').attr('src', imagesData[photoNumber].photo);
	$('#photo-title').text(imagesData[photoNumber].title);
	$('.thumbnail-container div').remove('.this-arrow');
	$(`*[data-number="${photoNumber}"]`).parent().prepend('<div class="this-arrow"></div>');
}

let i = 0;
imagesData.forEach((data) => {
	$('.thumbnail-container').append(`<div style="position: relative"><div class="hidden-title">${data.title}<div class="hidden-arrow"></div></div><img src="${data.photo}" class="thumbnail" data-number="${i}"></img></div>`);
	i++;
});

loadPhoto(currentPhoto);

$('.thumbnail').click((event) => {
	currentPhoto = $(event.target).attr('data-number');
	loadPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
	currentPhoto++;
	currentPhoto = currentPhoto % 9;
	loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
	currentPhoto--;
	currentPhoto = (currentPhoto + 9) % 9;
	loadPhoto(currentPhoto);
});

$('.text-container').hover(() => {
	$('#photo-description').text(imagesData[currentPhoto].description);
}, () => {
	$('#photo-description').text("");
});

$('.thumbnail').hover((event) => {
	$(event.target).parent().children('.hidden-title').css('visibility', 'unset');
}, (event) => {
	$(event.target).parent().children('.hidden-title').css('visibility', 'hidden');
});