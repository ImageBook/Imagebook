import '../components/login.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { useState } from 'react';
import backSpace from '../images/num-pad/backspace.png';
import rightIcon from '../images/num-pad/arrow-right.png';
import OtpPage from '../components/OtpPage';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from '../firebase.init';
import ContinueByName from '../components/ContinueByName';
import OtpInput from 'react18-input-otp';
import login from '../images/num-pad/checkmark-circle-2.png';
import { useNavigate } from 'react-router-dom';
import UserContext from '../store/userContext';
import { useContext } from 'react';

const Login = () => {
    const userCtx = useContext(UserContext);
    // login screen
    const [number, setNumber] = useState('');
    const [valid, setValid] = useState(false);
    const [confirmObj, setConfirmObj] = useState('');

    // otp screen
    const [hidden, setHidden] = useState(false);;
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };
    // login screen
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

    // otp screen
    const OtpAppendZero = () => {
        setOtp(otp + '0');
    }
    const OtpAppendOne = () => {
        setOtp(otp + '1');
    }
    const OtpAppendTwo = () => {
        setOtp(otp + '2');
    }
    const OtpAppendThree = () => {
        setOtp(otp + '3');
    }
    const OtpAppendFour = () => {
        setOtp(otp + '4');
    }
    const OtpAppendFive = () => {
        setOtp(otp + '5');
    }
    const OtpAppendSix = () => {
        setOtp(otp + '6');
    }
    const OtpAppendSeven = () => {
        setOtp(otp + '7');
    }
    const OtpAppendEight = () => {
        setOtp(otp + '8');
    }
    const OtpAppendNine = () => {
        setOtp(otp + '9');
    }
    const OtpRemoveNum = () => {
        setOtp(otp.slice(0, -1));
    }

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    }

    const handleLoginSubmit = (event) => {
        const isValid = isValidPhoneNumber(number);
        setValid(isValid);
        generateRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, number, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log('error', error);
            });
    }

    const handleVerify = (e) => {
        e.preventDefault();
        const confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            fetch(`http://localhost:5000/getUsers/${number}`)
                .then(res => res.json())
                .then(data => {
                    // console.log('data', data);
                    if (data.length === 0) {
                        setHidden(true);
                    }
                    else {
                        userCtx.setLogin(data[0]);
                        navigate('/home');
                    }
                })
            // setHidden(true);
            // const user = result.user;
        }).catch((error) => {
            console.log(error);
        });

    }

    const resendOtp = () => {
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, number, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log('error', error);
            });
    }

    return (
        <div>
            <div style={{ paddingTop: "10vh" }} className="h-screen bg-[#FFFFFF] font-poppins">
                {!valid &&
                    <div className="">
                        <p className='font-semibold text-[25px] mx-8 mb-4'>Welcome to <br /> Imagebook</p>
                        <p className='text-lg text-[#00386D] font-semibold ml-8 mb-[7px] '>Enter Your Number</p>
                        <form onSubmit={handleLoginSubmit}>
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
                                <div className='mx-14 flex justify-between items-center'>
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
                            <div className='absolute bottom-16 w-full mx-auto px-6 '>
                                <button type='submit' className='w-full bg-[#1363DF] flex space-x-2 items-center justify-center rounded-lg h-12'>
                                    <p className='text-white font-semibold text-lg'>Verify</p>
                                    <img src={rightIcon} alt="" />
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center justify-center'>
                            <div className='font-normal text-sm text-center text-[#1B2328] absolute bottom-4'>
                                <p>By continuing you will agree</p>
                                <p>to our <span className='text-[#1363DF] font-semibold underline'>Terms & Conditions</span></p>
                            </div>
                        </div>
                    </div>
                }
                {
                    valid &&
                    // <OtpPage setValid={setValid} number={number}></OtpPage>
                    <>
                        <div className='h-full'>
                            {
                                !hidden &&
                                <>
                                    <p className='font-semibold text-[25px]  mx-8 mb-2 leading-tight'>OTP Sent</p>
                                    <p className='mx-8 mb-4'>Waiting to automatically detect SMS <br /> sent to <span className='font-semibold text-[#1B2328]'>{number}</span></p>
                                    <form onSubmit={handleVerify}>
                                        <div className='mx-6 flex items-center justify-between mb-6'>
                                            <OtpInput className='rounded-[10px] border-2 border-[#D3DBE3] w-10 h-10 mr-3 flex items-center justify-center text-center text-[22px] font-medium' value={otp} onChange={handleChange} numInputs={6} />
                                        </div>

                                        <div className='flex items-center justify-center space-x-4 mx-6 mb-4'>
                                            <button onClick={resendOtp} className='w-[176px] h-[52px] bg-[#DFF6FF] rounded-lg font-semibold text-lg text-[#416C87]'>Resend OTP</button>
                                            <button type='submit' className='flex items-center justify-center w-[176px] h-[52px] bg-[#1363DF] text-white text-lg font-semibold space-x-2 rounded-lg'>
                                                <img src={login} alt="" />
                                                <p>Login</p>
                                            </button>
                                        </div>
                                    </form>
                                    <p className='ml-6 text-[13px]'>Entered Wrong Number? <span onClick={() => setValid(false)} className='text-[#0093ED] font-semibold hover:cursor-pointer'>Edit Number</span></p>
                                    <div className='w-full mx-auto font-roboto space-y-2'>
                                        <div className='mx-14 flex justify-between items-center pt-10'>
                                            <div onClick={OtpAppendOne} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>1</p>
                                            </div>
                                            <div onClick={OtpAppendTwo} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>2</p>
                                            </div>
                                            <div onClick={OtpAppendThree} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>3</p>
                                            </div>
                                        </div>
                                        <div className='mx-14 flex justify-between items-center'>
                                            <div onClick={OtpAppendFour} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>4</p>
                                            </div>
                                            <div onClick={OtpAppendFive} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>5</p>
                                            </div>
                                            <div onClick={OtpAppendSix} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>6</p>
                                            </div>
                                        </div>
                                        <div className='mx-14 flex justify-between items-center'>
                                            <div onClick={OtpAppendSeven} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>7</p>
                                            </div>
                                            <div onClick={OtpAppendEight} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>8</p>
                                            </div>
                                            <div onClick={OtpAppendNine} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>9</p>
                                            </div>
                                        </div>
                                        <div className='mx-14 flex justify-between items-center'>
                                            <div className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>+</p>
                                            </div>
                                            <div onClick={OtpAppendZero} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center'>
                                                <p className='font-semibold text-[30px] text-center mt-1'>0</p>
                                            </div>
                                            <div onClick={OtpRemoveNum} className='w-[50px] h-[50px] rounded-full shadow items-center justify-center relative'>
                                                <img className='absolute top-[15px] left-[10px]' src={backSpace} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className='font-normal text-sm text-center text-[#1B2328] absolute bottom-4'>
                                            <p>By continuing you will agree</p>
                                            <p>to our <span className='text-[#1363DF] font-semibold underline'>Term & Condition</span></p>
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                hidden &&
                                <ContinueByName number={number}></ContinueByName>
                            }
                        </div>
                    </>
                }
                <div id="recaptcha-container" className='mx-6'></div>
            </div>
        </div>
    )
}
export default Login;