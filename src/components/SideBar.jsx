import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 bg-[#111] pt-[50px] w-1/5 sidebar hidden lg:block text-left">
        <img src="/images/ssn-logo.jpg" alt="ssn_logo" />
        <Link href="/" aria-current="page"> Home</Link>
        <Link href="/scope-of-the-conference">Scope Of The Conference</Link>
        <Link href="/important-dates/">Important Dates</Link>
        <p className='py-[10px] px-[20px] text-[#bbb]'>About</p>
        <ul className="sub-menu">
            <Link href="/about/institution">About The Institution</Link>
            <Link href="/about/department">About The Department</Link>
            <Link href="/about/prince-sultan-university">About Prince Sultan
                University</Link>
        </ul>
        <Link href="/organizing-commitee/">Organizing Committee</Link>
        <p className='py-[10px] px-[20px] text-[#bbb]'>Advisory Committee</p>
        <ul>
            <Link href="/international-advisory-committee/">International Advisory
                committee</Link>
            <Link href="/national-advisory-committee/">National Advisory
                committee</Link>
            <Link href="/technical-co-sponsorship-committee/">Technical
                Co-Sponsorship Committee</Link>
            <Link href="/technical-program-committee/">Technical Program
                Committee</Link>
        </ul>
        <Link href="/call-for-papers">Call For Papers</Link>
        <Link href="/paper-submission">Paper Submission</Link>
        <Link href="/ieee-pdf-express">IEEE PDF eXpress</Link>
        <Link href="/registration">Registration</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/venue-2">Venue</Link>
    </div>
  )
}

export default SideBar