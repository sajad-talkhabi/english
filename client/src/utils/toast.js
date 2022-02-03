import "willatoast/dist/main.css";
import willaToast from "willatoast";

const toast = {
    error: (message, title = "Error") => {
        return willaToast.normal({
            title: title,
            titleColor: "#ffd600",
            message: message,
            position: "bottomCenter"
        });
    },
    success: (message, title = "Success") => {
        return willaToast.normal({
            title: title,
            message: message,
            titleColor: '#fff',
            position: "bottomCenter"
        });
    },
    question: (message, title = "Success", callback) => {
        return willaToast.normal({
            title: title,
            message: message,
            position: "center",
            timeout: false,
            theme: 'dark',
            buttons: [
                ['<button style="border: 1px dashed white;" >yes</button>', function (instance, toast) {
                    callback();
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

                }, true],
                ['<button>no</button>', function (instance, toast) {

                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

                }]
            ],
        });
    }
};

export default toast;