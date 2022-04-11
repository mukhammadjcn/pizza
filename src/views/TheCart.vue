<template>
  <div class="cart">
    <div class="cart__container">
      <h1 class="cart__title">Ваш заказ</h1>
      <div class="cart__list">
        <TheCartItem
          v-for="item in cart"
          :key="item"
          :name="item.name"
          :img="item.image"
          :id="item.productId"
          :price="item.price"
          :qty="item.qty"
        />
      </div>
      <div class="cart__sum">
        <div class="cart__promocode">
          <input type="text" placeholder="Промокод" v-model="promocode" />
          <button @click="usePromo">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4898_4078)">
                <path
                  d="M16.6875 7.46641L2.60474 1.70992C2.01145 1.46739 1.34119 1.57408 0.855567 1.98823C0.369941 2.40244 0.166828 3.04066 0.325555 3.65378L1.57905 8.49621H7.7163C7.99871 8.49621 8.2277 8.72175 8.2277 8.99999C8.2277 9.27819 7.99874 9.50377 7.7163 9.50377H1.57905L0.325555 14.3462C0.166828 14.9593 0.369907 15.5975 0.855567 16.0117C1.34218 16.4267 2.01251 16.5321 2.60477 16.29L16.6875 10.5336C17.3287 10.2715 17.727 9.68384 17.727 8.99999C17.727 8.31613 17.3287 7.72846 16.6875 7.46641Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4898_4078">
                  <rect
                    width="17.4545"
                    height="17.4545"
                    fill="white"
                    transform="translate(0.272461 0.272705)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
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
      </div>
      <TheOrder @showModal="showModalFunc" />
    </div>
    <TheVerificationModal
      v-if="showModal"
      @closeModal="closeModal"
      @nextTrue="nextTrue"
    />
  </div>
</template>

<script>
import TheCartItem from "../components/TheCartItem.vue";
import TheOrder from "@/components/TheOrder.vue";
import TheVerificationModal from "@/components/TheVerificationModal.vue";
import { useToast } from "vue-toastification";

export default {
  components: { TheCartItem, TheOrder, TheVerificationModal },
  data() {
    return {
      promocode: "",
      showModal: false,
      next: false,
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    usePromo() {
      // console.log(this.$store.getters.sumTotal);
      if (this.promocode == "Mukhammadjon") {
        if (this.$store.getters.totalSum >= 1199) {
          this.toast.info("You get super - 25% discount");
          this.$store.dispatch("discount", { percent: 25 });
        } else {
          this.toast.warning(
            "In order to get discount you should buy more 1199 ₽"
          );
        }
        this.promocode = "";
      } else {
        this.toast.error("Please enter enter valid Promocode");
        this.promocode = "";
      }
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "auto";
    },
    showModalFunc() {
      this.showModal = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.style.overflow = "hidden";
    },
    nextTrue() {
      this.next = true;
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    sumTotal() {
      return this.$store.getters.totalSum;
    },
    withDiscount() {
      return this.$store.getters.withDiscount;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (next) {
      next();
    } else {
      const response = confirm("If you leave, Your data will be lost !");
      next(response);
    }
  },
};
</script>

<style lang="scss">
.cart {
  background: #f9f9f9;
  &__container {
    max-width: 860px;
    margin: auto;
    padding: 40px 0 70px;
  }

  &__title {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #191919;
    margin-bottom: 24px;
  }

  &__sum {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
  }

  &__promocode {
    display: flex;
    align-items: center;
    input {
      height: 48px;
      padding: 12px 16px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      border: 1px solid #f0f0f0;
      border-radius: 6px 0 0 6px;
      outline: none;
      &::placeholder {
        color: #a5a5a5;
      }
    }

    button {
      height: 48px;
      width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ff7010;
      border-radius: 0 6px 6px 0;
      border: none;
      cursor: pointer;
    }
  }

  &__sumTotal {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #ff7010;
  }

  &_withDiscount {
    margin-left: 8px;
    color: #e74a4a;
    transition: 0.2s ease-in-out;
  }

  .discount-active {
    color: #a5a5a5;
    text-decoration: line-through;
    font-size: 18px;
    transition: 0.2s ease-in-out;
  }
}

@media (max-width: 860px) {
  .cart {
    &__container {
      width: 94%;
    }
    &__sum {
      flex-direction: column-reverse;
      gap: 24px;
    }
  }
}
</style>
