<template>
  <div class="dogs">
    <div class="todo-item" v-for="(item, index) in DOGS" :key="item">
      <div class="dogs__item">{{ index }}: {{ item }}</div>
    </div>
    <!-- <button @click="$store.dispatch('GET_DOGS')">Next 20</button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DogList',
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(['DOGS']),
  },
  methods: {
    scroll_init() {
      window.onscroll = () => {
        const scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight,
        );
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight
        === scrollHeight;
        if (bottomOfWindow) {
          this.$store.dispatch('GET_DOGS');
        }
      };
    },
  },
  mounted() {
    this.$store.dispatch('GET_DOGS');
    this.scroll_init();
  },
};
</script>
