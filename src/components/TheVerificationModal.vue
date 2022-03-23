<template>
  <div class="verification">
    <div class="verification__container">
      <div class="verification__box">
        <h1 class="verification__title">
          {{ !smsSent ? "Вход в аккаунт" : "Код из смс" }}
        </h1>
        <p class="verification__label">
          {{
            !smsSent
              ? "Сможете быстро оформлять заказы, использовать бонусы"
              : `На номер ${getNumber}`
          }}
        </p>
        <form @submit.prevent="submit" v-if="!smsSent">
          <div class="verification__phone">
            <label for="phonenumber">Номер телефона</label>
            <input
              type="tel"
              id="phonenumber"
              maxlength="13"
              required
              v-model="getNumber"
              placeholder="+998"
              title="Enter Phone number with the code"
            />
          </div>
          <div id="recaptcha-container" class="verification__recaptcha"></div>
          <button class="verification__btn" id="log-in" type="submit">
            Войти
          </button>
        </form>

        <div v-if="smsSent">
          <div class="verification__phone">
            <label>Enter Otp</label>
            <input
              type="text"
              id="otpField"
              pattern="[0-9]{6}"
              maxlength="6"
              v-model="otpnum"
              placeholder="Enter OTP"
              required
            />
          </div>
          <button @click="verifyCode" id="otp-btn" class="verification__btn">
            Войти
          </button>
        </div>

        <p class="verification__info">
          Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
          и пользовательским соглашением
        </p>
      </div>

      <button class="verification__close" @click="closeModalFunc">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_236_29161)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.77617 0.304743C1.36985 -0.101581 0.711067 -0.101581 0.304743 0.304743C-0.101581 0.711067 -0.101581 1.36985 0.304743 1.77617L14.5286 16L0.304752 30.2238C-0.101572 30.6302 -0.101572 31.2889 0.304752 31.6953C0.711076 32.1016 1.36986 32.1016 1.77618 31.6953L16 17.4714L30.2238 31.6953C30.6301 32.1016 31.2889 32.1016 31.6953 31.6953C32.1016 31.2889 32.1016 30.6301 31.6953 30.2238L17.4714 16L31.6953 1.77618C32.1016 1.36985 32.1016 0.71107 31.6953 0.304746C31.2889 -0.101578 30.6302 -0.101578 30.2238 0.304746L16 14.5286L1.77617 0.304743Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_236_29161">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      phoneNumber: null,
      confirmationResult: null,
      otpnum: null,
      recaptchaVerifier: null,
      recaptchaWidgetId: null,
      confirmResult: null,
      smsSent: false,
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  mounted() {
    firebase.auth().useDeviceLanguage();
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("log-in", {
      size: "invisible",
      // callback: (response) => {
      //   // reCAPTCHA solved, allow signInWithPhoneNumber.
      //   console.log(response);
      // },
    });
  },
  methods: {
    submit() {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      this.recaptchaVerifier.render().then((widgetId) => {
        this.recaptchaWidgetId = widgetId;
      });

      var number = this.getNumber;
      firebase
        .auth()
        .signInWithPhoneNumber(number, this.recaptchaVerifier)
        .then((confirmationResult) => {
          this.toast.success("Sms Sent!");
          this.confirmResult = confirmationResult;
          this.smsSent = true;
        })
        .catch((error) => {
          this.toast.error(`Sms not sent", ${error.message}`);
        });
    },
    verifyCode() {
      if (this.otpnum) {
        this.confirmResult
          .confirm(this.otpnum)
          .then(() => {
            this.toast.success(`Succesfully ordered"`);
            this.sendOrder();
            this.closeModalFunc();
            this.$store.dispatch("restore", {
              cart: [],
              totalSum: 0,
              withDiscount: 0,
              quantity: 0,
              address: null,
            });
            this.$router.push("/ordered");
          })
          .catch((error) => {
            this.toast.error(`Sms not sent", ${error.message}`);
          });
      } else {
        this.toast.error(`Enter OTP number`);
      }
    },
    sendOrder() {
      axios
        .post("https://sheetdb.io/api/v1/43moshti6apba", {
          data: this.order,
        })
        .then(() => {
          this.toast.success("Your order sendded to our Branch");
        })
        .catch((error) => {
          this.toast.error("Something went wrong: " + error.response.status);
        });
    },
    closeModalFunc() {
      this.$emit("closeModal");
    },
  },
  computed: {
    getNumber() {
      return this.$store.getters.getNumber;
    },
    order() {
      return this.$store.getters.address;
    },
  },
};
</script>

<style lang="scss">
.verification {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(32px);
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    background: #f9f9f9;
    border-radius: 24px;
    width: 850px;
    text-align: center;
    padding: 60px 0;
    position: relative;
  }

  &__box {
    width: 380px;
    margin: auto;
  }

  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #191919;
  }

  &__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 16px 0 20px;
    color: #191919;
    width: 80%;
    margin: auto;
  }

  &__phone {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;

    label {
      color: #a5a5a5;
      margin-bottom: 4px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }

    input {
      width: 100%;
      height: 48px;
      background: #ffffff;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      padding: 14px 16px;
      outline: none;
      font-size: 16px;
      margin-bottom: 16px;

      &::placeholder {
        color: #a5a5a5;
      }
    }
  }

  &__btn {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: white;
    background: #ff7010;
    border-radius: 6px;
    width: 80%;
    margin: auto;
    height: 48px;
    border: none;
    cursor: pointer;
  }

  &__recaptcha {
    width: 80%;
    margin: auto;
    div {
      margin-bottom: 16px;
    }
  }

  &__info {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #191919;
    opacity: 0.4;
    width: 80%;
    margin: auto;
    margin-top: 12px;
  }

  &__close {
    position: absolute;
    top: 0;
    right: -60px;
    background: none;
    border: none;
    cursor: pointer;
  }
}

@media (max-width: 860px) {
  .verification {
    &__container {
      max-width: 90%;
    }

    &__close {
      right: 0;
      top: -60px;
    }
  }
}

@media (max-width: 410px) {
  .verification {
    &__box {
      width: auto;
    }
  }
}
</style>
