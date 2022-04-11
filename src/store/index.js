import { createStore } from "vuex";

export default createStore({
  state: {
    products: {
      pizza: {
        name: "Пицца",
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
      sushi: {
        name: "Суши",
        list: [
          {
            id: "sushi1",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "NEW",
            img: require("@/assets/images/sushi/1.png"),
            price: 475,
          },
          {
            id: "sushi2",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "ХИТ",
            img: require("@/assets/images/sushi/5.png"),
            price: 395,
          },
          {
            id: "sushi3",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "",
            img: require("@/assets/images/sushi/7.png"),
            price: 425,
          },
          {
            id: "sushi4",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/sushi/2.png"),
            price: 525,
          },
          {
            id: "sushi5",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/sushi/3.png"),
            price: 525,
          },
          {
            id: "sushi6",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "HOT",
            img: require("@/assets/images/sushi/4.png"),
            price: 425,
          },
          {
            id: "sushi7",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "HOT",
            img: require("@/assets/images/sushi/6.png"),
            price: 475,
          },
          {
            id: "sushi8",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "",
            img: require("@/assets/images/sushi/8.png"),
            price: 395,
          },
        ],
      },
      snack: {
        name: "Закуски",
        list: [
          {
            id: "snack1",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "SUPER",
            img: require("@/assets/images/snack/2.png"),
            price: 475,
          },
          {
            id: "snack2",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "ХИТ",
            img: require("@/assets/images/snack/5.png"),
            price: 425,
          },
          {
            id: "snack3",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "",
            img: require("@/assets/images/snack/7.png"),
            price: 395,
          },
          {
            id: "snack4",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "ХИТ",
            img: require("@/assets/images/snack/5.png"),
            price: 425,
          },
          {
            id: "snack5",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "",
            img: require("@/assets/images/snack/3.png"),
            price: 395,
          },
          {
            id: "snack6",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/snack/4.png"),
            price: 425,
          },
          {
            id: "snack7",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "",
            img: require("@/assets/images/snack/6.png"),
            price: 475,
          },
          {
            id: "snack8",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/snack/4.png"),
            price: 425,
          },
        ],
      },
      dessert: {
        name: "Десерты",
        list: [
          {
            id: "dessert1",
            name: "Филадельфия крем-брюле",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "NEW",
            img: require("@/assets/images/dessert/3.png"),
            price: 399,
          },
          {
            id: "dessert2",
            name: "Филадельфия кранч",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "ХИТ",
            img: require("@/assets/images/dessert/5.png"),
            price: 549,
          },
          {
            id: "dessert3",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "",
            img: require("@/assets/images/dessert/7.png"),
            price: 249,
          },
          {
            id: "dessert4",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/dessert/2.png"),
            price: 630,
          },
          {
            id: "dessert5",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/dessert/1.png"),
            price: 520,
          },
          {
            id: "dessert6",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "",
            img: require("@/assets/images/dessert/3.png"),
            price: 249,
          },
          {
            id: "dessert7",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "",
            img: require("@/assets/images/dessert/6.png"),
            price: 159,
          },
          {
            id: "dessert8",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "",
            img: require("@/assets/images/dessert/8.png"),
            price: 299,
          },
        ],
      },
      drinks: {
        name: "Напитки",
        list: [
          {
            id: "drinks1",
            name: "Pepsi",
            detail: "Pepsi original",
            label: "NEW",
            img: require("@/assets/images/drinks/1.png"),
            price: 399,
          },
          {
            id: "drinks2",
            name: "Pepsi",
            detail: "Pepsi black",
            label: "ХИТ",
            img: require("@/assets/images/drinks/5.png"),
            price: 549,
          },
          {
            id: "drinks3",
            name: "Pepsi",
            detail: "Pepsi no sugar",
            label: "",
            img: require("@/assets/images/drinks/7.png"),
            price: 249,
          },
          {
            id: "drinks4",
            name: "Game Fuel",
            detail: "Game Fuel",
            label: "",
            img: require("@/assets/images/drinks/2.png"),
            price: 630,
          },
          {
            id: "drinks5",
            name: "Pepsi",
            detail: "Pepsi white",
            label: "",
            img: require("@/assets/images/drinks/3.png"),
            price: 520,
          },
          {
            id: "drinks6",
            name: "Game Fuel",
            detail: "Game Fuel",
            label: "NEW",
            img: require("@/assets/images/drinks/4.png"),
            price: 249,
          },
          {
            id: "drinks7",
            name: "Pepsi",
            detail: "Pepsi no sugar",
            label: "NEW",
            img: require("@/assets/images/drinks/6.png"),
            price: 159,
          },
          {
            id: "drinks8",
            name: "Mirinda",
            detail: "Mirinda mini",
            label: "",
            img: require("@/assets/images/drinks/8.png"),
            price: 299,
          },
        ],
      },
      souse: {
        name: "Соусы",
        list: [
          {
            id: "souse1",
            name: "Филадельфия кранч",
            detail: "",
            label: "NEW",
            img: require("@/assets/images/souse/1.png"),
            price: 399,
          },
          {
            id: "souse2",
            name: "Филадельфия крем-брюле",
            detail: "",
            label: "ХИТ",
            img: require("@/assets/images/souse/5.png"),
            price: 549,
          },
          {
            id: "souse3",
            name: "Супер Филадельфия",
            detail: "",
            label: "",
            img: require("@/assets/images/souse/7.png"),
            price: 249,
          },
          {
            id: "souse4",
            name: "Тигр мама",
            detail: "",
            label: "",
            img: require("@/assets/images/souse/2.png"),
            price: 630,
          },
          {
            id: "souse5",
            name: "Филадельфия крем-брюле",
            detail: "",
            label: "",
            img: require("@/assets/images/souse/3.png"),
            price: 520,
          },
          {
            id: "souse6",
            name: "Тигр мама",
            detail: "",
            label: "",
            img: require("@/assets/images/souse/4.png"),
            price: 249,
          },
          {
            id: "souse7",
            name: "Супер Филадельфия",
            detail: "",
            label: "",
            img: require("@/assets/images/souse/6.png"),
            price: 159,
          },
          {
            id: "souse8",
            name: "Филадельфия кранч",
            detail: "",
            label: "",
            img: require("@/assets/images/souse/8.png"),
            price: 299,
          },
        ],
      },
      combo: {
        name: "Комбо",
        list: [
          {
            id: "combo1",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "NEW",
            img: require("@/assets/images/combo/1.png"),
            price: 399,
          },
          {
            id: "combo2",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "ХИТ",
            img: require("@/assets/images/combo/5.png"),
            price: 549,
          },
          {
            id: "combo3",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "",
            img: require("@/assets/images/combo/7.png"),
            price: 249,
          },
          {
            id: "combo4",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/combo/2.png"),
            price: 630,
          },
          {
            id: "combo5",
            name: "Филадельфия крем-брюле",
            detail:
              "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            label: "",
            img: require("@/assets/images/combo/3.png"),
            price: 520,
          },
          {
            id: "combo6",
            name: "Филадельфия кранч",
            detail:
              "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            label: "",
            img: require("@/assets/images/combo/4.png"),
            price: 249,
          },
          {
            id: "combo7",
            name: "Тигр мама",
            detail:
              "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            label: "",
            img: require("@/assets/images/combo/6.png"),
            price: 159,
          },
          {
            id: "combo8",
            name: "Супер Филадельфия",
            detail:
              "Действительно много семги, сливочный сыр, огурец, рис, н...",
            label: "",
            img: require("@/assets/images/combo/8.png"),
            price: 299,
          },
        ],
      },
    },
    cart: [],
    totalSum: 0,
    withDiscount: 0,
    quantity: 0,
    ordered: false,
    address: null,
    AllProducts: function () {},
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
    getNumber(state) {
      return state.address.Phone;
    },
    AllProducts(state) {
      let Array = [];
      for (let item in state.products) {
        Array.push(...state.products[item].list);
      }
      return Array;
    },
    ordered(state) {
      return state.ordered;
    },
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
    restoreStore(state, payload) {
      state.cart = payload.cart;
      state.totalSum = payload.totalSum;
      state.withDiscount = payload.withDiscount;
      state.quantity = payload.quantity;
      state.address = payload.address;
    },
    ordered(state, payload) {
      state.ordered = payload;
    },
  },
  actions: {
    addToCart(context, payload) {
      const product = context.getters.AllProducts.find(
        (item) => item.id === payload.id
      );
      context.commit("addProductToCart", product);
    },
    plusProduct(context, payload) {
      const product = context.getters.AllProducts.find(
        (el) => el.id === payload.id
      );
      context.commit("plusProduct", product);
    },
    minusProduct(context, payload) {
      const product = context.getters.AllProducts.find(
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
    restore(context, payload) {
      context.commit("restoreStore", payload);
    },
    ordered(context, payload) {
      context.commit("ordered", payload);
    },
  },
  modules: {},
});
