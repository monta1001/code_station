<template>
  <div class="page">
    <h1>ادخل عالم البرمجة من باب مختلف</h1>
    <img src="../assets/logo.jpg" alt="صورة الشركة" class="image" />
    <h2>أهتمامات الشركة</h2>
    <ul class="interests">
      <li>برمجة و تطوير التطبيقات</li>
      <li>تعليم البرمجة</li>
      <li>المؤتمرات الخاصة بمجالات البرمجة</li>
      <li>منصة تضم جميع المبرمجين</li>
      
    </ul>
    <h2>معلومات التواصل</h2>
    <div class="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
      <a href="https://instagram.com/your_username" target="_blank" class="insta">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://t.me/your_username" target="_blank" class="telegram">
        <i class="fab fa-telegram"></i>
      </a>
      <a href="mailto:your@email.com" class="gmail">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.page {
  direction: rtl;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.image {
  /*width: 200px;*/
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 100px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* العنوان */
.page h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #D44638;
}

.page h1 {
  color: #D44638;
}

/* القائمة */
.interests {
  list-style: none;
  padding: 0;
  text-align: right;  
  margin-bottom: 100px;
}

/* العنصر */
.interests li {
  position: relative;
  padding: 15px 15px;
  margin: 12px 0;
  background: #f9f9ff;
  border-radius: 12px;
  font-weight: bold;
  border-right: 5px solid #007bff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: 0.3s;
}

/* النقطة الزرقاء */
.interests li::before {
  content: "";
  position: absolute;
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: #007bff;
  border-radius: 50%;
}

.container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 100px;
}

.container a {
  font-size: 30px;
  color: #888; /* رمادي */
  transition: 0.3s;
}

.container a:hover {
  transform: scale(1.2);
}

/* كل أيقونة تاخذ لونها عند المرور */
.insta:hover {
  color: #E1306C;
}

.telegram:hover {
  color: #0088cc;
}

.gmail:hover {
  color: #D44638;
}

</style>