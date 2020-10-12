import React from 'react';
import Logo from '../../Components/Logo5/Logo5';
import './AddContainer.scss';

function AddContainer( {history} ) {
    return(
        <div className="AddContainer">
            <Logo/>
            <div className="ButtonContainer">
                <div className="EnrollText">목록추가</div>
                <button type="button" className="BarCodebtn">바코드로 등록하기</button>
                <button type="button" className="Selfbtn" onClick={()=>{history.push('/SelfRegisterContainer')}}>직접 입력하기</button>
            </div>
        </div>
    )
}

export default AddContainer;