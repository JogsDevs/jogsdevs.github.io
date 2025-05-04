document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultBox = document.getElementById('search-results');
    const modal = document.getElementById('search-modal');
  
    let fuse;
  
    fetch('/index.json')
      .then(res => res.json())
      .then(data => {
        fuse = new Fuse(data, {
          keys: ['title', 'description', 'content'],
          threshold: 0.3,
        });
  
        searchInput.addEventListener('input', () => {
          const results = fuse.search(searchInput.value.trim());
          resultBox.innerHTML = results.length
            ? results
                .map(r => `<li><a href="${r.item.url}" class="hover:underline">${r.item.title}</a></li>`)
                .join('')
            : '<li class="text-gray-500 dark:text-gray-400">Tidak ada hasil.</li>';
        });
      });
  
    // Tombol tutup ESC atau klik luar modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.add('hidden');
      }
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  