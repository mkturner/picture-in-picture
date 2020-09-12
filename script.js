// let corsProxyServer = https://gentle-plains-15721.herokuapp.com/ ;

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Pass selected media strem to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(`Whoopsie: ${error}`);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start PiP
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();