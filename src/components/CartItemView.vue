<template lang="pug">
  .item-container
    .item-img-container: img.item-img(:src="item.img")
    .item-detail
      .item-name {{ item.name }}
      .item-shop {{ item.shop }}
      .item-price(v-if="false") {{ item.price + ' ฿' }}
    .item-cta
      .item-total-price {{ (item.price * item.amount) }} Baht
</template>

<script>
export default {
  name: "CartItemView",
  props: ['item'],
  methods: {
    add_amount_by_one: function() {
      this.$store.dispatch('add_amount_by_one', {
        itemId: this.$props.item.id,
        amount: 1
      });
    },
    remove_amount_by_one: function() {
      this.$store.dispatch('remove_amount_by_one', {
        itemId: this.$props.item.id,
        amount: 1
      })
    },
    remove_item: function() {
      this.$store.dispatch('remove_cart_item', {
        itemId: this.$props.item.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-container {
    display: flex;
    align-items: center;
    padding: 8px;
    margin: 8px 0;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(#000, .1);
    .item-img-container {
      width: 56px;
      height: 56px;
      border-radius: 5px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 5px;

      display: flex;
      justify-content: center;
      margin-right: 16px;
      .item-img {
        height: 100%;
        border-radius: 5px;
      }
    }
    .item-detail {
      & :not(.item-name) {
        font-size: 14px;
        color: #707074;
      }
      margin-right: auto;
      line-height: calc(1rem + 2px);
    }
    .item-cta {
      display: flex;
      align-items: center;
      .icon {
        font-size: 18px !important;
        color: #2AAF6C;
      }
      .item-amount {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 24px;
      }
      .delete-item {
        margin-right: 16px;
        color: #707074;
      }
    }
  }
</style>