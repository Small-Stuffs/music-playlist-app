// import { songs } from './songs.js'


// const Playlist = (()=> {
// // state
//   let songs = songs
//   let currentlyPlaying = 0
//   let currentSong = new Audio(songs[currentlyPlaying].url)
//   let isPlaying = false



// // render dom
//   const playListEl = document.querySelector('.playlist')
//   const songImg = document.querySelector('img')

//   const renderDom =()=> {
//     let markup = ''
//    songImg
//     songs.forEach((songObj, index)=>{
//       markup += `
//       <li class="playlist-song flex">
//       <div class="playlist-details">
//         <div class="playlist-name">${songObj.displayName}</div>
//         <div class="playlist-artist">${songObj.artist}</div>
//       </div>
//     </li>
//       `
//     })
//     playListEl.innerHTML = markup
//   }
//   const listeners =()=> {
//     playListEl.addEventListener('click', (e)=> {
//       if(e.target && e.target.matches('.playlist-song')){
//         console.log('clicked ')
//         const listElem = e.target.parentNode
//         console.log(listElem)
//       }

//     })

//   }

//   const init = ()=> {
//     renderDom()
//     listeners()
//   }
//   return { 
//     init
//   }
// })()

// export default Playlist