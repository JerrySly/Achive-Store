<template>
  <div class="wrapper">
    <ul>
      <li class="spacer" />
      <li class="logo">
        Achive Store
      </li>
      <li>
        <router-link :to="{ name: 'User', params: { id: 1 } }">
          <icon-home />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Achieves' }">
          <icon-achives />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Messages' }">
          <icon-message />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Messages' }">
          <icon-cog />
        </router-link>
      </li>
      <li class="spacer" />
    </ul>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: $main-color;
  color: white;
  font-family: $main-font;
  padding: 5px 0px;
}
ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 0px;
  li {
    flex: 1;
  }
  .spacer {
    flex: 3;
  }
}
.logo {
  font-size: 28px;
  cursor: pointer;
  font-weight: 700;
}
</style>
