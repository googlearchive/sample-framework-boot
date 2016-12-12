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

import {h, render, Component} from 'preact';
import Comments from './Comments';
import commentData from '../shared/comments.js';

class App extends Component {
  render () {
    return (
      <section class="post">
        <h1 class="post__title">A post about priorities and scheduling</h1>
        <a href="#" class="post__link">http://example.com/post</a>
        <div class="post__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci mauris, euismod quis imperdiet eu, lacinia in leo. Mauris in orci sit amet eros finibus molestie. Vivamus laoreet, nibh eget ultrices consequat, leo mauris suscipit libero, eget feugiat enim turpis ac neque. Nam venenatis dolor ac posuere rhoncus.</p>
          <p>In eget finibus sapien, sit amet tempus augue. Pellentesque eu interdum nulla, sit amet dictum turpis. Sed ut lorem quis purus aliquet egestas. Nulla id risus ex. Morbi et lacinia risus. Integer eget ornare arcu. Donec purus est, dignissim a ante a, lacinia placerat massa. Donec quis lacinia lorem.</p>
        </div>

        <Comments comments={commentData} />
      </section>
    );
  }
}

const post = document.querySelector('.post');
render(<App/>, post.parentNode, post);
