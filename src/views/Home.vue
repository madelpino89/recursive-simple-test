<template>
  <div class="grid">
    <div class="xl:col-12 lg:col-12 sm:col-12 btn-container">
      <Button icon="pi pi-angle-double-right" severity="warn" raised label="Show Result Cat4" @click="showResult('category4')" />
    </div>

    <div class="xl:col-12 lg:col-12 sm:col-12 btn-container">
      <Button icon="pi pi-angle-double-right" severity="success" raised label="Show Result Cat2" @click="showResult('category2')" />
    </div>

    <div class="xl:col-12 lg:col-12 sm:col-12 btn-container">
      <Button icon="pi pi-angle-double-right" severity="help" raised label="Show Result Cat5" @click="showResult('category5')" />
    </div>
  </div>

  <Message v-if="result" size="large" icon="pi pi-check">{{ result }}</Message>
</template>
<script setup>

import Button from 'primevue/button';

import { ref } from 'vue';


const result = ref('');
const categories = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

const getCategoryPath = (categories, categoryName) => {
  for (const category of categories) {
    if (category.name === categoryName) {
      return `/${category.name}`;
    }

    if (category.subcategories.length > 0) {
      const subPath = getCategoryPath(category.subcategories, categoryName);

      if (subPath) {
        return `/${category.name}${subPath}`;
      }
    }
  }

  return null;
};

const showResult = categoryName => {
  result.value = '';
  const path = getCategoryPath(categories, categoryName);
  result.value = path;
  console.log(path);
};
</script>
<style>
    .btn-container {
        margin: auto;
        margin-bottom: 20px;
    }
</style>
