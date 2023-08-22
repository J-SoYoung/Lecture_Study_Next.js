'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInputs'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}:{isSignin:boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signinContent: string, signupContent:string)=>{
    return isSignin ? signinContent : signupContent
  }

  const [inputs, setInputs] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    city:'',
    password:''
  })

  const handleChangeInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div>
      <Button 
        onClick={handleOpen} 
        className={`${renderContent('bg-[#02343F] text-white','')}border p-1 px-4 rounded mr-3`} 
        >
          {renderContent("Sign in","Sign up")}
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='p-2 h-[500px]'>
            <div className='uppercase font-bold text-center p-2 border-b mb-2'>
              <p className='text-sm'>
                {renderContent("Sign in", "Create Account")}
              </p>
              <div className='m-auto '>
                <h2 className='text-2xl font-lignt text-center my-2'>
                  {renderContent("RadiantRestro _ login", "환영합니다. RadiantRestro의 서비스 회원가입 합니다")}
                </h2>
                <AuthModalInputs inputs={inputs} handleChangeInput={handleChangeInput} isSignin={isSignin}/>
                <button className='uppercase bg-red-600 w-full p-3 text-white rounded text-sm mb-5 disabled:bg-gray'>
                  {renderContent(
                    "Sign In",
                    "Create Account"
                  )}
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}