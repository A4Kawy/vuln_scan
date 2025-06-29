import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Selection = () => {
  const [selectedTab, setSelectedTab] = useState('FREE');
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    if (selectedTab === 'FREE') {
      navigate('/free-plan');
    } else {
      navigate('/paid-plan');
    }
  };

  const benefits = {
    FREE: [
      'Grow your customer with our social network tools',
      'Use E-mail automations to promote your products.',
    ],
    PAID: [
      'All benefits of FREE plan',
      'Priority customer support',
      'Advanced analytics tools',
      'Exclusive marketing templates',
    ],
  };
  
  
  

  return (
    <StyledWrapper>
      <div className="modal">
        <form className="form">
          <div className="banner" />
          <label className="title">Get New customers faster</label>

          <AnimatePresence mode="wait">
            <motion.p
              key={selectedTab}
              className="description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {selectedTab === 'FREE'
                ? 'Grow your customer base FREE with flexible tools.'
                : 'Save more with PAID plans and enjoy long-term benefits!'}
            </motion.p>
          </AnimatePresence>

          <div className="tab-container">
            <button
              type="button"
              className={`tab tab--1 ${selectedTab === 'FREE' ? 'active' : ''}`}
              onClick={() => setSelectedTab('FREE')}
            >
              FREE
            </button>
            <button
              type="button"
              className={`tab tab--2 ${selectedTab === 'PAID' ? 'active' : ''}`}
              onClick={() => setSelectedTab('PAID')}
            >
              PAID
            </button>
            <div
              className="indicator"
              style={{ left: selectedTab === 'FREE' ? '2px' : 'calc(50% - 2px)' }}
            />
          </div>

          <div className="benefits">
            <span>What we offer</span>
            <ul>
                {benefits[selectedTab].map((text, index) => (
                <li key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height={16} width={16}>
                    <rect fill="black" rx={8} height={16} width={16} />
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6" />
                    </svg>
                    <span>{text}</span>
                </li>
                ))}
            </ul>
        </div>


          <div className="modal--footer">
            <AnimatePresence mode="wait">
              <motion.label
                key={selectedTab + '-price'}
                className="price"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <sup>$</sup>
                {selectedTab === 'FREE' ? '0' : '90'}
                <sub>{selectedTab === 'FREE' ? '/mo' : '/mo'}</sub>
              </motion.label>
            </AnimatePresence>

            <motion.button
                className="upgrade-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handleUpgradeClick}
                >
                {selectedTab === 'FREE' ? 'Login Free' : 'Login Paid'}
            </motion.button>

          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .modal {
    width: 450px;
    background: linear-gradient(180deg, #DCF9E0 0%, #FFFFFF 30.21%);
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }

  .banner {
    width: 100%;
    height: 30px;
    margin: 0;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .title {
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #2B2B2F;
    margin-bottom: 15px;
  }

  .description {
    max-width: 80%;
    margin: auto;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    color: #5F5D6B;
  }

  .tab-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    padding: 2px;
    background-color: #ebebec;
    border-radius: 9px;
    margin: 10px 20px 0px 20px;
  }

  .indicator {
    content: "";
    width: 50%;
    height:  -webkit-fill-available;
    background: #FFFFFF;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 9;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
    border-radius: 7px;
    transition: all 0.2s ease-out;
  }

  .tab {
    width: 50%;
    // height: 28px;
    position: relative;
    z-index: 99;
    background-color: transparent;
    border: 0;
    outline: none;
    flex: none;
    align-self: stretch;
    flex-grow: 1;
    cursor: pointer;
    font-weight: 500;
  }

  .tab--1:hover ~ .indicator {
    left: 2px;
  }

  .tab--2:hover ~ .indicator {
    left: calc(50% - 2px);
  }

  .benefits {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .benefits > span {
    font-size: 15px;
    color: #2B2B2F;
    font-weight: 700;
  }

  .benefits ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .benefits ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .benefits ul li span {
    font-weight: 600;
    font-size: 12px;
    color: #5F5D6B;
  }

  .modal--footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 1px solid #ebebec;
  }

  .price {
    position: relative;
    font-size: 32px;
    color: #2B2B2F;
    font-weight: 900;
  }

  .price sup {
    font-size: 13px;
  }

  .price sub {
    width: fit-content;
    position: absolute;
    font-size: 11px;
    color: #5F5D6B;
    bottom: 5px;
    display: inline-block;
  }

  .upgrade-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 215px;
    height: 40px;
    background: #0bdd12;
    box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 7px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .upgrade-btn:hover {
    background-color: #07b90d;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }`;

export default Selection;
