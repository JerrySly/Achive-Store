<template>
  <div class="row">
    <div style="flex: 3">
      <user-card></user-card>
    </div>
    <div style="flex: 6"></div>
    <div style="flex: 3"></div>
  </div>
</template>

<script>
import userCard from "@/components/user/userCard.vue";
export default {
  components: { userCard },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>