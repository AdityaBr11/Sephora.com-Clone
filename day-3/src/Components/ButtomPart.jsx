import React from 'react'
import '../App.css';
import {FiHeart} from 'react-icons/fi'

const ButtomPart = () => {
  return (
    <div className='buttom'>
    <div className="h-12 mai"></div>
    <div className="px-32">
    <div className="h-16  border-t border-gray-300"></div>
    </div>
    <div className="h-10 bg-gray-300 text-center flex items-center justify-center font-semibold" >
        <p>Website feedback? Let us know ▸</p>
    </div>
    <div className='bg-black text-white py-4'>
     <div className="w-5/6 m-auto">
     <div className="flex gap-8 justify-start py-4 border-b border-slate-400">
        <div className="flex w-1/6 gap-2">
            <div className="flex items-center">
                <img src="https://www.sephora.com/img/ufe/icons/find-store.svg" alt="" />
            </div>
            <div className="flex flex-col text-xs justify-center">
                <p className='font-bold'>Find a Store</p>
                <p>Choose Your Store</p>
            </div>
        </div>
        <div className="flex  w-1/6">
            <div className="flex p-3 items-center">
                <p className='text-2xl'><FiHeart/> </p>
            </div>
            <div className="flex flex-col text-xs justify-center">
                <p className='font-bold'>Live Beauty Help</p>
                <p>Chat is unavailable</p>
            </div>
        </div>
        <div className="flex  w-1/6">
            <div className="flex p-3 items-center">
                <img src="https://www.sephora.com/img/ufe/icons/app.svg" alt="" />
            </div>
            <div className="flex flex-col text-xs justify-center">
                <p className='font-bold'>Get the App</p>
                <p>Text “APP” to 36681</p>
            </div>
        </div>
        <div className="flex  w-1/6">
            <div className="flex p-3 items-center">
                <img src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" alt="" />
            </div>
            <div className="flex flex-col text-xs justify-center">
                <p className='font-bold'>Get Sephora Text Alerts</p>
                <p>Sign up Now</p>
            </div>
        </div>
        <div className="flex  w-2/6">
            <div className="flex p-3 items-center">
                <img src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" alt="" />
            </div>
            <div className="flex flex-col text-xs justify-center">
                <p className='font-bold'>Sephora Credit Card Program</p>
                <p>Want 25% off your Sephora purchase1? DETAILS</p>
            </div>
        </div>
     </div>
     <div className="border-b mb-6 border-slate-400 py-7 flex gap-12">
        <div className="w-1/5 flex flex-col gap-2">
            <p className='tex-lg font-bold'>About Sephora</p>
            <p className='text-xs'>About Sephora</p>
            <p className='text-xs'>Newsroom</p>
            <p className='text-xs'>Careers</p>
            <p className='text-xs'>Sephora Social Impact</p>
            <p className='text-xs'>Supply Chain Transparency</p>
            <p className='text-xs'>Affiliates</p>
            <p className='text-xs'>Sephora Events</p>
            <p className='text-xs'>Gift Cards</p>
            <p className='text-xs'>Sephora Global Sites</p>
            <p className='text-xs'>Diversity and Inclusion</p>
            <p className='text-xs'>Checkout on Instagram</p>
            <p className='text-xs'>Sephora Accelerate</p>
            <p className='text-xs'>Report a Vulnerability</p>
        </div>
        <div className=" flex flex-col gap-2 px-4">
            <p className='tex-lg font-bold'>My Sephora</p>
            <p className='text-xs'>Beauty Insider</p>
            <p className='text-xs'>Sephora Credit Card</p>
            <p className='text-xs'>Community Profile</p>
            <p className='text-xs'>Order Status</p>
            <p className='text-xs'>Purchase History</p>
            <p className='text-xs'>Account Settings</p>
            <p className='text-xs'>Beauty Advisor Recommendations</p>
            <p className='text-xs'>Beauty Offers</p>
            <p className='text-xs'>Quizzes & Buying Guides</p>
            <p className='text-xs'>Rewards Bazaar</p>
            <p className='text-xs'>Loves</p>
            <p className='text-xs'>Book a Reservation</p>
        </div>
        <div className=" flex flex-col gap-2 px-4">
            <p className='tex-lg font-bold'>Help</p>
            <p className='text-xs'>Customer Service</p>
            <p className='text-xs'>Returns & Exchanges</p>
            <p className='text-xs'>Delivery and Pickup Options</p>
            <p className='text-xs'>Shipping</p>
            <p className='text-xs'>Billing</p>
            <p className='text-xs'>International Shipments</p>
            <p className='text-xs'>Beauty Services FAQ</p>
            <p className='text-xs'>Sephora at Kohl's</p>
            <p className='text-xs'>Store Locations</p>
            <p className='text-xs'>Online Ordering</p>
            <p className='text-xs'>Klarna & Afterpay</p>
            <p className='text-xs'>Accessibility</p>
        </div>
        <div className="w-1/5 flex flex-col gap-2 px-4">
            <p className='tex-lg font-bold'>Region & Language</p>
            <div className="flex">
                <img className='w-8 mr-2' src="https://www.sephora.com/img/ufe/flags/us.svg" alt="" />
                <div className="text-xs">
                    <p>United States - English</p>
                </div>
            </div>
            <div className="flex">
                <img className='w-8 mr-2' src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="" />
                <div className="text-xs">
                    <p>Canada - English</p>
                </div>
            </div>
            <div className="flex">
                <img className='w-8 mr-2' src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="" />
                <div className="text-xs">
                    <p>Canada - Français</p>
                </div>
            </div>
        </div>
        <div className="w-1/4 flex flex-col  justify-between">
            <p className='text-2xl font-serif'>We Belong to <br /> Something Beautiful</p>
            <div className="leading-loose flex flex-col gap-1">
                <p className='font-semibold'>Sign up for Sephora Emails</p>
                <div className="flex gap-3">
                    <input type="text" className='outline-none text-gray-800 text-sm p-2 px-4 rounded' placeholder='Enter your email address' />
                    <button className=' border-white border-2 rounded-2xl text-white px-2 text-sm'>Sign-up</button>
                </div>
            </div>
            
        </div>
     </div>
     <div className="flex justify-between mb-5">
        <div className="text-xs leading-loose">
            <p>© 2022 Sephora USA, Inc. All rights reserved.</p>
            <p className='flex gap-6'>Privacy Policy<span >Terms of Use</span> <span>Accessibility</span> <span>Sitemap</span> Your Privacy Choices <img className='w-6 -ml-5' src="https://www.sephora.com/img/ufe/icons/opt-out.svg" alt="" /></p>
            <p>1-877-737-4672   <span> TTY: 1-888-866-9845</span></p>
        </div>
        <div className=' flex gap-4'>
            <img className='w-9 h-9' src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" alt="" />
            <img className='w-9 h-9' src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" alt="" />
            <img className='w-9 h-9' src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg" alt="" /><img className='w-9 h-9' src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" alt="" /><img className='w-9 h-9' src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" alt="" /><img className='w-10 h-10' src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" alt="" /><img className='w-10 h-10' src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" alt="" />
        </div>
     </div>
     </div>
    </div>
    </div>
  )
}
export default ButtomPart;