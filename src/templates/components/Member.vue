<template>
  <div class="member">
    <strong>{{ name }}</strong>
    <small class="text-gray">
      Joined the company on: {{ joined_date }}
    </small>
    <small class="text-gray">
      Works from {{ office }}
    </small>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    office: String,
    joined_date: String
  }
}
</script>
