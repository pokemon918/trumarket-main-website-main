import axios from "axios";
import { AlertBox } from "../components/toast";
import { BaseUrl, EndPoints } from "./config";
import  * as ActionType  from "./types";


export const actions = {
    getCotegories: async () => {
        try {
            let response = await axios.get(`${BaseUrl + EndPoints.category.getCategory}`)
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            // console.log(error?.response?.message);
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')

        }
    },
    getCotegoriesById: async (id) => {
        try {
            let response = await axios.get(`${BaseUrl + EndPoints.category.getCategory}/${id}`)
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            // console.log(error?.response?.message);
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')

        }
    },
    getProducts: async () => {
        try {
            let response = await axios.get(`${BaseUrl + EndPoints.product.getProducts}`);
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            // console.log(error?.response?.message);
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')

        }
    },

    getSearchProduct: async (searchValue, catId) => {
        try {
            let response = await axios.get(`${BaseUrl + EndPoints.product.getProductByName}${searchValue}&cat_id=${catId}`);
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            // console.log(error?.response?.message);
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')

        }
    },
     getPaymentMethod: async () => {
        try {
            let response = await axios.get(`${BaseUrl + EndPoints.paymentMethod.method}`);
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            // console.log(error?.response?.message);
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')

        }
    },
    postEnquiryProducts: async () => {
        try {
            let response = await axios.get(`${BaseUrl + EndPoints.product.getProducts}`);
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            // console.log(error?.response?.message);
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')

        }
    },
    postSaleEnquired: async (data) => {
        try {
            let response = await axios.post(`${BaseUrl + EndPoints.salesEnquiry.postSalesEnquiry}`, data);
            if(response?.status === 200){
                return response?.data
            }
        } catch (error) {
            AlertBox(error?.response?.message, 'Something went wrong.', 'error')
        }
    },
    
    productsEnquiry : (items) => {
        return{
            type: ActionType.ENQUIRY_PRODUCTS,
            items
        }
    },
    searchProducts: (items) => {
        return{
            type: ActionType.SEARCH_PRODUCTS,
            items
        }
    },
    setCatgoryId : (items) => {
        return{
            type: ActionType.SET_CATGORY_ID,
            items
        }
    } 
}