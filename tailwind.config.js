module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/components/drop-btn.vue",
    "./src/components/dropdown.vue"
  ],
  theme: {
    extend: {},
    maxWidth: {
      '960': '960px'
    },
    colors: {
      'blue': '#11B3FE',
      'dark-blue': '#0095E0',
      'red': '#E03F3F',
      'grey': '#F6F7F8',
      'stroke-grey': '#E3EBEF',
      'font-black': '#282828',
      'font-grey': '#80A2B6',
      'white': '#FFF'
    }
  },
  plugins: [],
}
