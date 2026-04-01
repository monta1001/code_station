<template>
  <div class="page clients">
    <h2>عملاؤنا</h2>
    <ul>
      <li>عميل 1</li>
      <li>عميل 2</li>
      <li>عميل 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Clients",
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
  border-radius: 10px;
}
</style>