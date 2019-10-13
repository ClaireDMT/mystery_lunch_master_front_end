<template>
  <ul class="app__nav tab tab-block">
    <li class="tab-item">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li class="tab-item">
      <router-link :to="{ name: 'createGroups' }">Create Lunch Groups</router-link>
    </li>
    <li class="tab-item">
      <router-link :to="{ name: 'showGroups' }">Show Lunch Groups</router-link>
    </li>
  </ul>
</template>
