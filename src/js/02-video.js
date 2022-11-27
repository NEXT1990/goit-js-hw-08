import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('timeupdate', function () {
//   player.getCurrentTime().then(function (seconds) {
//     let timeSeconds = seconds;
//     console.log(timeSeconds);
//     localStorage.setItem('currentTimeWatchVideo', timeSeconds);
//   });
// });

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(event) {
  let timeSeconds = event.seconds;
  console.log(timeSeconds);
  localStorage.setItem('currentTimeWatchVideo', timeSeconds);
}
