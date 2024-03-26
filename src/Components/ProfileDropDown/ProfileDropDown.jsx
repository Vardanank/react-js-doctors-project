import React, { Component } from 'react';
import { ArrowDown } from '../../Images/Svg';
import './ProfileDropDown.style.css'
function ProfileDropDown({name, surname, onArroDownClick, dropDownVisibility}) {

    return (
        <div className="container">
            <div className="logo">
                {
                    name[0].toUpperCase()
                }
            </div>
            <div className="nameSurname">
                {`${name} ${surname}`}
            </div>
            <div className="arowDown" onClick={onArroDownClick}>
                <img src={ArrowDown}/>
            </div>

        </div>
      );
}

export default ProfileDropDown;