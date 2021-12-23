import axios from "axios";
import { FILE_UPLOAD_URL } from "../constants/api";
import { API_BASE_URL, BASE_URL } from "../constants/baseUrl";

axios.defaults.timeout = 60 * 60 * 100000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = false;
//baseUrl
axios.defaults.baseURL = API_BASE_URL;

//code状态码200判断
/*返回结果*/
axios.interceptors.response.use((res) => {
    return res.data;
}, err => {
    return alert("网络异常，请您联系系统管理员!")
});

/*request设置请求头的token*/
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

/**
 * GET 请求，获取数据，采用 spring pathValue 的方式
 * @param url 资源地址
 * @returns {AxiosPromise} Promise 对象
 */
export const getData = (url: string) => {
    return (
        axios({
            method: 'get',
            url,
        })
    )
};

/**
 * DELETE 请求，采用 spring pathValue 的方式
 * @param url 资源地址
 * @returns {AxiosPromise}
 */
export const deleteData = (url: string) => {
    try {
        return (
            axios({
                method: 'delete',
                url,
            })
        )
    } catch (error) {
        console.log(error)
    }

};

/**
 * DELETE 请求，删除多个，post 请求
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const deleteDatas = (url: string, data: unknown) => {
    return (
        axios({
            method: 'post',
            url,
            data,
        })
    )
};

/**
 * POST 请求
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const postData = (url: string, data: unknown) => {
    return (
        axios({
            method: 'post',
            url,
            data,
        })
    )
};

/**
 * UPDATE 请求
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const putData = (url: string, data: unknown) => {
    return (
        axios({
            method: 'put',
            url,
            data,
        })
    )
};

/**
 * 上传文件请求方法
 * @param file
 * @param attachmentType
 * @returns {AxiosPromise}
 */
export const uploadFile = (file: any, uploadFileType: any) => {
    //创建form对象
    let data = new FormData();
    //通过append向form对象添加数据
    data.append('file', file, file.name);
    //data.append('file', file);
    //添加form表单中其他数据
    data.append('chunk', '0');
    /*上传的文件类型，用于后台判断上传的是什么文件*/
    data.append('uploadFileType', uploadFileType);
    //添加请求头

    return (
        axios({
            method: 'post',
            url: FILE_UPLOAD_URL,
            data,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    )
};

/**
 * POST 请求 导出文件 blob
 * @param url 资源地址
 * @param data 参数
 * @returns {AxiosPromise}
 */
export const downloadPostData = (url: string, data: unknown) => {
    return (
        axios({
            method: 'post',
            url,
            data,
            //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
            // 写在axios.post中axios.post(url,data,{'responseType': 'blob'}).then
            responseType: 'blob'
        })
    )
};

/**
 * GET 请求 验证码 blob
 * @param url 资源地址
 * @returns {AxiosPromise}
 */
export const imgGetData = (url: string) => {
    return (
        axios({
            method: 'get',
            url,
            //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
            // 写在axios.post中axios.post(url,data,{'responseType': 'blob'}).then
            responseType: 'blob'
        })
    )
};
