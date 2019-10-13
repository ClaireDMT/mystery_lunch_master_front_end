<template>
  <div id="app">
    <h3 class="app__title">
      🍔 Mystery Lunch Generator!🍉
    </h3>

    <navigation />

    <router-view/>
  </div>
</template>

<script>
import navigation from '@/templates/components/Navigation'

export default {
  components: {
    navigation
  }
}
</script>
