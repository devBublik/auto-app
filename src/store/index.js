import { createStore } from "vuex";
import { products, filters} from "../models/ProductsModel";

export default createStore({
    state: () => ({
        products: products,
        filterPrices: [0, 10000],
        filters: filters,
        selectedFilters: [],
        sort: 'Сначала дешевые'
    }),

    getters: {
        getCategories(state) {
            return state.filters.filter((el) => el.type === 'category')
        },
        getApplicabilities(state) {
            return state.filters.filter((el) => el.type === 'applicability')
        },
        getFilteredByCategories(state) {
            let applFilters = [...(state.selectedFilters
                        .filter((item => item.type === 'category')))
                        .map((el) => el.value)
                    ]
            if (applFilters.length) {
                let arr = [...state.products]
                let categoriesFilters = [...(state.selectedFilters
                        .filter((item => item.type === 'category')))
                        .map(el => el.value)
                    ]
                let res = []
                for (let i=0; i<arr.length; i++ ) {
                    if (categoriesFilters.includes(arr[i].category)) {
                        res.push(arr[i])
                    }
                }
                    return res
            } else {
                return state.products
            }
        },

        getFilteredByApplicabilities(state, getters) {
            let applFilters = [...(state.selectedFilters
                        .filter((item => item.type === 'applicability')))
                        .map((el) => el.value)
                    ]
            if (applFilters.length) {
                let arr = [...getters.getFilteredByCategories]
                let res = []
                for (let i=0; i<arr.length; i++ ) {
                    if (applFilters.includes(arr[i].applyTo)) {
                        res.push(arr[i])
                    }
                }
                    return res
            } else {
                return getters.getFilteredByCategories
            }  
        },

        filteredProducts(state, getters) {
            let arr = getters.getFilteredByApplicabilities;
            return arr.filter((el) => el.price >= state.filterPrices[0] &&  el.price <= state.filterPrices[1])
        },
        sortedProducts(state, getters) {
            let arr = getters.filteredProducts
            switch (state.sort) {
                case 'Сначала дорогие' :
                    return arr.sort((a, b) => b.price - a.price)
                default:
                    return arr.sort((a, b) => a.price - b.price)
            }
        }

    },

    mutations: {
        addFilter(state, category) {
            let item = state.filters.find((el) => el.value === category.value)
            item.isChecked = true
            state.selectedFilters = state.filters.filter((el) => el.isChecked)
        },
        removeFilter(state, category) {
            let item = state.filters.find((el) => el.value === category.value)
            item.isChecked = false
            state.selectedFilters = state.filters.filter((el) => el.isChecked)

        },
        resetFilters(state) {
            state.filterPrices = [0, 10000]
            state.selectedFilters = []
            state.filters = state.filters.map(function(el) {
                return {...el,
                        isChecked: false
                        }
            })
        },
        resetPriceFilters(state) {
            state.filterPrices = [0, 10000]
        },
        setSort(state, option) {
            state.sort = option
        }
    },

    actions: {
        setFilters({state, commit}, category) {
            const isActiveFilter = state.selectedFilters.find((item) => item.value == category.value)
            if (isActiveFilter) {
                commit('removeFilter', category)
            } else {
                commit('addFilter', category)
            }
        },
        deleteOneFilter({state, commit}, filter) {
            let item = state.selectedFilters.find((el) => el.value === filter.value)
            item.isChecked = false
            state.selectedFilters = state.filters.filter((el) => el.isChecked)
        },
    }
})