import React, { useState } from "react";
import xIcon from "../images/xIcon.png";
import icon from "../images/Record1.png";
import icon1 from "../images/Record2.png";
import { Link } from "react-router-dom";
import group from "../images/Group.png";
import styles from './ForNewUser.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const ForNewUser = ({ setModal, number }) => {
  const [no, setNo] = useState(false);
  const [yes, setYes] = useState(false);
  const [bondingLevel, setBondingLevel] = useState(false);
  const [commitmentLevel, setCommitmentLevel] = useState(false);
  const [responsibilityLevel, setResponsibilityLevel] = useState(false);
  const [lastModal, setLastModal] = useState(false);
  const [bondingValue, setBondingValue] = useState(10);
  const handleChange = (event, newValue) => {
    setBondingValue(newValue);
  };
  const bondingModal = () => {
    setYes(false);
    setBondingLevel(true);
    setNo(false);
    setCommitmentLevel(false);
    setResponsibilityLevel(false);
  };
  const yesClicked = () => {
    setYes(true);
    setBondingLevel(false);
    setNo(false);
    setCommitmentLevel(false);
    setResponsibilityLevel(false);
  };
  const noClicked = () => {
    setYes(false);
    setBondingLevel(false);
    setNo(true);
    setCommitmentLevel(false);
    setResponsibilityLevel(false);
  };
  const showCommitmentModal = () => {
    setYes(false);
    setBondingLevel(false);
    setNo(false);
    setCommitmentLevel(true);
    setResponsibilityLevel(false);
  };
  const showResponsibilityModal = () => {
    setYes(false);
    setBondingLevel(false);
    setNo(false);
    setCommitmentLevel(false);
    setResponsibilityLevel(true);
  };
  const showLastModal = () => {
    setYes(false);
    setBondingLevel(false);
    setNo(false);
    setCommitmentLevel(false);
    setResponsibilityLevel(false);
    setLastModal(true);
  };

  return (
    <>
      <div className={styles.backdrop} onClick={(e) => setModal(false)} />

      <div className={`${styles.modal} bg-white shadow-lg mb-4 rounded-3xl h-[90vh] relative w-11/12 mx-auto flex flex-col items-center justify-center`}>
        {/* <img onClick={() => setModal(false)} className='absolute top-8 right-8' src={xIcon} alt="" /> */}
        {!no &&
          !yes &&
          !bondingLevel &&
          !commitmentLevel &&
          !responsibilityLevel &&
          !lastModal && (
            <>
              <img
                onClick={() => setModal(false)}
                className="absolute top-8 right-8"
                src={xIcon}
                alt=""
              />
              <img className="mb-4" src={icon} alt="" />
              <p className="font-semibold text-lg px-2 mb-5">
                Do you know <span>{number}</span> ?
              </p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={yesClicked}
                  className="rounded-lg bg-[#47B5FF] text-white w-[55px] h-8 font-semibold text-xs"
                >
                  Yes
                </button>
                <button
                  onClick={noClicked}
                  className="rounded-lg bg-[#F2F6F8] text-[#416C87] w-[55px] h-8 font-semibold text-xs"
                >
                  No
                </button>
              </div>
            </>
          )}
        {yes &&
          !bondingLevel &&
          !commitmentLevel &&
          !responsibilityLevel &&
          !no && (
            <>
              <img
                onClick={() => setModal(false)}
                className="absolute top-8 right-8"
                src={xIcon}
                alt=""
              />
              <img
                data-aos="fade-left"
                data-aos-duration="500"
                className="mb-4"
                src={icon1}
                alt=""
              />
              <p
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="font-semibold text-[22px] text-[#06283D] px-2 mb-2"
              >
                Unlock Profile!
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="500"
                className="text-sm text-[#1B2328] "
              >
                By paying 5 trust coin
              </p>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="absolute bottom-6 bg-[#1363DF] w-[156px] h-[52px] rounded-lg flex items-center justify-center"
              >
                <button
                  data-aos="fade-left"
                  data-aos-duration="500"
                  onClick={bondingModal}
                  className="text-lg font-semibold text-white"
                >
                  Get Free 5 Tc
                </button>
              </div>
            </>
          )}
        {no &&
          !yes &&
          !bondingLevel &&
          !commitmentLevel &&
          !responsibilityLevel && (
            <>
              <img
                onClick={() => setModal(false)}
                className="absolute top-8 right-8"
                src={xIcon}
                alt=""
              />
              <img
                data-aos="fade-left"
                data-aos-duration="500"
                className="mb-4"
                src={icon1}
                alt=""
              />
              <p
                data-aos="fade-left"
                data-aos-duration="500"
                className="font-semibold text-[22px] text-[#06283D] px-2 mb-2"
              >
                Unlock Profile!
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="500"
                className="text-sm text-[#1B2328] "
              >
                By paying 5 trust coin
              </p>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="absolute bottom-6 bg-[#1363DF] w-[156px] h-[52px] rounded-lg flex items-center justify-center"
              >
                <Link
                  data-aos="fade-left"
                  data-aos-duration="500"
                  to={`/${number}`}
                  className="text-lg font-semibold text-white"
                >
                  Pay Now
                </Link>
              </div>
            </>
          )}
        {bondingLevel && (
          <>
            <img
              onClick={() => setModal(false)}
              className="absolute top-8 right-8"
              src={xIcon}
              alt=""
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-semibold absolute top-8">
                1 out of 3
              </p>
            </div>
            <img
              data-aos="fade-left"
              data-aos-duration="500"
              className="mb-4"
              src={icon}
              alt=""
            />
            <p
              data-aos="fade-left"
              data-aos-duration="500"
              className="font-semibold text-lg px-2 mb-3 text-center"
            >
              What Is Bonding level Of {number} ?
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Box width={220}>
                <Slider defaultValue={10} sx={{
                  color: '##DFF6FF',
                  height: '8px'
                }} aria-label="Default" valueLabelDisplay="auto" value={bondingValue} onChange={handleChange} />
              </Box>
              <p className="-mt-2 text-sm ">{bondingValue} %</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="absolute bottom-6 bg-[#1363DF] w-[156px] h-[52px] rounded-lg flex items-center justify-center"
            >
              <button
                data-aos="fade-left"
                data-aos-duration="500" onClick={showCommitmentModal}
                className="text-lg font-semibold text-white"
              >
                Proceed
              </button>
            </div>
            {/* <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="flex items-center justify-center space-x-2"
            >
              <button
                onClick={showCommitmentModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#CCEAFF] text-[#47B5FF]"
              >
                20%
              </button>
              <button
                onClick={showCommitmentModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#FFEDCC] text-[#FFAE1B]"
              >
                40%
              </button>
              <button
                onClick={showCommitmentModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#E2CCFF] text-[#9747FF]"
              >
                60%
              </button>
              <button
                onClick={showCommitmentModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#144A6B] text-[#FFFFFF]"
              >
                80%
              </button>
              <button
                onClick={showCommitmentModal}
                className="w-[40px] h-[19px] font-semibold text-xs rounded bg-[#D4F7E9] text-[#24BF81]"
              >
                100%
              </button>
            </div> */}
          </>
        )}
        {commitmentLevel && (
          <>
            <img
              onClick={() => setModal(false)}
              className="absolute top-8 right-8"
              src={xIcon}
              alt=""
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-semibold absolute top-8">
                2 out of 3
              </p>
            </div>
            <img className="mb-4" src={icon} alt="" />
            <p className="font-semibold text-lg px-2 mb-5 text-center">
              What Is Commitment level Of {number} ?
            </p>
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={showResponsibilityModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#CCEAFF] text-[#47B5FF]"
              >
                20%
              </button>
              <button
                onClick={showResponsibilityModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#FFEDCC] text-[#FFAE1B]"
              >
                40%
              </button>
              <button
                onClick={showResponsibilityModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#E2CCFF] text-[#9747FF]"
              >
                60%
              </button>
              <button
                onClick={showResponsibilityModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#144A6B] text-[#FFFFFF]"
              >
                80%
              </button>
              <button
                onClick={showResponsibilityModal}
                className="w-[40px] h-[19px] font-semibold text-xs rounded bg-[#D4F7E9] text-[#24BF81]"
              >
                100%
              </button>
            </div>
          </>
        )}
        {responsibilityLevel && (
          <>
            <img
              onClick={() => setModal(false)}
              className="absolute top-8 right-8"
              src={xIcon}
              alt=""
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-semibold absolute top-8">
                3 out of 3
              </p>
            </div>
            <img className="mb-4" src={icon} alt="" />
            <p className="font-semibold text-lg px-2 mb-5 text-center">
              What Is Responsibility level Of {number} ?
            </p>
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={showLastModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#CCEAFF] text-[#47B5FF]"
              >
                20%
              </button>
              <button
                onClick={showLastModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#FFEDCC] text-[#FFAE1B]"
              >
                40%
              </button>
              <button
                onClick={showLastModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#E2CCFF] text-[#9747FF]"
              >
                60%
              </button>
              <button
                onClick={showLastModal}
                className="w-[36px] h-[19px] font-semibold text-xs rounded bg-[#144A6B] text-[#FFFFFF]"
              >
                80%
              </button>
              <button
                onClick={showLastModal}
                className="w-[40px] h-[19px] font-semibold text-xs rounded bg-[#D4F7E9] text-[#24BF81]"
              >
                100%
              </button>
            </div>
          </>
        )}
        {lastModal && (
          <>
            <img
              data-aos="fade-left"
              data-aos-duration="500"
              className="mb-3"
              src={group}
              alt=""
            />
            <p
              data-aos="fade-left"
              data-aos-duration="500"
              className="font-semibold text-[22px] text-[#06283D] mb-2"
            >
              Hurrah
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="500"
              className="text-[#1B2328] text-sm px-14 text-center"
            >
              You have received 5 trust coin to unlock one profile.
            </p>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="absolute bottom-6 bg-[#1363DF] w-[156px] h-[52px] rounded-lg flex items-center justify-center"
            >
              <Link
                data-aos="fade-left"
                data-aos-duration="500"
                to={`/${number}`}
                className="text-lg font-semibold text-white"
              >
                Unlock Now
              </Link>
            </div>
          </>
        )}
      </div>

    </>
  );
};

export default ForNewUser;
