import '../components/login.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { useState } from 'react';
import backSpace from '../images/num-pad/backspace.png';
import rightIcon from '../images/num-pad/arrow-right.png';
import OtpPage from '../components/OtpPage';

const Login = () => {
    const [number, setNumber] = useState('');
    const [valid, setValid] = useState(false);

    const appendZero = () => {
        setNumber(number + 0);
    }
    const appendOne = () => {
        setNumber(number + 1);
    }
    const appendTwo = () => {
        setNumber(number + 2);
    }
    const appendThree = () => {
        setNumber(number + 3);
    }
    const appendFour = () => {
        setNumber(number + 4);
    }
    const appendFive = () => {
        setNumber(number + 5);
    }
    const appendSix = () => {
        setNumber(number + 6);
    }
    const appendSeven = () => {
        setNumber(number + 7);
    }
    const appendEight = () => {
        setNumber(number + 8);
    }
    const appendNine = () => {
        setNumber(number + 9);
    }
    const appendPlus = () => {
        setNumber(number + '+');
    }
    const removeNum = () => {
        setNumber(number.slice(0, -1));
    }

    // console.log(number)

    const verifyNumber = () => {
        const isValid = isValidPhoneNumber(number);
        setValid(isValid);
        // console.log(valid)
    }

    return (
        <div>
            <div className="bg-[#FFFFFF] font-poppins">
                {!valid &&
                    <div className="">
                        <p className='font-semibold text-[25px] mt-[130px] mx-8 mb-4 leading-tight'>Welcome to <br /> Imagebook</p>
                        <p className='text-lg text-[#00386D] font-semibold ml-8 mb-[7px] '>Enter Your Number</p>
                        <PhoneInput className='border-[2px] border-[#EBF1F4] rounded-[10px] mx-6 pl-3 h-12 space-x-1 mb-4 text-lg'
                            defaultCountry='IN'
                            placeholder="Enter phone number"
                            value={number}
                            onChange={setNumber} />
                        <div className='w-full mx-auto font-roboto space-y-2'>
                            <div className='mx-14 flex justify-between items-center pt-11'>
                                <div onClick={appendOne} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>1</p>
                                </div>
                                <div onClick={appendTwo} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>2</p>
                                </div>
                                <div onClick={appendThree} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>3</p>
                                </div>
                            </div>
                            <div className='mx-14 flex justify-between items-center'>
                                <div onClick={appendFour} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>4</p>
                                </div>
                                <div onClick={appendFive} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>5</p>
                                </div>
                                <div onClick={appendSix} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>6</p>
                                </div>
                            </div>
                            <div className='mx-14 flex justify-between items-center'>
                                <div onClick={appendSeven} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>7</p>
                                </div>
                                <div onClick={appendEight} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>8</p>
                                </div>
                                <div onClick={appendNine} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>9</p>
                                </div>
                            </div>
                            <div className='mx-14 flex justify-between items-center pb-11'>
                                <div onClick={appendPlus} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>+</p>
                                </div>
                                <div onClick={appendZero} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                    <p className='font-semibold text-[30px] text-center mt-1'>0</p>
                                </div>
                                <div onClick={removeNum} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center relative'>
                                    <img className='absolute top-[15px] left-[10px]' src={backSpace} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto px-6 '>
                            <button onClick={verifyNumber} className='w-full bg-[#1363DF] flex space-x-2 items-center justify-center rounded-lg h-12'>
                                <p className='text-white font-semibold text-lg'>Verify</p>
                                <img src={rightIcon} alt="" />
                            </button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='font-normal text-sm text-center text-[#1B2328] absolute bottom-4'>
                                <p>By continuing you will agree</p>
                                <p>to our <span className='text-[#1363DF] font-semibold underline'>Term & Condition</span></p>
                            </div>
                        </div>
                    </div>
                }
                {
                    valid &&
                    <OtpPage setValid={setValid} number={number}></OtpPage>
                }
            </div>
        </div>
    )
}
export default Login;