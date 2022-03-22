<template>
  <Form
    class="order"
    @submit="onSubmit"
    :validation-schema="schema"
    v-slot="{ errors }"
  >
    <div class="order__line">
      <h2 class="order__title">О вас</h2>
      <div class="flex order__first">
        <div class="">
          <label for="firstName">Имя*</label>
          <Field
            name="firstName"
            id="firstName"
            type="text"
            class="form-control"
            placeholder="Алексей"
            :class="{ 'is-invalid': errors.firstName }"
          />
          <div class="invalid-feedback">{{ errors.firstName }}</div>
        </div>
        <div class="">
          <label for="number">Номер телефона*</label>
          <Field
            name="number"
            id="number"
            type="text"
            class="form-control"
            placeholder="+998"
            :class="{ 'is-invalid': errors.number }"
          />
          <div class="invalid-feedback">{{ errors.number }}</div>
        </div>
        <div class="">
          <label for="email">Почта*</label>
          <Field
            name="email"
            id="email"
            type="text"
            class="form-control"
            placeholder="Почта"
            :class="{ 'is-invalid': errors.email }"
          />
          <div class="invalid-feedback">{{ errors.email }}</div>
        </div>
      </div>
    </div>

    <div class="order__line">
      <h2 class="order__title">Доставка</h2>
      <div class="flex order__first">
        <div class="">
          <label for="street">Улица*</label>
          <Field
            name="street"
            id="street"
            type="text"
            class="form-control"
            placeholder="Пушкина"
            :class="{ 'is-invalid': errors.street }"
          />
          <div class="invalid-feedback">{{ errors.street }}</div>
        </div>
      </div>
      <div class="flex order__first">
        <div class="order__mini">
          <label for="hause">Дом*</label>
          <Field
            name="hause"
            id="hause"
            type="text"
            class="form-control"
            placeholder="1a"
            :class="{ 'is-invalid': errors.hause }"
          />
          <div class="invalid-feedback">{{ errors.hause }}</div>
        </div>
        <div class="order__mini">
          <label for="hauseStreet">Подъезд*</label>
          <Field
            name="hauseStreet"
            id="hauseStreet"
            type="text"
            class="form-control"
            placeholder="1"
            :class="{ 'is-invalid': errors.hauseStreet }"
          />
          <div class="invalid-feedback">{{ errors.hauseStreet }}</div>
        </div>
        <div class="order__mini">
          <label for="floor">Этаж*</label>
          <Field
            name="floor"
            id="floor"
            type="text"
            class="form-control"
            placeholder="2"
            :class="{ 'is-invalid': errors.floor }"
          />
          <div class="invalid-feedback">{{ errors.floor }}</div>
        </div>
        <div class="order__mini">
          <label for="hauseNumber">Квартира*</label>
          <Field
            name="hauseNumber"
            id="hauseNumber"
            type="text"
            class="form-control"
            placeholder="3"
            :class="{ 'is-invalid': errors.hauseNumber }"
          />
          <div class="invalid-feedback">{{ errors.hauseNumber }}</div>
        </div>
        <div class="order__mini">
          <label for="hausePhone">Домофон*</label>
          <Field
            name="hausePhone"
            id="hausePhone"
            type="text"
            class="form-control"
            placeholder="0000"
            :class="{ 'is-invalid': errors.hausePhone }"
          />
          <div class="invalid-feedback">{{ errors.hausePhone }}</div>
        </div>
      </div>
    </div>

    <div class="order__line">
      <h2 class="order__title">Оплата</h2>
      <div class="flex order__payment">
        <div class="">
          <label for="cash">Наличными*</label>
          <Field
            name="payment"
            id="cash"
            class="form-control"
            type="radio"
            value="cash"
            :class="{ 'is-invalid': errors.payment }"
          />
        </div>
        <div class="">
          <label for="creditCard">Картой*</label>
          <Field
            name="payment"
            id="creditCard"
            class="form-control"
            type="radio"
            value="creditCard"
            :class="{ 'is-invalid': errors.payment }"
          />
        </div>
        <div class="">
          <label for="AppleCard">Apple Pay*</label>
          <Field
            name="payment"
            id="AppleCard"
            class="form-control"
            type="radio"
            value="AppleCard"
            :class="{ 'is-invalid': errors.payment }"
          />
        </div>
      </div>
      <div class="invalid-feedback">{{ errors.payment }}</div>
    </div>

    <div class="order__line">
      <h2 class="order__title">Комментарий</h2>
      <div class="flex order__first">
        <div class="order__comments">
          <label for="comments">Улица*</label>
          <Field
            name="comments"
            id="comments"
            type="textarea"
            class="form-control"
            placeholder="Есть уточнения?"
            :class="{ 'is-invalid': errors.comments }"
          />
          <div class="invalid-feedback">{{ errors.comments }}</div>
        </div>
      </div>
    </div>

    <div class="order__submit">
      <div class="cart__sumTotal">
        <span class="cart_withoutDiscount">
          Итого:
          <span :class="withDiscount > 0 ? 'discount-active' : ''"
            >{{ sumTotal }} ₽</span
          >
        </span>
        <span class="cart_withDiscount" v-show="withDiscount > 0">
          {{ withDiscount }} ₽
        </span>
      </div>

      <button>Оформить заказ</button>
    </div>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      schema: Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        number: Yup.string()
          .min(13)
          .max(13)
          .required("Please enter valid number")
          .matches(/^\+998/, "Start with +998"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
        hause: Yup.string().required("Apartment number"),
        street: Yup.string().required("Indicate your address"),
        hauseStreet: Yup.string().required("Hause street"),
        floor: Yup.string().required("Floor"),
        hauseNumber: Yup.string().required("Hause number"),
        hausePhone: Yup.string()
          .min(4, "At least 4")
          .max(6, "No more 6")
          .required("Hause Phone"),
        payment: Yup.string().required("Select payment method"),
        comments: Yup.string().required("Please leave your comments"),
      }),
    };
  },
  methods: {
    sendata(data) {
      this.$store.dispatch("orderAdress", { data: data });
    },
    onSubmit(values) {
      // display form values on success
      if (this.sumTotal > 0) {
        const sendValues = JSON.stringify(values, null, 4);
        alert("SUCCESS!! :-)\n\n" + sendValues);
        this.$store.dispatch("orderAdress", values);
        this.$emit("showModal");
      } else {
        alert("Buy something first");
      }
    },
  },
  computed: {
    sumTotal() {
      return this.$store.getters.totalSum;
    },
    withDiscount() {
      return this.$store.getters.withDiscount;
    },
  },
};
</script>

<style lang="scss">
.order {
  padding: 30px 0 60px;
  &__line {
    padding-bottom: 8px;
    border-bottom: 1px solid #f0f0f0;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #191919;
    margin: 16px 0;
  }

  &__first {
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .order__mini {
      margin-top: 12px;
      width: 18%;
    }
  }

  &__payment {
    justify-content: flex-start;
    gap: 24px;

    div {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      gap: 8px;

      label {
        margin: auto;
        cursor: pointer;
      }
      input {
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: none;
        border: 0;
        box-shadow: inset 0 0 0 1px #9f9f9f;
        box-shadow: inset 0 0 0 1.5px #9f9f9f;
        appearance: none;
        padding: 0;
        margin: 0;
        transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
        pointer-events: none;

        &:focus {
          outline: none;
        }
        &:checked {
          box-shadow: inset 0 0 0 6px #ff7010;
        }
      }
    }
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    button {
      cursor: pointer;
      border: none;
      padding: 14px 24px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      background: #ff7010;
      border-radius: 6px;
      color: white;
    }
  }

  label {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #a5a5a5;
  }

  input {
    height: 48px;
    padding: 14px 16px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    outline: none;
    &::placeholder {
      color: #a5a5a5;
    }
  }
}
.is-invalid {
  border: 1px solid #e74a4a !important;
  box-shadow: none !important;
}
.invalid-feedback {
  font-size: 14px;
  margin: 4px;
  color: #e74a4a;
}
</style>
