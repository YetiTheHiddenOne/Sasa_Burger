let currentPhoto = 0;
let imagesData = [
	{
		photo: 'images-galery/Hot-Cappy.jpg',
		title: 'Hot Cappy',
		description: 'S tím u nás nikdy neuděláte chybu'
	},

	{
		photo: 'images-galery/jsme-tu-pro-vas.jpg',
		title: 'Jsme tu v�dy pro V�s!',
	},

	{
		photo: 'images-galery/okurka-burger.jpg',
		title: 'U n�s se dob�e naj�te i napijete!',
	},

	{
		photo: 'images-galery/dvojity-burger.jpg',
		title: 'Kdo si d� dvojit� burger?',
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
	currentPhoto = currentPhoto % 4;
	loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
	currentPhoto--;
	currentPhoto = (currentPhoto + 4) % 4;
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