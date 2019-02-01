/**
  参考例子：
  A canvas experiment by Kenneth Cachia
  http://www.kennethcachia.com/shape-shifter/
  https://github.com/kennethcachia/Shape-Shifter
*/

<template>
  <div
    class="triangle-background"
    @click="init"
  >
    <canvas
      ref="canvas"
      class="canvas"
    />
  </div>
</template>

<script>
  export default {
    name: 'TriangleBackground',
    data() {
      return {
        canvas: {},
        context: {},
        dpr: window.devicePixelRatio || 1,
        width: window.innerWidth,
        height: window.innerHeight,
        f: 90, // 初始距离
        m: Math,
        r: 0,
        arr: []
      }
    },
    created() {
    },
    mounted() {
      this.canvas = this.$refs.canvas
      this.context = this.$refs.canvas.getContext('2d')
      this.canvas.height = this.height * this.dpr
      this.canvas.width = this.width * this.dpr
      this.context.scale(this.dpr, this.dpr)
      this.context.globalAlpha = 0.6
      this.init()
    },
    methods: {
      init() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.arr = [{
          x: 0,
          y: this.height * 0.7 + this.f
        }, {
          x: 0,
          y: this.height * 0.7 - this.f
        }]
        while (this.arr[1].x < this.width + this.f) this.draw(this.arr[0], this.arr[1])
      },
      draw(op1, op2) {
        const random = this.m.random()
        const pi = this.m.PI * 2
        this.context.beginPath()
        this.context.moveTo(op1.x, op1.y)
        this.context.lineTo(op2.x, op2.y)
        const k = op2.x + (random * 2 - 0.25) * this.f
        const n = this.nextFn(op2.y)
        this.context.lineTo(k, n)
        this.context.closePath()
        this.r -= pi / -50
        const r1 = this.m.cos(this.r) * 127 + 128 << 16
        const r2 = this.m.cos(this.r + pi / 3) * 127 + 128 << 8
        const r3 = (this.m.cos(this.r + pi / 3 * 2) * 127 + 128).toString(16)
        this.context.fillStyle = `#${r1 | r2 | r3}`
        this.context.fill()
        const temp = this.arr[1]
        this.arr[0] = temp
        this.arr[1] = {
          x: k,
          y: n
        }
      },
      nextFn(p) {
        const t = p + (this.m.random() * 2 - 1.1) * this.f
        return (t > this.height || t < 0) ? this.nextFn(p) : t
      }
    }
  }
</script>

<style lang="scss" scoped>
  .triangle-background{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(to bottom, rgb(255, 255, 238) 0%, rgb(255, 187, 153) 120%);
  }
</style>
