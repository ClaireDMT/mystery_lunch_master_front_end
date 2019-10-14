<template>
  <div class="container">
    <div class="text-center">
      <h2>Show Lunch Groups</h2>
      <div v-if="groups.length === 0" >
        <p>You need to generate groups first!</p>
        <p>Check out the section <router-link :to="{ name: 'createGroups' }">Create Lunch Groups</router-link></p>
      </div>
      <p v-else-if="newbies === false">Sorry, no newbie this month...but don't stay alone for lunch!</p>
      <p v-else>This is the list of generated groups</p>
    </div>
    <div class="columns">
      <group v-bind:key="group.index" v-for="group in groups" :group="group">
        <member slot="manager" :member="group.members[1]"></member>
        <member slot="members" :member="group.members[0]"></member>
        <member slot="members" :member="group.members[2]"></member>
        <member slot="members" :member="group.members[3]"></member>
      </group>
    </div>
  </div>
</template>

<script>
import group from '@/templates/components/Group'
import member from '@/templates/components/Member'

import { mapState} from 'vuex'

export default {
  name: 'showGroups',
  components: {
    group,
    member
  },
  computed: mapState({
    groups: state => state.groups,
    newbies: state => state.newbies
  }),
  redirect() {
    this.$router.push('createGroups');
  }
}
</script>

