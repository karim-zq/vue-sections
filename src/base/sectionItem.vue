<template>
  <div class="item text-center" :class="{ active }">
    <div class="card-content">
      <div class="icon">
        <component :is="!base ? getIcon : getIconBase" />
      </div>
      <div class="p3 text-capitalize px-1">
        {{ $formatText(title, " ") }}
      </div>
    </div>
  </div>
</template>

<script>
import { importComp } from "../base/helpers.js";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
    base: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getIcon() {
      const path = "/type-icons/" + this.title.replace(/ /g, "_") + ".vue";
      return importComp(path);
    },
    getIconBase() {
      const path = "/type-icons/" + this.title.replace(/ /g, "_") + ".vue";
      return importComp(path);
    },
  },
};
</script>

<style lang="scss" scoped>
$sectionsBlue: #31a9db;
$grey: #adadad;
.item {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: $grey;
  &.active {
    background: $sectionsBlue;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      background: darken($sectionsBlue, 10%);
    }
  }
}
.icon {
  svg {
    color: white;
    fill: white;
    min-width: 60px;
    height: 60px;
  }
}
.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  line-height: 1.85;
}
</style>
