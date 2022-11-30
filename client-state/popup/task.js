const subscribeModal = document.getElementById('subscribe-modal');
const modalCloseTimes = document.querySelector('.modal__close_times');

if (!getCookie('thePageHasBeenLoaded')) {
    subscribeModal.classList.add('modal_active');
    setCookie('thePageHasBeenLoaded', true);
    modalCloseTimes.addEventListener('click', () => {
        subscribeModal.classList.remove('modal_active');
    })
}
function setCookie(name,value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='));
  if(cookie !== undefined) {
    return cookie.substr(name.length + 1); 
  }
  return false;
}