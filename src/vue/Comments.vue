<template>
  <section class="post__comments">
    <h1>Comments</h1>
    <div v-for="comment in comments" class="post__comment">
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
  </section>
</template>

<script>
import VoteButtons from './VoteButtons.vue'

export default {
  props: ['comments'],
  components: { VoteButtons }
}
</script>