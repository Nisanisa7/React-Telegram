import axios from 'axios'
import io from 'socket.io-client';
import Swal from 'sweetalert2'

export const loginUser = (data, history, setSocket) => (dispatch)=> {
  
    axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, data)
    .then((res)=>{
      
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

        if(status === 'inactive'){
          Swal.fire({
              icon: 'error',
              title: 'Boo Boo',
              text: 'Please activate your account first!',
            })
            return 
        }
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
        localStorage.setItem('status', token);
        const resultSocket = io(`${REACT_APP_BACKEND_BASE}`, {
          query: {
            token: localStorage.getItem('token'),
          },
        });;
        setSocket(resultSocket);
    
        
            history.push('/',
            Swal.fire(
                'Welcome',
                'Welcome to Telegram',
                'success'
              )
           )
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
    axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/register`, data)
    .then((result)=>{
        Swal.fire(
            'Register Success!!!',
            'Please check your email to activate your Acccount!',
            'success'
          )
          const dataUser = {
            data: result.data.data.data,
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
export const updateProfile = (data, token, idUser, ) => (dispatch) =>{
    const formData = new FormData()
    console.log(data);
    formData.append('name', data.name);
    formData.append('status_bio', data.status_bio);
    formData.append('phone_number', data.phone_number);
    formData.append('avatar', data.avatar);
    console.log(formData);
    console.log('ini tokennya',token);
    axios.patch(`${process.env.REACT_APP_BACKEND_API}/user/${idUser}`, formData ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res)=>{
      const resData = res.data.data
      // console.log('action nya', resData);
      localStorage.setItem('avatar', resData.avatar)

      const dataUser = {
        data: res.data.data,
        error: res.data.error,
        message: res.data.message,
        status: res.data.status,
    }
    console.log(dataUser, 'datauser');

      dispatch({type:'UPDATE_USER', payload: dataUser})
      Swal.fire(
        'Update Success',
        'update profile success',
        'success'
      )
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response?.data?.message,
      })
    })
}
export const  getCurrentProfile = (idUser) => (dispatch) =>{
      axios.get(`${process.env.REACT_APP_BACKEND_API}/user/${idUser}`)
      .then((res)=>{
        const resData = res.data.data

        dispatch({action:'GET_USER', payload: resData})
        Swal.fire(
          'Update Success',
          'update profile success',
          'success'
        )
      })
      .catch((err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response?.data.message,
        })
      })
}
