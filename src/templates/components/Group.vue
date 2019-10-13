<template>
  <div class="card col-6">
    <div class="card-header">
      <h3 class="text-primary">
        Group {{ type }}
      </h3>
      <div class="divider" />
    </div>
    <div class="card-body">
      <h6>Manager:</h6>
      <slot name="manager"/>
      <hr>
      <h6>Other members of the group:</h6>
      <slot name="members"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
