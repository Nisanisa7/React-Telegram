import axios from 'axios'
import Swal from 'sweetalert2'
export const loginUser = (data, history) => (dispatch)=> {
  
    axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, data)
    .then((res)=>{
        //  const result = res.data.data
        const token = res.data.data.token;
        const idUser = res.data.data.idUser;
        const username = res.data.data.username;
        const email = res.data.data.email;
        const phone_number = res.data.data.phone_number;
        const name = res.data.data.name;
        const status_bio = res.data.data.status_bio;
        const avatar = res.data.data.avatar;
        const status = res.data.data.status;
        const isAuth = true;

        const dataUser = {
            data: res.data.data,
            error: res.data.error,
            message: res.data.message,
            status: res.data.status,
            
        }
        console.log(idUser);
        dispatch({type:'LOGIN', payload: dataUser})
        localStorage.setItem('token', token);
        localStorage.setItem('idUser', idUser);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phone_number', phone_number);
        localStorage.setItem('name', name);
        localStorage.setItem('status_bio', status_bio);
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('status', status);
        if(status === 'inactive'){
            Swal.fire({
                icon: 'error',
                title: 'Boo Boo',
                text: 'Please activate your account first!',
              })
        } else{
            history.push('/',
            Swal.fire(
                'Welcome',
                'Welcome to Telegram',
                'success'
              )
            )
        }
    })
    .catch((error)=>{
        console.log(error.response);
        dispatch({type: 'LOGIN_BUYER', payload: error.response.data.error.message })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error.message,
          })
    })
}

export const registerUser = (data, history) =>(dispatch)=>{
    axios.post('http://localhost:4000/v1/auth/register', data)
    .then((result)=>{
        Swal.fire(
            'Register Success!!!',
            'Please check your email to activate your Acccount!',
            'success'
          )
          const dataUser = {
            data: result.data.data,
            error: result.data.error,
            message: result.data.message,
            status: result.data.status,
            
        }
        dispatch({type: 'REGISTER',  payload: dataUser})
        history.push('/login')
    })
    .catch((error)=>{
        if (error.response.data.status === 404){
            return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email already exist'
                    })
        }
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error.message,
          })
    })
}
