<template>
  <div class="px-4 sm:px-6">
    <a
      :href="item.url"
      target="_blank"
      class="inline-flex mb-2 mr-2 overflow-hidden transition-colors duration-300 ease-linear border rounded text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary bg-light-surfaceElevated light:hover:bg-gray-300 dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface border-light-border dark:border-dark-border"
      v-for="(item, i) in items"
      :key="i"
    >
      <span class="inline-block px-2 leading-loose">{{ item.login }}</span>
      <img :src="item.avatar_url" alt="avatar_url" class="h-8 my-0" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
.prose img {
  margin-bottom: 0%;
  margin-top: 0%;
}
</style>
