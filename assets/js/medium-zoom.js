import mediumZoom from 'medium-zoom';

export function initMediumZoom() {
  const zoom = mediumZoom('.zoom-target', {
    margin: 48,
    background: 'rgba(0, 0, 0, 0.9)',
    scrollOffset: 100,
    container: {
      top: 60
    },
    template: '#zoom-template' // Untuk kustomisasi template
  });

  // Gunakan gambar high-res untuk zoom
  zoom.on('open', event => {
    const img = event.target;
    const zoomImg = event.detail.zoom;
    if (img.dataset.zoomSrc) {
      zoomImg.src = img.dataset.zoomSrc;
    }
  });
}

document.addEventListener('DOMContentLoaded', initMediumZoom);