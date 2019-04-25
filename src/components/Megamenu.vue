<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "megamenu-component"
})
export default class Megamenu extends Vue {}
</script>