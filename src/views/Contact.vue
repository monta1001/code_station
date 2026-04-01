<template>
  <div class="page">
    <h2>الكورسات</h2>
    <div class="corse">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="image" />
      <h2 class="t1">بايثون</h2>
      <p class="t2">كورس يتضمن كل ما تحتاجه من معرفة</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.page {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  direction: rtl;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.corse {
  width: 500px;
  height: 250px;
  padding: 20px;
  background-color: rgb(6, 29, 70);  
  border-radius: 12px;
  border: 2px solid #ffa600;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.image {
  width: 100px;
  margin: 0px;
}

.t1 {
  color: #f9f9f9;
  font-weight: bold;
}

.t2 {
  color: rgb(170, 188, 204);
}
</style>