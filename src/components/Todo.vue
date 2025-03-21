<template>
  <div class="xl:col-12 lg:col-12 sm:col-12">
    <Dialog
      v-model:visible="visible"
      maximizable
      modal
      header="To Do"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <p>
        Using categories array defined into <b>Home.vue</b> file implement this
        function
        <b>const getCategoryPath = (categories, categoryName) => { };</b>
      </p>
      <h4 class="">// OUTPUT SAMPLES</h4>

      <Message size="small" icon="pi pi-question-circle" severity="info">
        <p class="m-0">console.log(getCategoryPath(categories, 'category4'))</p>
        <p class="m-0">// should output: '/category1/category3/category4'</p>
      </Message>

      <Message size="small" icon="pi pi-question-circle" severity="info">
        <p class="m-0">console.log(getCategoryPath(categories, 'category2'))</p>
        <p class="m-0">// should output: '/category1/category2'</p>
      </Message>

      <Message size="small" icon="pi pi-question-circle" severity="info">
        <p class="m-0">console.log(getCategoryPath(categories, 'category5'))</p>
        <p class="m-0">// should output: '/category5'</p>
      </Message>
    </Dialog>

    <span class="text-600 font-light text-sm line-height-3">
      <Button
        label="TO DO"
        link
        icon="pi pi-external-link"
        @click="visible = true"
      />
    </span>
  </div>
  <Divider class="mt-1 mb-4" />
</template>
<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Message from "primevue/message";
import Divider from "primevue/divider";
const visible = ref(false);
</script>
