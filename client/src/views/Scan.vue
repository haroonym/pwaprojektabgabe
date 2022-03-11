<template>
  <div>
    <v-container>
      <v-quagga
        class="mx-auto"
        :onDetected="logIt"
        :readerTypes="['ean_reader']"
        style="padding-top: 500px"
      ></v-quagga>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-text-field
          clearable
          class="mt-5"
          color="#F1333F"
          v-model="code"
          label="Barcode"
          hint="wird automatisch ausgefüllt"
          required
          :error-messages="barcodeRules"
          @input="$v.code.$touch()"
          @blur="$v.code.$touch()"
          >{{ code }}</v-text-field
        >
        <v-text-field
          class="mt-5"
          color="#F1333F"
          hint="z.B. Coca Cola"
          clearable
          label="Marke"
          v-model="marke"
          required
          :error-messages="markeRules"
          @input="$v.marke.$touch()"
          @blur="$v.marke.$touch()"
        ></v-text-field>
        <v-text-field
          class="mt-5"
          color="#F1333F"
          hint="z.B. Coca Cola Zero Zucker"
          clearable
          label="Produkttitel"
          v-model="produkttitel"
          required
          :error-messages="titelRules"
          @input="$v.produkttitel.$touch()"
          @blur="$v.produkttitel.$touch()"
        ></v-text-field>
        <v-text-field
          class="mt-5"
          color="#F1333F"
          hint="z.B. koffeinhaltiges Erfrischungsgetränk"
          clearable
          label="Produktbeschreibung"
          v-model="produktbeschreibung"
          required
          :error-messages="beschreibungRules"
          @input="$v.produktbeschreibung.$touch()"
          @blur="$v.produktbeschreibung.$touch()"
        ></v-text-field>
        <v-text-field
          class="mt-5"
          color="#F1333F"
          type="date"
          hint="z.B 01.01.2023"
          clearable
          label="Ablaufdatum"
          v-model="ablaufdatum"
          required
          :error-messages="datumRules"
          @input="$v.ablaufdatum.$touch()"
          @blur="$v.ablaufdatum.$touch()"
        ></v-text-field>
      </v-form>

      <v-btn
        @click="
          postProduct();
          submit;
          vibrateSimple();
        "
        style="left: 50%; transform: translateX(-50%); text-align: center; color: #f1333f"
        class="mt-5 mx-auto text-h5"
        outlined
        height="50px"
        width="250px"
        type="submit"
        >Speichern</v-btn
      >
      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
export default {
  name: 'Scan',
  props: {
    products: {
      type: Array,
    },
  },

  mixins: [validationMixin],

  validations: {
    code: { required },
    marke: { required },
    produkttitel: { required },
    produktbeschreibung: { required },
    ablaufdatum: { required },
  },

  data() {
    return {
      code: '',
      // code: '9100000743622',
      marke: 'S Budget',
      produkttitel: 'Schokobutterkekse Zartbitterschokolade',
      produktbeschreibung: 'Kekse mit Zartbitterschokolade',
      ablaufdatum: '2022-11-01',
      detecteds: [],
      readerTypes: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],

      snackbar: false,
      text: '',
      valid: false,
      serverAddress: process.env.VUE_APP_SERVER,
    };
  },
  computed: {
    barcodeRules() {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push('Barcode is required');
      return errors;
    },
    titelRules() {
      const errors = [];
      if (!this.$v.produkttitel.$dirty) return errors;
      !this.$v.produkttitel.required && errors.push('Title is required');
      return errors;
    },
    markeRules() {
      const errors = [];
      if (!this.$v.marke.$dirty) return errors;
      !this.$v.marke.required && errors.push('Brand is required');
      return errors;
    },
    beschreibungRules() {
      const errors = [];
      if (!this.$v.produktbeschreibung.$dirty) return errors;
      !this.$v.produktbeschreibung.required && errors.push('Description is required');
      return errors;
    },
    datumRules() {
      const errors = [];
      if (!this.$v.ablaufdatum.$dirty) return errors;
      !this.$v.ablaufdatum.required && errors.push('Date is required');
      return errors;
    },
  },
  methods: {
    vibrateSimple() {
      navigator.vibrate(2000);
    },
    logIt(data) {
      this.code = data.codeResult.code;
      console.log('detected', data);
    },
    submit() {
      this.$v.$touch();
    },
    async postProduct() {
      if (this.valid == true && this.code.length > 0) {
        if (this.products.filter((el) => el.barcode == this.code) == false) {
          const { data } = await axios({
            url: this.serverAddress + '/products',
            method: 'POST',
            contentType: 'application/json',
            data: {
              barcode: this.code,
              marke: this.marke,
              produktname: this.produkttitel,
              beschreibung: this.produktbeschreibung,
              ablaufdatum: this.ablaufdatum,
            },
          });
          console.log(data);
          this.snackbar = true;
          this.text = `Das Produkt mit dem Barcode ${this.code} wurde erfolgreich erstellt`;
          this.$refs.form.reset();
          this.$v.$reset();
          this.code = '';
          this.$emit('refreshProducts');
        } else {
          this.snackbar = true;
          this.text = `Das Produkt mit dem Barcode ${this.code} existiert bereits, bitte versuchen Sie es mit einem anderen Produkt`;
        }
      } else {
        this.snackbar = true;
        this.text = `Bitte scannen Sie ein Produkt ein oder überprüfen Sie, ob Sie alle Felder ausgefüllt haben!`;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-label-color .v-label {
  color: red;
  opacity: 1;
}
</style>
