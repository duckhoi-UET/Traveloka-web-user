import { message as $message } from 'ant-design-vue';

export default function ({ $axios, redirect }, inject) {
    $axios.onError((error) => {
        const code = error?.response ? parseInt(error.response.status, 10) : null;
        if (code === 401) {
            redirect('/login');
        }
    });

    const handleError = (error, callback = null) => {
        console.log(error);
        const errorData = error?.response?.data;
        if (callback) {
            callback(error);
        } else if (errorData?.message) {
            $message.error(errorData?.message);
        } else {
            $message.error('Có lỗi xảy ra vui lòng thử lại sau');
        }
    };

    inject('handleError', handleError);
}
