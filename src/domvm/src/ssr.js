import domvm from '../node_modules/domvm/dist/client/domvm.client.min.js';
import { AppView } from './app';
import commentData from '../../shared/comments.js';

domvm.createView(AppView, commentData).attach(document.querySelector('.app'));