<template>
  <div v-if="groups.length === 0" class="container">
    <div  class="text-center">
      <h2>Create Lunch Groups</h2>
      <p >People are getting hungry! Lets create those groups.</p>
    </div>
    <div class="text-center">
      <button @click="createGroups(); redirect()" class="btn btn-lg btn-success">Create Groups</button>
    </div>
  </div>
  <div v-else class="container">
    <div  class="text-center">
      <h2>Lunch Groups created!</h2>
      <p @click="redirect">Check out the section <router-link :to="{ name: 'showGroup' }">Show Lunch Groups</router-link></p>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'


export default {
  name: 'createGroups',
  computed: mapState({
    groups: state => state.groups
  }),
  methods: {
    createGroups() {
      this.$store.dispatch('createGroups');
    },
    redirect() {
      this.$router.push('showGroups');
    }
  }
}
</script>
