if (document.querySelector('video')) {
    addVideoControls()
} else {
    console.log('No Video')
}

function addVideoControls() {
    const videoTag = document.querySelector('video')
    document.addEventListener('keydown', (event) => {
        // console.log(event.key);
        if (event.key === 'd') {
            // console.log('speed up')
            videoTag.playbackRate += .05
        } else if (event.key === 's') {
            // console.log('slow down')
            videoTag.playbackRate -= .05
        } else if (event.key === 'r') {
            // console.log('normal speed')
            videoTag.playbackRate = 1
        } else if (event.key === 'a') {
            videoTag.play()
        } else if (event.key === 'f') {
            videoTag.pause()
        } 
    })
    createVideoControlButtons(videoTag)
}

function createVideoControlButtons(videoTag) {
    let vjsControlBar = document.querySelector('.vjs-control-bar')
    
    let myPersonalVideoControls = document.createElement('div')
    myPersonalVideoControls.classList.add('my-personal-video-controls')
    
    let speedDownButton = document.createElement('button')
    let speedDownTextNode = document.createTextNode('\\/')
    speedDownButton.appendChild(speedDownTextNode)
    speedDownButton.classList.add('my-speed-control')
    speedDownButton.id = 'speed-down'
    myPersonalVideoControls.appendChild(speedDownButton)

    let speedLabel = document.createElement('lable')
    let speedLabelTextNode = document.createTextNode('1.00')
    speedLabel.appendChild(speedLabelTextNode)
    speedLabel.classList.add('my-speed-label')
    speedLabel.id = 'speed'
    myPersonalVideoControls.appendChild(speedLabel)
    
    let speedUpButton = document.createElement('button')
    let speedUpTextNode = document.createTextNode('/\\')
    speedUpButton.appendChild(speedUpTextNode)
    speedUpButton.classList.add('my-speed-control')
    speedUpButton.id = 'speed-up'
    myPersonalVideoControls.appendChild(speedUpButton)

    
    vjsControlBar.appendChild(myPersonalVideoControls)
    vjsControlBar.insertBefore(myPersonalVideoControls, vjsControlBar.childNodes[1])
  

    let cssButtonTemplate = `
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 4em;
        // -webkit-box-flex: 0;
        // flex: none;
        color: white;
        font-weight: 900;
        cursor: pointer;
    `

    let cssLabelTemplate = `
        color: #29303b;
        // border: 1px solid white;
        padding: 4px 6px;
        cursor: pointer;
        font-weight: 600;
        background-color: #f7f8fa;
        border-radius: 4px;
        font-size: 11px;
        text-align: center;
    `
    
    let mylabel = document.querySelector('.my-speed-label');
    mylabel.style = cssLabelTemplate;
    mylabel.addEventListener('click', event => {
        videoTag.playbackRate = 1.00;
        mylabel.innerHTML = videoTag.playbackRate.toFixed(2);
    })

    // mylabel.addEventListener('mouseenter', event => {
    //     mylabel.style.color = '#ff4d4d';
    // })

    // mylabel.addEventListener('onmouseleave', event => {
    //     mylabel.style.color = 'green';
    // })

    let buttons = document.querySelectorAll('.my-speed-control')
    buttons.forEach(button => {
        button.style = cssButtonTemplate;
        button.addEventListener('click', event => {
            if (event.target.id == 'speed-up') {
            // console.log('speed up')
            videoTag.playbackRate += .05
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x'
            } else if (event.target.id == 'speed-down') {
            // console.log('slow down')
            videoTag.playbackRate -= .05
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x'
            }
        })
    })

}