<template>
  <img class="place-kitten" alt="Placeholder kitten" :src="`https://placekitten.com/${width}/${height}`" />
</template>

<script>
export default {
  name: 'PlaceKitten',
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  }
}
</script>
