(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Вкладки */
  const tabs = $$('[role=tab]'), panels = $$('[role=tabpanel]');
  function showTab(id) {
    tabs.forEach(t => { const on = t.dataset.tab === id; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    panels.forEach(p => p.hidden = p.dataset.panel !== id);
    $('#chips').hidden = id !== 'places';
  }
  tabs.forEach(t => t.addEventListener('click', () => {
    showTab(t.dataset.tab);
    history.replaceState(null, '', '#' + t.dataset.tab);
    window.scrollTo({ top: Math.max(0, $('.tabs').offsetTop - 1), behavior: 'smooth' });
  }));
  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (tabs.some(t => t.dataset.tab === h)) return showTab(h);
    showTab('places');
    const el = h && document.getElementById(h);
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }
  addEventListener('hashchange', fromHash); fromHash();

  /* Галереи и просмотр фото */
  const lb = $('#lb'), lbImg = $('.lb__img', lb), lbCount = $('.lb__count', lb);
  let list = [], cur = 0;
  function show(i) { cur = (i + list.length) % list.length; lbImg.src = list[cur]; lbCount.textContent = (cur + 1) + ' / ' + list.length; }
  $('.lb__prev', lb).onclick = () => show(cur - 1);
  $('.lb__next', lb).onclick = () => show(cur + 1);
  $('.lb__close', lb).onclick = () => lb.close();
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
  lb.addEventListener('close', () => { lbImg.removeAttribute('src'); });
  let x0 = null;
  lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => { if (x0 === null) return; const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1)); x0 = null; });

  $$('[data-gallery]').forEach(g => {
    const track = $('.gallery__track', g), items = $$('.gallery__item', g);
    const prev = $('.gallery__nav--prev', g), next = $('.gallery__nav--next', g), count = $('.gallery__count', g);
    const urls = items.map(b => $('img', b).src);
    function update() {
      const step = items[0].offsetWidth + 12;
      count.textContent = (Math.min(items.length, Math.round(track.scrollLeft / step) + 1)) + ' / ' + items.length;
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    }
    let raf; track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }, { passive: true });
    prev.onclick = () => track.scrollBy({ left: -track.clientWidth * .8, behavior: 'smooth' });
    next.onclick = () => track.scrollBy({ left: track.clientWidth * .8, behavior: 'smooth' });
    items.forEach((b, i) => b.addEventListener('click', () => { list = urls; show(i); lb.showModal(); }));
    addEventListener('resize', update); update();
  });

  /* Карты подгружаются по нажатию */
  $$('[data-map]').forEach(btn => btn.addEventListener('click', () => {
    const box = $('.map', btn.closest('[data-card]'));
    if (!box.hidden) { box.hidden = true; box.innerHTML = ''; btn.textContent = 'Показать карту'; return; }
    const f = document.createElement('iframe');
    f.src = btn.dataset.map; f.loading = 'lazy'; f.title = 'Карта'; f.allowFullscreen = true;
    box.append(f); box.hidden = false; btn.textContent = 'Скрыть карту';
  }));

  /* Подсветка текущего места в списке ссылок */
  const chips = $$('.chip');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) chips.forEach(c => c.classList.toggle('is-active', c.hash === '#' + e.target.id));
  }), { rootMargin: '-30% 0px -60% 0px' });
  $$('.place').forEach(p => io.observe(p));
})();
