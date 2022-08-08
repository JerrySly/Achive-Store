<template>
  <div class="card">
    <div class="title">
      Информация
    </div>
    <div>
      <div
        v-for="(item, index) in information"
        :key="index"
        class="item"
      >
        <div>{{ `${item.label}:` }}</div>
        <div @click="externalRoute(item)">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const externalRoute = function (item) {
      if (!item.href) return
      const el = document.createElement('a')
      el.href = item.value
      el.target = 'blank'
      el.click()
    }
    return {
      externalRoute,
      information: [
        {
          label: 'Ссылка на гитхаб',
          value: 'https://github.com/JerrySly',
          href: true
        },
        {
          label: 'Ссылка на ВК',
          value: 'https://vk.com/jerrysly',
          href: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  padding: 20px 15px 10px;
  .title {
    font-size: 26px;
  }
  .item {
    display: flex;
    font-size: 18px;
    margin-top: 10px;
    div:first-child {
      flex: 2;
      font-weight: 500;
    }
    div:last-child {
      flex: 6;
      cursor: pointer;
      transition: 0.5s;
      font-weight: 600;
    }
    div:hover:last-child {
      color: $main-color;
    }
  }
}
</style>
