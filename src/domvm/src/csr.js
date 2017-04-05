import domvm from '../node_modules/domvm/dist/nano/domvm.nano.min.js';
import { AppView } from './app';
import commentData from '../../shared/comments.js';

domvm.createView(AppView, commentData).mount(document.body);