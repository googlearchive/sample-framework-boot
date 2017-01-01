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

/* eslint-env es6 */

import {h, Component} from 'preact';
import VoteButtons from './vote-buttons';

const Comments = ({ comments }) =>
  <section class="post__comments">
    <h1>Comments</h1>
    {
      comments.map((c, index) =>
        <div class="post__comment" key={index}>
          <h2 class="post__comment-author">{c.username} wrote</h2>
          <p class="post__comment-text">
            {c.text}
          </p>

          <VoteButtons score={c.score} />
        </div>
      )
    }
  </section>;

export default Comments;