import { createStore } from 'vuex'



const state = {
    install: false,
    order: [
        {
            id: 2,
            count: 2
        },
        {
            id: 1,
            count: 1
        },
        {
            id: 3,
            count: 1
        },
        {
            id: 4,
            count: 1,
        }
    ],
    goods: [
        {
            id: 1,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
        {
            id: 2,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
        {
            id: 3,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
        {
            id: 4,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
        {
            id: 5,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
        {
            id: 6,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
        {
            id: 7,
            name: "Вытяжное устройство",
            description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
            article: "Артикул: G2H1065",
            img: "/img.png",
            price: 12644
        },
    ]
}
const actions = {
    del({ state }, id) {
        state.order.forEach((item, index, array) => {
            if (item.id == id) array.splice(index, 1)
        });
    },

    delAll({ state }) {
        state.order = []
    },

    setInstall({ state }, newVal) {
        state.install = newVal
    },

    subs({ state }, id) {
        state.order.forEach((item) => {
            if (item.id == id) {
                item.count--
            }
        })
    },
    add({ state }, id) {
        state.order.forEach(item => {
            if (item.id == id) {
                item.count++
            }
        })
    },
    async sendOrder({state, getters}){
        let order = {
            order: getters.getGoodsByOrder,
            install: state.install
          };
          console.log(order)
          
          fetch('/fetch/post/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: order
          }).then(res=>console.log(res))
          .catch(error=>console.log(error));
          
          alert('Заказ оформлен')
    }

}
const mutations = {

}
const getters = {

    getGoodsByOrder(state) {
        state.order.forEach((item, index) => {
            if (item.count < 1) state.order.splice(index, 1)
        });
        return state.order.map(item => {
            return {
                count: item.count,
                ...state.goods.find(good => good.id == item.id)
            }

        });
    },

    total(state, getters) {
        const sum = getters.getGoodsByOrder.reduce(function (accumulator, item) {
            return accumulator += item.count * item.price
        }, 0)

        const count = getters.getGoodsByOrder.reduce(function (accumulator, item) {
            return accumulator += item.count
        }, 0)
        return {
            sum,
            count
        }
    }
}
export default createStore({
    state,
    getters,
    actions,
    mutations,
})