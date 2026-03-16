// Function to add a video
function addVideo(title, url) {
  const container = document.createElement('div');
  container.classList.add('video-wrapper');

  container.innerHTML = `
    <h2>${title}</h2>
    <div class="video-container">
      <iframe src="${url}" allowfullscreen></iframe>
    </div>
  `;

  document.body.appendChild(container);
}

// Add your videos here
addVideo("Trying to beat Hornet", "https://1drv.ms/v/c/691353a0235f2b9c/IQQct8rSnD_uQbFi-Ov2pwPGAfF1WuhHiKeuJah4P28HADo?width=1280&height=720");

// Example: add more videos later
// addVideo("Another cool vid", "YOUR_VIDEO_URL_HERE");