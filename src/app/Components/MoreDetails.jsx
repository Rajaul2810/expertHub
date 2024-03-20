'use client'
import React, { useState } from 'react';
import { Tabs } from 'flowbite-react';
import { MdReviews, MdCastForEducation } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import Review from './Review';


const MoreDetails = ({ info }) => {
    const [visibleReview, setVisibleReview] = useState(4);
    const [viewSeeMoreBtn, setViewSeeMoreBtn] = useState(true);
    const handleSeeMore = () => {
        setVisibleReview(info.review.length)
        setViewSeeMoreBtn(!viewSeeMoreBtn);
    }

    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            {/* Rerviews  */}
            <Tabs.Item active title="Reviews" icon={MdReviews}>
                <div className='grid lg:grid-cols-2 gap-6'>
                    {
                        info.review.slice(0,visibleReview).map((rev,idx)=><Review key={idx} review={rev}></Review>)
                    }
                    
                </div>
                <button onClick={handleSeeMore} className={`px-6 block rounded-full text-skin-muted hover:text-white font-medium mt-4 mx-auto py-2 bg-skin-button-muted hover:bg-skin-button-muted-hover uppercase ${viewSeeMoreBtn? '':"hidden"}`}>SEE MORE reviews</button>
            </Tabs.Item>



            <Tabs.Item active title="Education" icon={MdCastForEducation}>
                <div className='py-4'>
                    <h1 className='text-xl font-semibold'>Education will be added soon..</h1>
                </div>
            </Tabs.Item>

            <Tabs.Item active title="CV" icon={GrResume}>
                <div className='py-4'>
                    <h1 className='text-xl font-semibold'>To see the resume or CV, Please Click the link given in the below.</h1>
                    <a className='underline text-gray-600' href={`${info.cv}`}> { info.cv}</a>
                </div>
            </Tabs.Item>

            <Tabs.Item active title="Certifiacate" icon={GrCertificate}>
                <div className='py-4'>
                    <h1 className='text-xl font-semibold'>To see the Certifiacate, Please Click the link given in the below.</h1>
                    <a className='underline text-gray-600' href={`${info.certificate}`}> { info.certificate}</a>
                </div>
            </Tabs.Item>
      
     
        </Tabs>
    );
};

export default MoreDetails;