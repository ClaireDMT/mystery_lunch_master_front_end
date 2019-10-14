<template>
  <div class="member">
    <strong>{{ member.first_name }} {{ member.last_name }}</strong>
    <small class="text-gray">
      Joined the company on: {{ member.joined_date | frontDate }}
    </small>
    <small class="text-gray">
      Works from {{ member.office | capitalize }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['member'],
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    frontDate: function(date) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return `${months[parseInt(date.slice(-2))]} ${date.slice(0, 4)}`
    }
  }
}
</script>
