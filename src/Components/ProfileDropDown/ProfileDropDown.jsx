import React from 'react';
import { ArrowDown } from '../../Images/Svg';
import './ProfileDropDown.style.css'
import DropDownMenu from './DropDownMenu/DropDownMenu';

function ProfileDropDown({name, surname, onArroDownClick, dropDownVisibility,dropDownData}) {

    return (
        <div className="container" >
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
            <DropDownMenu list={dropDownData} visible={dropDownVisibility} />
        </div>
      );
}

export default ProfileDropDown;