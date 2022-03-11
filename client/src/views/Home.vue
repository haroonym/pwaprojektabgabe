<template>
  <div>
    <v-container>
      <p style="color: #f1333f" class="font-weight-bold text-h5 text-center mt-2">
        Willkommen zu Ihrem iManager
      </p>
      <p style="color: #f1333f" class="font-weight-light text-center mt-2">
        Der iManager ist eine mobile Applikation, in der man einfach und komfortabel das Inventar eines
        Haushaltes erfassen und pflegen kann.
      </p>
      <v-btn
        outlined
        class="mx-auto"
        style="left: 50%; transform: translateX(-50%); text-align: center; color: #f1333f"
        @click="readout()"
        >Beschreibung anhören</v-btn
      >
      <div
        class="mb-5"
        style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); text-align: center"
      >
        <v-btn class="mt-5 mx-auto" outlined style="color: #f1333f" height="125px" width="250px" to="/scan">
          <p style="color: #f1333f" class="font-weight-bold text-h3 mt-auto">SCAN</p>
          <v-img class="ml-2" width="0px" src="../assets/scan-svgrepo-com.svg"></v-img>
        </v-btn>
        <v-btn
          class="mt-5 mx-auto"
          outlined
          style="color: #f1333f"
          height="125px"
          width="350px"
          to="/inventory"
        >
          <p style="color: #f1333f" class="font-weight-bold text-h3 mt-auto">INVENTAR</p>
          <v-img class="ml-2" width="0px" src="../assets/stock-svgrepo-com.svg"></v-img>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    readout() {
      const msg = new SpeechSynthesisUtterance();
      msg.text =
        'Willkommen zu Ihrem iManager! Der iManager ist eine mobile Applikation, in der man einfach und komfortabel das Inventar eines Haushaltes erfassen und pflegen kann.';
      window.speechSynthesis.speak(msg);
    },
  },
};
</script>
