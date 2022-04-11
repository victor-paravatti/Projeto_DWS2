import React, { useState } from 'react';
import api from '../../services/api';
import Navabar from '../layout/NavBar';
import Header from '../layout/Header'

export default function Login({ history }){
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    const response = await api.post('/sessions', { email })
    const { _id } = response.data;
    localStorage.setItem('user', _id)
    history.push('/dashboard')
  }
  return (

    <>
      <div>
      <Navabar/>
      </div>
      <div>
      <Header/>
      </div>
      <div>
      <p>
        
      </p>
      
    
      </div>
      
      
    </>
  )
}