export const BaseUrl = "https://Jwforland.com/forland-pos/api";
export const ImageBaseUrl = "https://Jwforland.com/forland-pos/public";
// export const BaseUrl = "http://192.168.18.97/forland_pos/public/api";
// export const ImageBaseUrl = "http://192.168.18.97/forland_pos/public";
export const EndPoints =  {
    product: {
        getProducts: '/products',
        getProductByName: '/search?query='
    },
    category:{
        getCategory: '/categories'
    },
    salesEnquiry:{
        postSalesEnquiry: '/sales/create'
    },
    paymentMethod:{
        method:'/payment_methods'
    }
}