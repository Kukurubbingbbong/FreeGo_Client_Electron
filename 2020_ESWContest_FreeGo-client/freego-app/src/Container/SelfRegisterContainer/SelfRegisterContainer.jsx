import React, {useState} from 'react';
import Logo from '../../Components/Logo5/Logo5';
import { datasend } from '../../Redux/Actions/NameDay';
import { UseFreegoDispatch } from '../../Redux/Context/Context';
import './SelfRegisterContainer.scss';

function SelfRegisterContainer( {history} ) {
    const [Pname, setPname] = useState('');
    const [Dday, setDday] = useState('');
    
    const dispatch = UseFreegoDispatch()

    const DataSend = () => {
        dispatch(datasend(Pname, Dday));
        history.push('/ConfirmContainer');
    }
    return(
        <>
            <Logo/>
            
            <div className="SelfContainer">
                <div className="NText">상품 이름</div>
                <input type="text" className="ProductName" value={Pname} onChange={e => setPname(e.target.value)}/>
            
                <div className="DText">적절 유통기한</div>
                <input type="text" className="GoodDay" value={Dday} onChange={e => setDday(e.target.value)}/>

                <button type="button" className="Nextbtn" onClick={DataSend}>다음 &gt;</button>
            </div>
        </>
    )
}

export default SelfRegisterContainer;