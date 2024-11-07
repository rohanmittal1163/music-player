let allMusic = [
	{
		name: 'Lover',
		artist: 'Diljit Dosanjh',
		img: 'https://i1.sndcdn.com/artworks-ZNC9lCwqk7fPeQ8s-ZGVfAA-t500x500.png',
		src: 'music-1',
	},
	{
		name: 'Ve hanniyaan',
		artist: 'Avvy Sra, Danny, and Sagar',
		img: 'https://c.saavncdn.com/367/Ve-Haaniyaan-Punjabi-2024-20240212220137-500x500.jpg',
		src: 'music-2',
	},

	{
		name: 'G.O.A.T',
		artist: 'Diljit Dosanjh',
		img: 'https://images.genius.com/fe9fb4c565f1636fe82dfafc3d44da6a.720x900x1.jpg',
		src: 'music-3',
	},
	{
		name: 'Ranjha',
		artist: 'jasleen royal',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uSjI7KTsiETMTPIiVLlkP6HCt-RdafRfLw&s',
		src: 'music-4',
	},

	{
		name: 'malang sajna',
		artist: 'sachet tandon',
		img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/80/f7/76/80f7760d-ab26-c17b-fe4f-ca4653af188e/8903431916303_cover.jpg/1200x1200bf-60.jpg',
		src: 'music-5',
	},
	{
		name: 'mera safar',
		artist: 'iqlipse nove',
		img: 'https://cdns-images.dzcdn.net/images/cover/23736e1685ec89278a6e904a270a7aa6/1900x1900-000000-80-0-0.jpg',
		src: 'music-6',
	},
	{
		name: 'Mi amor',
		artist: 'nova miller',
		img: 'https://c.saavncdn.com/800/Mi-Amor-Punjabi-2021-20211107115532-500x500.jpg',
		src: 'music-7',
	},
	{
		name: 'Janiye',
		artist: 'Rashmeet Kaur & Vishal Mishra',
		img: 'https://i.scdn.co/image/ab67616d0000b2736624811ee1d8d7ccf5fadb80',
		src: 'music-8',
	},
	{
		name: 'Heeriye',
		artist: 'Arijit Singh & Jasleen Royal',
		img: 'https://i.ytimg.com/vi/Qjd0eg-VqD8/maxresdefault.jpg',
		src: 'music-9',
	},
	{
		name: 'So High',
		artist: 'Sidhu Moose Wala',
		img: 'https://c.saavncdn.com/544/So-High-Punjabi-2017-20220811172517-500x500.jpg',
		src: 'music-10',
	},
	{
		name: 'laare choote',
		artist: 'Ankur Tewari',
		img: 'https://c.saavncdn.com/642/Laree-Choote-English-2021-20210326214034-500x500.jpg',
		src: 'music-11',
	},
	{
		name: 'choomantar',
		artist: 'aditi singh sharma',
		img: 'https://i.ytimg.com/vi/F_jIFDLu30Y/maxresdefault.jpg',
		src: 'music-12',
	},
	{
		name: 'Sadqay',
		artist: 'Aashir Wajahat',
		img: 'https://c.saavncdn.com/290/Sadqay-Hindi-2024-20240201170528-500x500.jpg',
		src: 'music-13',
	},
	{
		name: 'bikhra',
		artist: 'Rovalio & Abdul Hannan',
		img: 'https://c.saavncdn.com/973/Bikhra-Hindi-2020-20200124100723-500x500.jpg',
		src: 'music-14',
	},
	{
		name: 'Janam janam',
		artist: 'Pritam & Arijit singh',
		img: 'https://c.saavncdn.com/540/Janam-Janam-Trending-Version-Hindi-2023-20231005185452-500x500.jpg',
		src: 'music-15',
	},
	{
		name: 'Teri Meri kahaani',
		artist: 'Pritam & Arijit singh',
		img: 'https://media.lyricsmint.com/photos/356/terimerikahaani-gabbar-akshay-kareena-1_cover.jpg',
		src: 'music-16',
	},
	{
		name: 'Pachtaaoge',
		artist: 'Fateh & Arijit singh',
		img: 'https://c.saavncdn.com/200/Pachtaoge-From-Jaani-Ve--Hindi-2019-20190823024539-500x500.jpg',
		src: 'music-17',
	},
	{
		name: 'Kabhi jo badal barse',
		artist: 'Sachiin & Arijit singh',
		img: 'https://c.saavncdn.com/899/Kabhi-Jo-Badal-Barse-unplugged-Hindi-2015-500x500.jpg',
		src: 'music-18',
	},

	{
		name: 'Kashmir Main Tu Kanyakumari',
		artist: 'Arijit Singh, Neeti Mohan, and Sunidhi Chauhan',
		img: 'https://i1.sndcdn.com/artworks-000076260059-hi4a1q-t500x500.jpg',
		src: 'music-19',
	},
	{
		name: 'Alone',
		artist: 'Alan Walker',
		img: 'https://i.ytimg.com/vi/HhjHYkPQ8F0/sddefault.jpg?v=5e83d4ac',
		src: 'music-20',
	},
	{
		name: 'Ishq x tera mera rishta',
		artist: 'MUSTAFA ZAHID',
		img: 'https://a10.gaanacdn.com/gn_img/albums/4Z9bqo3yQn/9bqZRO1yKy/size_m.jpg',
		src: 'music-21',
	},
	{
		name: 'Galti se mistake',
		artist: 'Amit & Arijit singh',
		img: 'https://a10.gaanacdn.com/gn_img/song/kGxbnw0Ky4/xbn58m2VWy/size_m_1516001759.jpg',
		src: 'music-22',
	},
];
allMusic.sort(() => Math.random() - 0.5);

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
	musicImg.src = `${allMusic[indexNumber - 1].img}`;
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
	const currentTime = e.target.currentTime;
	const minutes = parseInt(currentTime / 60);
	let seconds = parseInt(currentTime % 60);
	seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);
	current.innerText = `${minutes}:${seconds}`;
	progressBar.style.width = `${(100 * currentTime) / audioPlayer.duration}%`;

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
