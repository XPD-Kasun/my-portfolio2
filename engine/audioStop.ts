export default function audioStop(audioEl:HTMLAudioElement) {

       reduceVolume(audioEl, () => {
              audioEl.pause();
              audioEl.src = '';
       });


}

function reduceVolume(audioEl: HTMLAudioElement, done) {

       setTimeout(() => {
              audioEl.volume -= 0.1;
              if(audioEl.volume < 0.1) {
                     done();
                     return;
              }
              reduceVolume(audioEl, done);
       }, 100);
}