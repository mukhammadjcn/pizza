import { createStore } from "vuex";

export default createStore({
  state: {
    products: {
      pizza: {
        name: "Pizza",
        list: [
          {
            id: "pizza1",
            name: "Чикен Сладкий Чили",
            detail: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу",
            label: "NEW",
            img: require("@/assets/images/pizza/1.png"),
            price: 399,
          },
          {
            id: "pizza2",
            name: "EASY PEASY огуречный расколбас",
            detail: "Курица, Лук, Перец Халапеньо",
            label: "ХИТ",
            img: require("@/assets/images/pizza/5.png"),
            price: 549,
          },
          {
            id: "pizza3",
            name: "EASY PEASY чикен а-ля хрен",
            detail: "Курица, Лук, Соус Карбонара,",
            label: "",
            img: require("@/assets/images/pizza/7.png"),
            price: 249,
          },
          {
            id: "pizza4",
            name: "4 сезона",
            detail: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари",
            label: "",
            img: require("@/assets/images/pizza/2.png"),
            price: 630,
          },
          {
            id: "pizza5",
            name: "4 сезона",
            detail: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари",
            label: "",
            img: require("@/assets/images/pizza/3.png"),
            price: 520,
          },
          {
            id: "pizza6",
            name: "Чикен Сладкий Чили",
            detail: "Курица, Лук, Перец Халапеньо,Томатный соу",
            label: "NEW",
            img: require("@/assets/images/pizza/4.png"),
            price: 249,
          },
          {
            id: "pizza7",
            name: "EASY PEASY чикен а-ля хрен",
            detail: "Курица, Лук, Перец Халапе",
            label: "NEW",
            img: require("@/assets/images/pizza/6.png"),
            price: 159,
          },
          {
            id: "pizza8",
            name: "EASY PEASY огуречный расколбас",
            detail: "Курица, Лук, Перец Халапен",
            label: "",
            img: require("@/assets/images/pizza/8.png"),
            price: 299,
          },
        ],
      },
    },
    cart: [],
    totalSum: 0,
    withDiscount: 0,
    quantity: 0,
    address: null,
  },
  getters: {
    products(state) {
      return state.products;
    },
    cart(state) {
      return state.cart;
    },
    totalSum(state) {
      return state.totalSum;
    },
    withDiscount(state) {
      return state.withDiscount;
    },
    quantity(state) {
      return state.quantity;
    },
    address(state) {
      return state.address;
    },
    getNumber(state){
      return state.address.number
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      const product = payload;
      const productIndex = state.cart.findIndex(
        (el) => el.productId === product.id
      );

      if (productIndex >= 0) {
        if (state.cart[productIndex].qty < 10) {
          state.cart[productIndex].qty++;
          state.totalSum += product.price;
        }
      } else {
        const newItem = {
          productId: product.id,
          name: product.name,
          image: product.img,
          price: product.price,
          qty: 1,
        };
        state.cart.push(newItem);
        state.totalSum += product.price;
      }
      state.quantity++;
    },
    plusProduct(state, payload) {
      const product = payload;
      const productIndex = state.cart.findIndex(
        (el) => el.productId === product.id
      );

      if (state.cart[productIndex].qty < 10) {
        state.cart[productIndex].qty++;
        state.totalSum += product.price;
        state.quantity++;
      } else {
        alert("You can only order 10 for 1 item");
      }
    },
    minusProduct(state, payload) {
      const product = payload;
      const productIndex = state.cart.findIndex(
        (el) => el.productId === product.id
      );

      if (state.cart[productIndex].qty > 1) {
        state.cart[productIndex].qty--;
        state.totalSum -= product.price;
        state.quantity--;
      } else {
        alert("You have to order at least 1 item");
      }
    },
    discount(state, payload) {
      state.withDiscount =
        state.totalSum - (state.totalSum * payload.percent) / 100;
    },
    orderAdress(state, payload) {
      state.address = payload;
    },
  },
  actions: {
    addToCart(context, payload) {
      const product = context.getters.products.pizza.list.find(
        (el) => el.id === payload.id
      );
      context.commit("addProductToCart", product);
    },
    plusProduct(context, payload) {
      const product = context.getters.products.pizza.list.find(
        (el) => el.id === payload.id
      );
      context.commit("plusProduct", product);
    },
    minusProduct(context, payload) {
      const product = context.getters.products.pizza.list.find(
        (el) => el.id === payload.id
      );
      context.commit("minusProduct", product);
    },
    discount(context, payload) {
      context.commit("discount", payload);
    },
    orderAdress(context, payload) {
      context.commit("orderAdress", payload);
    },
  },
  modules: {},
});
