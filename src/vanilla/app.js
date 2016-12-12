/*!
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

class App {
  constructor () {
    this._upVote = this._upVote.bind(this);
    this._downVote = this._downVote.bind(this);

    const comments = document.querySelectorAll('.post__comment');
    Array.from(comments).forEach(comment => {
      const key = this._createKey();
      const upVote = comment.querySelector('.post__vote-up');
      const downVote = comment.querySelector('.post__vote-down');

      comment.dataset.key = key;
      upVote.dataset.for = key;
      downVote.dataset.for = key;

      upVote.addEventListener('click', this._upVote);
      downVote.addEventListener('click', this._downVote);
    });
  }

  _createKey () {
    let k = '';
    for (let i = 0; i < 16; i++) {
      k += String.fromCharCode(Math.floor(65 + Math.random() * 26));
    }

    return k;
  }

  _getPost (evt) {
    const key = evt.target.dataset.for;
    if (!key) {
      return null;
    }

    return document.querySelector(`.post__comment[data-key="${key}"]`);
  }

  _adjustVoteScore (evt, adjustment) {
    const post = this._getPost(evt);
    if (!post) {
      console.warn('Unable to find post');
      return;
    }

    const score = post.querySelector('.post__vote-score');
    const newScoreValue = parseInt(score.textContent, 10) + adjustment;
    score.textContent = newScoreValue === 0 ? '0' :
        newScoreValue > 0 ?
        `+${newScoreValue}` :
        `-${newScoreValue}`;
  }

  _upVote (evt) {
    this._adjustVoteScore(evt, 1);
  }

  _downVote (evt) {
    this._adjustVoteScore(evt, -1);
  }
}

new App();
