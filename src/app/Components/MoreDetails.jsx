'use client'
import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import { MdReviews, MdCastForEducation } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import Review from './Review';

const MoreDetails = ({info}) => {
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            {/* Rerviews  */}
            <Tabs.Item active title="Reviews" icon={MdReviews}>
                <div className='grid lg:grid-cols-2 gap-6'>
                    {
                        info.review.map((rev,idx)=><Review key={idx} review={rev}></Review>)
                    }
                </div>
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