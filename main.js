import App from './App.svelte';
import './style.css';

const app = new App({
  target: document.getElementById('app'),
  props: {
    titleColor: '#ccc',
    backgroundColor: '#c43caa',
  },
});

export default app;
