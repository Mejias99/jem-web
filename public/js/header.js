export function initHeader(root = document) {
  const btn  = root.querySelector('#menu-toggle');
  const menu = root.querySelector('#menu');
  const l1 = root.querySelector('#line1');
  const l2 = root.querySelector('#line2');
  const l3 = root.querySelector('#line3');
  if (!btn || !menu || !l1 || !l2 || !l3) return;

  const setOpen = (open) => {
    if (open) {
      menu.removeAttribute('hidden');
      menu.style.maxHeight = menu.scrollHeight + 'px';
      btn.setAttribute('aria-label', 'Cerrar menú');
      btn.setAttribute('aria-expanded', 'true');
      l1.classList.add('translate-y-[7px]', 'rotate-45');
      l2.classList.add('opacity-0');
      l3.classList.add('-translate-y-[7px]', '-rotate-45');
      document.body.style.overflow = 'hidden';
    } else {
      // anima a 0 y luego aplica hidden al finalizar
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.offsetHeight; // forzar reflow
      menu.style.maxHeight = '0px';
      btn.setAttribute('aria-label', 'Abrir menú');
      btn.setAttribute('aria-expanded', 'false');
      l1.classList.remove('translate-y-[7px]', 'rotate-45');
      l2.classList.remove('opacity-0');
      l3.classList.remove('-translate-y-[7px]', '-rotate-45');
      document.body.style.overflow = '';

      const onEnd = (e) => {
        if (e.propertyName === 'max-height') {
          menu.setAttribute('hidden', '');
          menu.removeEventListener('transitionend', onEnd);
        }
      };
      menu.addEventListener('transitionend', onEnd);
    }
  };

  btn.addEventListener('click', () => setOpen(menu.hasAttribute('hidden')));

  // ESC para cerrar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hasAttribute('hidden')) setOpen(false);
  });

  // Clic fuera
  document.addEventListener('click', (e) => {
    if (!root.contains(e.target) && !menu.hasAttribute('hidden')) setOpen(false);
  });

  // Cerrar al hacer clic en un enlace del nav
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // Recalcular altura si cambia el viewport con el menú abierto
  window.addEventListener('resize', () => {
    if (!menu.hasAttribute('hidden')) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
    }
  });
}