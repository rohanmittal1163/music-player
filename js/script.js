let allMusic = [
	{
		name: 'Lover',
		artist: 'Diljit Dosanjh',
		img: 'music-1',
		src: 'music-1',
	},
	{
		name: 'Ve hanniyaan',
		artist: 'Avvy Sra, Danny, and Sagar',
		img: 'music-2',
		src: 'music-2',
	},

	{
		name: 'G.O.A.T',
		artist: 'Diljit Dosanjh',
		img: 'music-3',
		src: 'music-3',
	},
	{
		name: 'Ranjha',
		artist: 'jasleen royal',
		img: 'music-4',
		src: 'music-4',
	},

	{
		name: 'malang sajna',
		artist: 'sachet tandon',
		img: 'music-5',
		src: 'music-5',
	},
	{
		name: 'mera safar',
		artist: 'iqlipse nove',
		img: 'music-6',
		src: 'music-6',
	},
	{
		name: 'Mi amor',
		artist: 'nova miller',
		img: 'music-7',
		src: 'music-7',
	},
	{
		name: 'Janiye',
		artist: 'Rashmeet Kaur & Vishal Mishra',
		img: 'music-8',
		src: 'music-8',
	},
	{
		name: 'Heeriye',
		artist: 'Arijit Singh & Jasleen Royal',
		img: 'music-9',
		src: 'music-9',
	},
	{
		name: 'So High',
		artist: 'Sidhu Moose Wala',
		img: 'music-10',
		src: 'music-10',
	},
	{
		name: 'laare choote',
		artist: 'Ankur Tewari',
		img: 'music-11',
		src: 'music-11',
	},
	{
		name: 'choomantar',
		artist: 'aditi singh sharma',
		img: 'music-12',
		src: 'music-12',
	},
	{
		name: 'Sadqay',
		artist: 'Aashir Wajahat',
		img: 'music-13',
		src: 'music-13',
	},
	{
		name: 'bikhra',
		artist: 'Rovalio & Abdul Hannan',
		img: 'music-14',
		src: 'music-14',
	},
];
const wrapper = document.querySelector('.wrapper');
const musicName = document.querySelector('.song-details .name');
const musicArtist = document.querySelector('.song-details .artist');
const musicImg = document.querySelector('.img-area img');
const audioPlayer = document.querySelector('#audio');
const playPause = document.querySelector('.play-pause');
const playPauseBtn = document.querySelector('.play-pause i');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progressBar = document.querySelector('.progress-bar');
const progressArea = document.querySelector('.progress-area');
const current = document.querySelector('.current');
const durationContent = document.querySelector('.duration');
const repeatBtn = document.querySelector('#repeat');
const queue = document.querySelector('#queue');
const musicList = document.querySelector('.music-list');
const closeList = document.querySelector('.cross');
const ulTag = document.querySelector('.music-list ul');
const allLiTag = document.querySelectorAll('.music-list ul li');
const expand = document.querySelector('#expand');
const download = document.querySelector('#download');

let musicIndex = 1;
expand.onclick = () => {
	let isExpand = expand.innerText == 'expand_more';
	expand.innerText = isExpand ? 'expand_less' : 'expand_more';
	if (expand.innerText == 'expand_more') {
		wrapper.classList.remove('hh');
	} else {
		musicList.classList.remove('show');
		wrapper.classList.add('hh');
	}
};
for (let i = 0; i < allMusic.length; i++) {
	let output = `<li li-index="${
		i + 1
	}" class= "" onclick='clicked(this)'><audio class="${
		allMusic[i].src
	}" src="audio/${
		allMusic[i].src
	}.mp3"></audio><div class="row2"><p class="name">${
		allMusic[i].name
	}</p><p class="artist">${allMusic[i].artist}</p></div><p id="${
		allMusic[i].src
	}" class="audio-duration">3:30</p></li>`;
	ulTag.insertAdjacentHTML('beforeend', output);
	let liAudiotag = ulTag.querySelector(`.${allMusic[i].src}`);
	let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`);
	liAudiotag.onloadeddata = () => {
		let liMin = Math.floor(liAudiotag.duration / 60);
		let liSec = Math.floor(liAudiotag.duration % 60);
		liSec < 10 ? (liSec = `0${liSec}`) : (liSec = liSec);
		liAudioDuration.innerText = `${liMin}:${liSec}`;
	};
}

window.onload = () => {
	load(musicIndex);
};
function load(indexNumber) {
	musicImg.src = `images/${allMusic[indexNumber - 1].img}.jpg `;
	musicImg.title = allMusic[indexNumber - 1].name;
	musicName.innerText = allMusic[indexNumber - 1].name;
	musicArtist.innerText = allMusic[indexNumber - 1].artist;
	audioPlayer.src = `audio/${allMusic[indexNumber - 1].src}.mp3`;
}
function playMusic() {
	playPause.classList.add('paused');
	audioPlayer.play();
	playPauseBtn.innerText = 'pause';
}
function clicked(e) {
	musicIndex = e.getAttribute('li-index');
	load(musicIndex);
	playMusic();
}

function pauseMusic() {
	playPause.classList.remove('paused');
	audioPlayer.pause();
	playPauseBtn.innerText = 'play_arrow';
}
playPause.onclick = () => {
	const isMusicPaused = playPause.classList.contains('paused');
	isMusicPaused ? pauseMusic() : playMusic();
};

function nextMusic() {
	musicIndex++;
	musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
	load(musicIndex);
	playMusic();
}

function prevMusic() {
	musicIndex--;
	musicIndex === 0 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
	load(musicIndex);
	playMusic();
}
prev.onclick = () => {
	prevMusic();
};
next.onclick = () => {
	nextMusic();
};
audioPlayer.ontimeupdate = (e) => {
	console.log(e);
	const currentTime = e.target.currentTime;
	const minutes = parseInt(currentTime / 60);
	let seconds = parseInt(currentTime % 60);
	seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);
	current.innerText = `${minutes}:${seconds}`;

	audioPlayer.onloadeddata = (e) => {
		const durationMin = parseInt(audioPlayer.duration / 60);
		let durationSec = parseInt(audioPlayer.duration % 60);
		durationSec < 10
			? (durationSec = `0${durationSec}`)
			: (durationSec = durationSec);

		durationContent.innerText = `${durationMin}:${durationSec}`;
	};
};

repeatBtn.onclick = () => {
	let getText = repeatBtn.innerText;
	switch (getText) {
		case 'repeat':
			repeatBtn.innerText = 'repeat_one';
			repeatBtn.setAttribute('title', 'song looped');
			break;
		case 'repeat_one':
			repeatBtn.innerText = 'shuffle';
			repeatBtn.setAttribute('title', 'playback shuffle');
			break;
		case 'shuffle':
			repeatBtn.innerText = 'repeat';
			repeatBtn.setAttribute('title', 'playlist looped');
			break;
	}
};

audioPlayer.onended = () => {
	let getText = repeatBtn.innerText;
	switch (getText) {
		case 'repeat':
			nextMusic();
			break;
		case 'repeat_one':
			audioPlayer.currentTime = 0;
			load(musicIndex);
			playMusic();
			break;
		case 'shuffle':
			let randomIndex = Math.floor(Math.random() * allMusic.length + 1);
			while (musicIndex == randomIndex) {
				randomIndex = Math.floor(Math.random() * allMusic.length + 1);
			}
			musicIndex = randomIndex;
			load(musicIndex);
			playMusic();
			break;
	}
};
queue.onclick = () => {
	musicList.classList.add('show');
};

closeList.onclick = () => {
	musicList.classList.remove('show');
};

download.onclick = () => {
	const link = document.createElement('a');
	link.download = `${allMusic[musicIndex - 1].name}.mp3`;
	link.href = `audio/music-${musicIndex}.mp3`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
