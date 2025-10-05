const b = document.getElementById('burger'),
      m = document.getElementById('menu'),
      o = document.getElementById('icon-open'),
      c = document.getElementById('icon-close');
b.onclick = () => {
  m.classList.toggle('hidden');
  o.classList.toggle('hidden');
  c.classList.toggle('hidden');
};