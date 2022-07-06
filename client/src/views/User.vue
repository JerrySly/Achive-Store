<template>
  <div class="row">
    <div style="flex: 3">
      <user-card></user-card>
    </div>
    <div class="spacer"></div>
    <div style="flex: 6">
      <user-info></user-info>
      <user-achieves style="margin-top:20px"></user-achieves>
      <user-wall style="margin-top:20px"></user-wall>
    </div>
    <div class="spacer"></div>
    <div style="flex: 3"></div>
  </div>
</template>

<script>
import userCard from "@/components/user/userCard.vue";
import userInfo from "@/components/user/userInfo.vue";
import UserAchieves from '../components/user/userAchieves.vue';
import UserWall from '../components/user/userWall.vue';
export default {
  components: { userCard, userInfo,UserAchieves, UserWall },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  .spacer{
    flex:0.5;
    flex-shrink: 1.5;
  }
}
</style>