<template>
  <div class="post__comment">
    <h2 class="post__comment-author">{{ comment.username }} wrote</h2>
    <p class="post__comment-text">
      {{ comment.text }}
    </p>
    <vote-buttons
      :score="comment.score"
      @upvote="comment.score++"
      @downvote="comment.score--">
    </vote-buttons>
  </div>
</template>

<script>
import yieldMixin from './yield-mixin'
import VoteButtons from './VoteButtons.vue'

export default {
  props: ['comment'],
  mixins: __SSR__ ? null : [yieldMixin],
  components: { VoteButtons }
}
</script>
