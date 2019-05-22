<template>
  <div>
    <div class="img-container">
      <div class="img" :style="{'background-image': 'url(' + dessert.imageUrl + ')'}"></div>
      <div class="filter"></div>
      <div class="category" v-if="dessert.category">{{ dessert.category }}</div>
    </div>
    <div class="title">{{ dessert.title }}</div>
    <div class="price">{{ dessert.price | currencyFilter }}</div>
    <button class="btn btn-light" @click="addToCart(dessert)">加入購物車</button>
  </div>
</template>
<script>
export default {
  props: {
    dessert: {
      type: Object,
      default: () => {
        return {
          title: '',
          id: '',
          price: '',
          category: '',
          imageUrl: ''
        }
      }
    }
  },
  methods: {
    addToCart (item) {
      const vm = this
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
      this.$http.post(api, {data: {
        product_id: item.id,
        qty: 1
      }}).then(response => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', `成功將 ${item.title}*1 加入購物車`, 'secondary')
          vm.$bus.$emit('cart:update')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/all';

.image-container, .img, .filter, .btn {
  width: 100%;
}
.img-container {
  padding-bottom: 100%;
  position: relative;
}
.img {
  height: 100%;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
}
.filter {
  height: 100%;
  background-color: $light;
  opacity: .2;
  position: absolute;
  top: 0;
  left: 0;
}
.category {
  padding: 10px;
  background-color: $primary;
  color: $light;
  letter-spacing: .5rem;
  writing-mode: vertical-lr;
  position: absolute;
  top: 0;
  left: 6.6%
}
.title, .price {
  width: 50%;
  color: $primary;
  font-size: 1.25rem;
  line-height: 3.5rem;
  text-align: center;
  border: 1px solid $light;
  float: left;
}
.btn {
  color: $primary;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 4rem;
}
</style>
