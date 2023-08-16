import Swal from 'sweetalert2'

export const Toast = (text, type) => {
    Swal.fire({
        toast: true,
        icon: type,
        title: text,
        animation: true,
        position: 'bottom',
        showConfirmButton: false,
        customClass: {
            popup: 'colored-toast', 
        },
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
}


export const AlertBox = (text, title, type) => {
    Swal.fire({
        title: title,
        text: text,
        icon: type ? type : "",
        showCancelButton: true,
        confirmButtonColor: '#b01116',
        allowOutsideClick: false,
    })
}