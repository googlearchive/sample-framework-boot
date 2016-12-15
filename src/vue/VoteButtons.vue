<template>
  <div class="post__vote-buttons">
    <button class="post__vote-down" @click="$emit('downvote')">-</button>
    <span class="post__vote-score">{{ score | format }}</span>
    <button class="post__vote-up" @click="$emit('upvote')">+</button>
  </div>
</template>

<script>
export default {
  props: ['score'],
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
  }
}
</script>
