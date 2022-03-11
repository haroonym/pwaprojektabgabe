<template>
  <div>
    <v-container>
      <p class="font-weight-bold text-h5 text-center mt-2 red--text">Inventar</p>
      <v-data-table
        class="elevation-4 mt-5"
        style="color: #f1333f"
        max-width="100px"
        :headers="headers"
        :items="products"
        item-key="barcode"
      >
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <v-icon @click="deleteProduct(item.barcode)" small color="red darken-2"
            >{{ icons.mdiDelete }}
          </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { mdiDelete } from '@mdi/js';
export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
    },
  },
  data: () => ({
    icons: {
      mdiDelete,
    },
    headers: [
      { text: 'Barcode', align: 'start', value: 'barcode', sortable: false },
      { text: 'Marke', value: 'marke' },
      { text: 'Produktname', value: 'produktname' },
      { text: 'Beschreibung', value: 'beschreibung', sortable: false },
      { text: 'Ablaufdatum', value: 'ablaufdatum' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
  }),
  methods: {
    deleteProduct(item) {
      return this.$emit('deleteProduct', item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
