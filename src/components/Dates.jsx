import React from 'react'

const Dates = () => {
  return (
    <div className='lg:w-4/5 ml-auto p-8 flex justify-center items-center min-h-screen'>
      <div className='max-w-[800px]'>
        <h2 className='capitalize py-4'>important dates</h2>
        <div className='flex'>
          <ul className='text-left basis-1/2 flex flex-col'>
              <p className='basis-1/5'>Paper Submission Deadline</p>
              <p className='basis-1/5'>Paper Acceptance Notification</p>
              <p className='basis-1/5'>Submission of Final Paper</p>
              <p className='basis-1/5'>Last Date for Conference Registration</p>
              <p className='basis-1/5'>Conference Dates</p>
          </ul>
          <ul className='basis-1/2 text-left flex flex-col'>
              <p className="basis-1/5 justify-center items-center">:  <s>January 30, 2023</s> (Closed) </p>
              <p className='basis-1/5 justify-center items-center'>:  <s>February 10, 2023</s> (Closed)</p>
              <p className='basis-1/5 justify-center items-center'>:  <s>February 15, 2023</s> (Closed)</p>
              <p className='basis-1/5 justify-center items-center'>:  <s>February 15, 2023</s> (Closed)</p>
              <p className='basis-1/5 justify-center items-center mt-4'>: <s>March 23-25, 2023</s> (finished) </p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dates;