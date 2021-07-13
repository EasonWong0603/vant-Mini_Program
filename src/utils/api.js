import http from "./http";

// 首页轮播图接口
export const getBannerDataApi = (params) => http.get("/home/banner", params);

// 首页推荐接口
export const getRecommendDataApi = (data) => http.post("/home/recommend", data);

// 分类接口
export const getClassifyDataApi = (data) => http.post("/classify", data);

// 详情页接口
export const getDetailDataApi = (data) => http.post("/detail", data);

// 短信验证码接口
export const getCodeDataApi = (data) => http.post("/register/getCode", data);

// 登录注册接口
export const getRegisterDataApi = (data) => http.post("/register", data);

// 获得个人信息接口
export const getUserDataApi = (data) => http.post("/userinfo/get", data);

// 修改个人信息接口
export const updateUserDataApi = (data) => http.post("/userinfo/update", data);

// 获取收货地址接口
export const getAddressDataApi = (data) => http.post("/address/get", data);

// 新增收货地址接口
export const addAddressDataApi = (data) => http.post("/address/add", data);

// 修改收货地址接口
export const updateAddressDataApi = (data) =>
  http.post("/address/update", data);

// 获取购物车列表接口
export const getCartDataApi = (data) => http.post("/cart/get", data);

// 加入购物车接口
export const addCartDataApi = (data) => http.post("/cart/add", data);
