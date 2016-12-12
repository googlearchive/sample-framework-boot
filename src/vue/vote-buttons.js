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

export default {
  props: ['score'],
  methods: {
    upVote () {
      this.score++;
    },

    downVote () {
      this.score--;
    }
  },
  filters: {
    format (score) {
      if (score === 0) {
        return '0';
      }

      if (score > 0) {
        return `+${score}`;
      }

      return score.toString();
    }
  },
  template: `
    <div class="post__vote-buttons">
        <button class="post__vote-down" v-on:click="downVote">-</button>
        <span class="post__vote-score">{{ score | format }}</span>
        <button class="post__vote-up" v-on:click="upVote">+</button>
      </div>
  `
};
