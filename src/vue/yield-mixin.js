const hasIRC = typeof requestIdleCallback !== 'undefined'

export default {
  beforeMount () {
    if (!hasIRC) return
    const render = this.$options.render
    this.$options.render = function delayedRender (h) {
      if (this.hasRendered) {
        this.$options.render = render
        return render.call(this, h)
      } else if (!this.pendingRender) {
        this.pendingRender = true
        requestIdleCallback(() => {
          this.hasRendered = true
          this.$forceUpdate()
        })
      }
    }
  }
}
