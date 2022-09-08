import React, { useEffect, useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import RespectSentPage from './RespectSentPage';

const UploadingVideoComponent = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowComponent(true);
        }, 1500)
    }, []);

    return (
        <div>
            {
                !showComponent && <div data-aos="fade-up"
                    data-aos-duration="400" className='fixed bottom-0 w-full mx-auto h-[130px] bg-white rounded-t-3xl '>
                    <div className='flex flex-col items-start justify-start'>
                        <p className='font-medium text-xl text-[#1B2328] pl-6 pt-6 mb-4'>Uploading</p>
                        <div className='px-6'>
                            <ProgressBar completed={100}
                                bgColor="#24BF81"
                                baseBgColor="#E0E0E0"
                                width="320px"
                                height="25px"
                                borderRadius="8px"
                                animateOnRender="true"
                            // initCompletedOnAnimation="1"
                            // transitionDuration='10000'
                            />
                        </div>
                    </div>
                </div>
            }
            {
                showComponent && <RespectSentPage></RespectSentPage>
            }
        </div>
    );
};

export default UploadingVideoComponent;