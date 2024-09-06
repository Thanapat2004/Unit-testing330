<template>
  <div class="htmlClass">
    <h1>{{ head }}</h1>
    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" />
      <input type="text" id="studentCode" v-model="studentCode" />
      <input type="text" id="nickName" v-model="nickName" />
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
  <p v-if="submitted">ชื่อ: {{ firstName }} {{ secondName }}</p>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      head: 'Vue is awesome.',
      firstName: 'ธนพัทร ',
      secondName: 'บุญผัด',
      studentCode: '6604101330',
      nickName: 'แซ็ก',
      submitted: false,
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form');
      this.submitted = true;
    },
  }
}
</script>

<style scoped></style>
