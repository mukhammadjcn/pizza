<template>
  <div class="location-checker flex">
    <span class="location-checker__label">Проверить адрес доставки</span>
    <div class="location-checker__input">
      <svg
        class="location-logo"
        @click="getLocation()"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0201 3.90632C8.5438 3.89562 7.33479 5.11238 7.32362 6.62015C7.3125 8.12785 8.50412 9.36364 9.97993 9.375C9.98678 9.37504 9.99358 9.37508 10.0004 9.37508C11.4668 9.37508 12.6653 8.16195 12.6764 6.66117C12.6875 5.15355 11.4959 3.91769 10.0201 3.90632ZM10.0003 8.59387C9.99553 8.59387 9.99048 8.59383 9.98567 8.59379C8.9315 8.58567 8.08032 7.70293 8.08828 6.62601C8.09619 5.55394 8.95219 4.68745 9.99966 4.68745C10.0045 4.68745 10.0095 4.68749 10.0143 4.68753C11.0685 4.69566 11.9197 5.57839 11.9117 6.65531C11.9038 7.72738 11.0478 8.59387 10.0003 8.59387Z"
          fill="#FF7010"
        />
        <path
          d="M12.346 14.7048C14.8891 11.3605 16.4784 9.6165 16.4998 6.69056C16.5267 3.00919 13.6025 0 9.99941 0C6.43839 0 3.52729 2.94641 3.50022 6.59095C3.47835 9.59623 5.09716 11.3378 7.65781 14.7042C5.11043 15.0932 3.50022 16.0704 3.50022 17.2657C3.50022 18.0663 4.22461 18.7848 5.53999 19.2887C6.73723 19.7474 8.32118 20 10 20C11.6789 20 13.2628 19.7474 14.46 19.2887C15.7754 18.7848 16.4998 18.0663 16.4998 17.2656C16.4998 16.071 14.8911 15.094 12.346 14.7048ZM4.26487 6.59685C4.28873 3.38087 6.85714 0.781252 9.99948 0.781252C13.179 0.781252 15.7589 3.43704 15.7352 6.68474C15.7148 9.46342 14.0294 11.1758 11.3385 14.7595C10.8586 15.3984 10.4178 16.0025 10.0006 16.5934C9.5846 16.0021 9.15262 15.4089 8.66548 14.7593C5.86342 11.0255 4.24415 9.44256 4.26487 6.59685ZM10 19.2188C6.71754 19.2188 4.26487 18.1877 4.26487 17.2657C4.26487 16.5819 5.73109 15.7182 8.19638 15.4191C8.74134 16.1496 9.21911 16.8132 9.68772 17.4911C9.75929 17.5946 9.8756 17.6562 9.99967 17.6563C9.99979 17.6563 9.9999 17.6563 10 17.6563C10.124 17.6563 10.2402 17.5949 10.3119 17.4916C10.7761 16.8226 11.267 16.1425 11.8073 15.4195C14.2702 15.7189 15.7352 16.5824 15.7352 17.2657C15.7351 18.1877 13.2825 19.2188 10 19.2188Z"
          fill="#FF7010"
        />
      </svg>
      <input type="text" placeholder="Адрес" v-model="location" />
      <svg
        @click="showLocation()"
        class="location-checker-btn"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="44" height="44" rx="6" fill="#FF7010" />
        <path
          d="M29.0471 20.5942L16.1379 15.3174C15.5941 15.0951 14.9797 15.1929 14.5345 15.5725C14.0894 15.9522 13.9032 16.5372 14.0487 17.0993L15.1977 21.5382H20.8235C21.0824 21.5382 21.2923 21.7449 21.2923 22C21.2923 22.255 21.0824 22.4618 20.8235 22.4618H15.1977L14.0487 26.9006C13.9032 27.4627 14.0893 28.0477 14.5345 28.4274C14.9806 28.8078 15.595 28.9044 16.138 28.6825L29.0472 23.4057C29.6349 23.1655 30 22.6268 30 22C30 21.3731 29.6349 20.8344 29.0471 20.5942Z"
          fill="white"
        />
      </svg>
    </div>
    <button class="location-checker__btn" @click="showLocation()">
      Проверить
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      location: "",
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    showLocation() {
      if (this.location) {
        this.toast.info(`We work in ${this.location}`);
      } else {
        this.getLocation();
      }
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition((positon) => {
        this.getAdress(positon.coords.latitude, positon.coords.longitude);
      });
    },
    getAdress(lat, long) {
      var options = {
        method: "GET",
        url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
        params: { latlng: `${lat},${long}`, language: "en" },
        headers: {
          "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
          "x-rapidapi-key":
            "de99029254msh6b85d4f50fe4d4ap19011fjsn7ecdae8b48b7",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.location = response.data.plus_code.compound_code
            .split(" ")
            .filter((el, index) => index > 0)
            .join(" ");
          this.toast.success("Your location succesfully detected");
        })
        .catch((error) => {
          this.toast.error(
            `Something went wrong, Error code - ${error.response.status}`
          );
        });
    },
  },
};
</script>

<style lang="scss">
.location-checker {
  gap: 20px;
  background: white;
  padding: 16px 32px;
  border-radius: 8px;

  &__label {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
    margin-right: 12px;
  }

  &__input {
    position: relative;
    height: 48px;
    flex-grow: 1;

    .location-logo {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }

    input {
      height: 100%;
      width: 100%;
      padding: 12px 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #191919;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      outline: none;
      &::placeholder {
        color: #a5a5a5;
      }
    }
  }

  &__btn {
    padding: 13px 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: white;
    background: #ff7010;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  &-btn {
    display: none;
    cursor: pointer;
  }
}

@media (max-width: 876px) {
  .location-checker {
    flex-direction: column;

    &__label {
      font-weight: 500;
    }

    &__btn {
      display: none;
    }

    &-btn {
      display: block;
      position: absolute;
      top: 0;
      height: 100%;
      right: 2.1px;
    }

    &__input {
      width: 100%;
    }
  }
}
</style>
