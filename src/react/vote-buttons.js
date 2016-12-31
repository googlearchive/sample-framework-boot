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

export default class VoteButtons extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      score: this.props.score
    };

    this.onVoteUp = this.onVoteUp.bind(this);
    this.onVoteDown = this.onVoteDown.bind(this);
  }

  onVoteUp () {
    this.setState({
      score: ++this.state.score
    });
  }

  onVoteDown () {
    this.setState({
      score: --this.state.score
    });
  }

  render () {
    const score = this.state.score;
    return (
      <div className="post__vote-buttons">
        <button className="post__vote-down" onClick={this.onVoteDown}>-</button>
        <span className="post__vote-score">{
          score === 0 ? '0' :
              score > 0 ? '+' + score : score
        }</span>
        <button className="post__vote-up" onClick={this.onVoteUp}>+</button>
      </div>
    );
  }
}
