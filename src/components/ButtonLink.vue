<template>
  <Button class="referral-button" :label="buttonLabel" />
</template>

<script>
import { defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
  name: 'ButtonLink',
  components: {
    Button
  },
  computed: {
    buttonLabel() {
      return this.$t('ref-panel.btn');
    }
  }
});
</script>
s