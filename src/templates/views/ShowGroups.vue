<template>
  <div class="container">
    <div class="text-center">
      <h2>Show Lunch Groups</h2>
      <p>This is the list of generated groups</p>
    </div>
    <div class="columns">
      <!-- Render groups here -->
    </div>
  </div>
</template>

<script>
import group from '@/templates/components/Group'
import member from '@/templates/components/Member'

export default {
  name: 'showGroups',
  components: {
    group,
    member
  }
}
</script>
