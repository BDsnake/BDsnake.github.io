
import axios from 'axios';

// 创建 Axios 实例
var instance = axios.create({
    // baseURL: '', // 设置基础 URL
    timeout: 10000,   // 请求超时设置
});

// GET 请求
export const get = (url, params, config = {}) => {
    return instance({
        url,
        params,
        ...config // 将额外配置展开到请求配置中
    });
}

// POST 请求
export const post = (url, data, config = {}) => {
    return instance({
        url,
        method: 'post',
        data,
        ...config // 其他配置选项
    });
}


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 使用 async + await 调用示例
const fetchCaptcha = async () => {
    try {
        const response = await get('/captcha/generate', {}, {
            responseType: 'blob', // 处理返回的图片数据
            withCredentials: true, // 允许携带 Cookie
        });

        if (response.status === 200) {
            const imageUrl = URL.createObjectURL(response.data);
            captchaImage.value = imageUrl; // 设置验证码图片的 URL
        }
    } catch (error) {
        console.error('获取验证码失败:', error);
    }
};

// 发送 POST 请求示例
const sendData = async () => {
    try {
        const response = await post('/your/api/endpoint', { /* headers */ }, { /* params */ }, { /* data */ }, {
            withCredentials: true, // 允许携带 Cookie
        });

        if (response.status === 200) {
            console.log('数据发送成功:', response.data);
        }
    } catch (error) {
        console.error('发送数据失败:', error);
    }
};