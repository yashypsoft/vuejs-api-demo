<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    :items-per-page="5"
    class="elevation-1"
    :item-class="itemRowBackground"
  >
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Firstname",
          align: "start",
          sortable: false,
          value: "firstname",
        },
        { text: "Lastname", value: "lastname" },
        { text: "Email", value: "email" },
      ],
      customers: [
        {
          firstname: "ABC",
          lastname: "XyZ",
          email: "abc@gmail.com",
        },
        {
          firstname: "ABC12",
          lastname: "XyZ",
          email: "abc12@gmail.com",
        },
        {
          firstname: "ABC43",
          lastname: "XyZ",
          email: "abc43@gmail.com",
        },
        {
          firstname: "ABC11",
          lastname: "XyZ",
          email: "abc11@gmail.com",
        },
        {
          firstname: "ABC111",
          lastname: "XyZ",
          email: "abc111@gmail.com",
        },
      ],
    };
  },
  methods: {
    getEmail(email) {
      if (email == "abc43@gmail.com") {
        return true;
      }
      return false;
    },
    itemRowBackground: function (item) {
      return item.email == "abc43@gmail.com" ? "color-red" : null;
    },
  },
};
</script>

<style>
.color-red {
  background-color: red;
}

</style>
