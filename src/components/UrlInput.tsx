import React from 'react';
import styled from 'styled-components';

const UrlInput = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <span className="prefix">http://</span>
        <input className="myinput-link" placeholder="Site.com" />
        <span className="link-icon">
          🔗
          <span className="tooltip">COPY</span>
        </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 350px;
    height: 50px;
    border-radius: 10px;
    position: relative;
    border: 2px solid #000000;
  }

  .prefix {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    height: 100%;
    width: 70px;
    font-weight: 600;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px 0px 0px 10px;
  }

  .myinput-link {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    font-weight: 500;
    border: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    padding: 0px 10px;
    height: 100%;
    width: 160px;
    background-color: #fff;
    font-size: 15px;
  }

  .link-icon {
    font-size: 16px;
    background-color: #fff;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: -40px;
    right: -10px;
    opacity: 0;
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #f0f0f0 0%, #000000 74%);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
    pointer-events: none;
    letter-spacing: 0.5px;
    z-index: 10;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: #000000;
    background-size: 1000%;
    background-position: center;
    transform: rotate(45deg);
    bottom: -15%;
    transition-duration: 0.3s;
  }

  .link-icon:hover .tooltip {
    opacity: 1;
    transition-duration: 0.3s;
  }`;

export default UrlInput;
