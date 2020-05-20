<template>
  <div class="home">
    <DogList msg="Welcome to Dogs Site"/>
  </div>
</template>

<script>
import DogList from '@/components/DogList.vue';

export default {
  name: 'Home',
  components: {
    DogList,
  },
};
</script>
