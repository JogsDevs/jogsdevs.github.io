// static/js/medium-zoom.js
document.addEventListener('DOMContentLoaded', function() {
  // Cek apakah library medium-zoom sudah tersedia
  if (typeof mediumZoom === 'function') {
    const config = {
      background: 'rgba(0, 0, 0, 0.9)',
      margin: 48,
      scrollOffset: 100,
      container: { top: 60 }
    };
    
    const zoom = mediumZoom('.zoom-target', config);

    // Gunakan gambar high-res untuk zoom
    zoom.on('open', event => {
      const img = event.target;
      const zoomImg = event.detail.zoom;
      if (img.dataset.zoomSrc) {
        zoomImg.src = img.dataset.zoomSrc;
      }
    });
  } else {
    console.error('Medium Zoom library not loaded');
  }
});