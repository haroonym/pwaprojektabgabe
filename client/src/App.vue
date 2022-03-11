<template>
  <v-app>
    <v-app-bar color="white accent-4" dark app>
      <v-toolbar-title>
        <v-img src="./assets/imanager.png" width="50px" class="mr-3"></v-img>
      </v-toolbar-title>
      <h3 class="font-weight-light black--text">iManager</h3>
      <v-spacer></v-spacer>
      <v-btn style="color: #f1333f" outlined @click="subscribe()">Subscribe</v-btn>
    </v-app-bar>
    <v-main style="position: relative">
      <div
        class="grey text-center mx-auto white--text"
        v-if="this.offline == true"
        style="width: 100%"
        role="alert"
      >
        You are offline...
      </div>
      <v-container>
        <router-view :products="products" @deleteProduct="deleteProduct" @refreshProducts="getProducts"
      /></v-container>
    </v-main>

    <v-bottom-navigation class=".align-self-center" grow>
      <v-btn class="my-auto" :to="'/'">
        <span>Home</span>
      </v-btn>
      <v-btn class="my-auto" :to="'/scan'">
        <span>Scan</span>
      </v-btn>
      <v-btn class="my-auto" :to="'/inventory'">
        <span>Inventar</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    this.getProducts();
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
  },
  data() {
    return {
      products: [],
      serverAddress: process.env.VUE_APP_SERVER,
      once: false,
      offline: false,
      publicVapidKey:
        'BPnQ7MhOCQMWSooLtVkAkIUbZxEPq5dSGM2gNFh5zL4RXFruMkfh7dgLG4DVo3_F28Mb1e5J7-u5y7mWAcvSFWI',
    };
  },
  methods: {
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten!');
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    async subscribe() {
      console.log('Hallo');
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
      });
      console.log('Hallöchen');
      await axios.post(`${this.serverAddress}/subscribe`, subscription);
    },
    async getProducts() {
      try {
        const { data } = await axios({
          url: this.serverAddress + '/products',
          method: 'GET',
        });
        this.products = data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(value) {
      try {
        console.log(value);
        await axios({
          url: `${this.serverAddress}/products/${value}`,
          method: 'DELETE',
        });
        // this.products = data;
        this.getProducts();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
