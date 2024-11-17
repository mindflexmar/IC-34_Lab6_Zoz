const images = [
    "https://primamediamts.servicecdn.ru/f/original/3569/3568192.jpg?2d2dfc8d3ae1c3637387b1005054a699",
    "https://pbs.twimg.com/profile_images/1264968926578061315/r3W8qHXB_400x400.jpg",
    "https://www.5.ua/media/pictures/original/225696.jpg?t=1628081020",
    "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg"
  ];

  let currentIndex = 0;
  let slideshowInterval;

  function startSlideshow() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const interval = parseInt(document.getElementById("interval").value);

    const slideshow = document.getElementById("slideshow");
    slideshow.style.width = `${width}px`;
    slideshow.style.height = `${height}px`;

    if (slideshowInterval) clearInterval(slideshowInterval);

    slideshowInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; 
      slideshow.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" style="width: ${width}px; height: ${height}px;">`;
    }, interval);
  }

  function stopSlideshow() {
    clearInterval(slideshowInterval);
  }