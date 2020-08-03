const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://nerdflix01.herokuapp.com';

export default {
  URL,
};
