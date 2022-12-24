import React from 'react';
import { FaAddressCard, FaPhoneVolume } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register, trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.prevenDefault();
    }
  };

  return (
    <motion.section className='m-6'
      initial="hidden"
      whileInView="visible"
      viewport={{ one: true, amount: 0.5 }}
      transition ={{ duration: 0.5 }}
      variants={{
        hidden: {opacity: 0 , x:-50},
        visible: { opacity: 1, x: 0},
      }}
    >
     <div className="flex flex-col text-center space-y-8">
      <h2 className="text-xl md:text-2xl lg:text-4xl text-amber-400 underline">
        Contact me to get started</h2>
        <div className="space-y-3">
          <div className="flex justify-center items-center space-x-3">
            <FaPhoneVolume className='max-h-7 max-w-7 animate-bounce' />
            <p className="text-xl md:text-2xl lg:text-3xl">+33-782885224</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <SiGmail className='max-h-7 max-w-7 animate-pulse '/>
            <p className="text-xl md:text-2xl lg:text-3xl">  mr.nguyencoder@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaAddressCard className='animate-pulse '/>
            <p className="text-xl md:text-2xl lg:text-3xl">  Paris, France</p>
          </div>
        </div>
        <form 
            onSubmit={onSubmit}
            target="_blank"
            action='https://formsubmit.co/3fd20610ce2a23eac59b14e2cae78922'
            method='POST'
            className="flex flex-col space-y-4"
        >  
            <input placeholder='Name' 
                   className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-amber-300 text-gray-500 transition-all focus:border-amber-500 focus:text-gray-800' 
                   type="text"
                   {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                  />
                  {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input placeholder='Email' 
                   className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-amber-300 text-gray-500 transition-all focus:border-amber-500 focus:text-gray-800' 
                   type="email" 
                   {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}     
                  />
                  {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          <input placeholder='Subject' 
                 className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-amber-300 text-gray-500 transition-all focus:border-amber-500 focus:text-gray-800' 
                 type="text"
                 {...register("subject", {
                  required: true,
                  maxLength: 300,
                })}
                />
                {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 300 char."}
            </p>
          )}
          <textarea name="message"
                    placeholder='Message' 
                    className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-amber-300 text-gray-500 transition-all focus:border-amber-500 focus:text-gray-800'
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                    />
                   {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )} 
          <button type='submit' 
                  className='bg-green-400 py-5 px-10 rounded-md font-bold text-lg'>
                  Send me a message
          </button>
        </form>
     </div>
    </motion.section>
  )
}

export default Contact