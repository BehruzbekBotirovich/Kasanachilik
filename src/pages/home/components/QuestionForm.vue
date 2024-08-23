<template>
  <div class="bg-white py-14 mb-4">

    <div class="main-container">

      <h1 class="text-customOrange semibold">Bog'lanish</h1>
      <h1 class="text-2xl font-bold my-4">Savollaringiz bormi?</h1>

      <a-row :gutter="20">
        <a-col :xs="24" :md="12" :xl="15" class="sm:w-full">

          <a-form colon="false" :model="form" :rules="rules" ref="formRef" layout="vertical"
            @submit.prevent="handleSubmit">
            <!-- name -->
            <a-form-item label="Ism" name="name" colon="false">
              <a-input v-model:value="form.name" placeholder="Введите ваше имя" class="border-2 w-full p-3" />
            </a-form-item>
            <!-- tel -->
            <a-form-item label="Telefon" name="phone" colon="false">
              <cleave v-model="form.phone" :options="cleaveOptions" placeholder="+998 94 929 08 02"
                class="a-input border-2 w-full p-3 rounded-md focus:outline-blue-500 " />
            </a-form-item>
            <!-- text -->
            <a-form-item colon="false" label="Habar matni" name="text" class="mb-12">
              <a-input v-model:value="form.text" placeholder="Введите ваше сообщение"
                class="border-2 w-full p-3 matn-input" />
            </a-form-item>

            <a-form-item>
              <a-button type="" html-type="submit" class="orange-btn">Yuborish</a-button>
            </a-form-item>
          </a-form>

        </a-col>

        <a-col :xs="24" :md="12" :xl="9" class="sm:w-full mt-9">
          <div class="border-2 rounded  border-gray-200 bg-customLightGray p-6">
            <div class="flex gap-2 mb-8">
              <div>
                <phone-icon></phone-icon>
              </div>
              <div>
                <h3>Telefon</h3>
                <div class="text-lg font-semibold">+998 (71) 123 45 67</div>
              </div>
            </div>

            <div class="flex gap-2 mb-8">
              <div>
                <message-icon></message-icon>
              </div>
              <div>
                <h3>Elektron pochta</h3>
                <div class="text-lg font-semibold">info@kasanachilikmaktabi.uz</div>
              </div>
            </div>

            <div class="flex gap-2">
              <div>
                <location-icon></location-icon>
              </div>
              <div>
                <h3>Manzil</h3>
                <div class="text-lg font-semibold">
                  Toshkent shahri, Shayhontohur tumani, Chorsu mazvesi 51-uy
                </div>
              </div>
            </div>

            <div class="social-icons flex gap-6 mt-8">
              <telegram-icon></telegram-icon>

              <insta-icon></insta-icon>

              <facebook-icon></facebook-icon>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>







</template>




<script setup>
import { ref } from 'vue'
import Cleave from 'vue-cleave-component';  // format tel-nomera
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import MessageIcon from '@/components/icons/MessageIcon.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import InstaIcon from '@/components/icons/InstaIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'


const formRef = ref(null);
const form = ref({
  name: '',
  phone: '',
  text: '',
});

const rules = ref({
  name: [
    { required: true, message: 'Ismni kiriting', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: 'Пожалуйста, введите номер телефона', trigger: 'blur' },
    { pattern: /^(\+998\d{2}\d{3}\d{2}\d{2})$/, message: 'Telefon nomerni  to\'g\'ri kiriting', trigger: 'blur' }
  ],

  text: [
    { required: true, message: 'Xabar matnini kiriting', trigger: 'blur' }
  ]
});

const cleaveOptions = ref({
  prefix: '+998',
  delimiters: [' ', ' ', ' ', ' '],
  blocks: [4, 2, 3, 2, 2],
  numericOnly: true,
});

const handleSubmit = async () => {
  try {
    await formRef.value.validate();
    console.log('Форма отправлена:', form.value);
  } catch (error) {
    console.log('Ошибка валидации:', error);
  }
};

</script>

<style scoped>
.social-icons>svg:hover path {
  fill: #de9551;
}

.description {
  padding-top: 0.75rem;
  margin-bottom: 0.5rem;
  background: #F9FAFB;
  height: auto;
  margin-bottom: 10px;
  border: 2px solid #EAECF0;
  padding-bottom: 125px;
}

.matn-input {
  padding-bottom: 108px;

}

@media (max-width: 998px) {
  .matn-input {
    padding-bottom: 136px;
    /* Adjust as needed for smaller screens */
  }
}

@media (max-width: 768px) {
  .matn-input {
    padding-bottom: 50px;
    /* Adjust as needed for smaller screens */
  }
}

:deep(.ant-form-item-required, .ant-form-item-label) {
  font-weight: 500;
}

:deep(.ant-form-item-required::before) {
  display: none !important
}
</style>
