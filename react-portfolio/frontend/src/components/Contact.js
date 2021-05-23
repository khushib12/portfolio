import React from 'react';

const Contact = () => {
  return (
    <div>
    <section className='mt-28' id='contact'>
      <header className='px-5 text-4xl font-bold pt-10'>
        <h2>Contact Me</h2>

        <br></br>
        <p className='text-base font-thin'>Open for New Opportunities!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Khushi Bansal</p>
            <p className='font-thin'>New Delhi,India</p>
            <a href='mailto: khushi.bansal2810@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
              khushi.bansal2810@gmail.com
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href='khushi_mait_resume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>  
              <a href='https://www.linkedin.com/in/khushi-bansal-mait/' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href='https://github.com/khushib12' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>


            <div className='mr-4'>
              <a href='https://www.codechef.com/users/khushi_b1' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/codechef.svg' alt='' width='24px' height='24px' className='mr-1' />
                  Codechef
                </span>
              </a>
            </div>
            <div className='mr-4'>
              <a href='https://leetcode.com/Khushi_b1/' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/leetcode.svg' alt='' width='24px' height='24px' className='mr-1' />
                   Leetcode
                </span>
              </a>
            </div>
            <div className='mr-4'>
              <a href='https://www.hackerrank.com/khushi_b12' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/hackerrank.svg' alt='' width='24px' height='24px' className='mr-1' />
                  Hackerank
                </span>
              </a>
            </div>
            <div className='mr-4'>
              <a href='https://www.hackerearth.com/@khushihappyofficial' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/hackerearth.svg' alt='' width='24px' height='24px' className='mr-1' />
                  Hackerearth
                </span>
              </a>
            </div>

            
          </div>
        </div>

        <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
          <form className='flex flex-col space-y-3 m-auto w-full' name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />

            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className='gradient' required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className='gradient' required></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
            <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    
    </section>
    <div className=' mt-0 mr-auto ml-auto  max-w-xs md:max-w-sm cursor: pointer' onClick={() => window.scroll(0, 0)}>
                <button>
        <picture>
          <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
          <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
          <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
        </picture>
              </button>
      </div>

    </div>
  );
};

export default Contact;
