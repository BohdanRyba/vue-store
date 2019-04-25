<template>
  <div>
    <select @change="changeLocale" v-model="currentLocale">
      <option default value="ru">Ru</option>
      <option value="en">En</option>
    </select>
  </div>
</template>
<script >
import { Component, Vue } from "vue-property-decorator";
@Component({
  data: () => {
    return {
      currentLocale: "ru"
    };
  }
})
export default class ChangeLocale extends Vue {
  changeLocale() {
    this.$i18n.locale = this.currentLocale;
  }
}
</script>