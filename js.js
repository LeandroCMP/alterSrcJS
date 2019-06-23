
function alterImg() {
	var source = document.getElementById('image');
	source.src = 'image2.jpg';

	var fav = document.getElementById('fav');
	fav.href = 'image1.jpeg';
}

function recoverImg(){
	var recover = document.getElementById('image');
	recover.src = 'image1.jpeg'

	var fav = document.getElementById('fav');
	fav.href = 'image2.jpg';
}
