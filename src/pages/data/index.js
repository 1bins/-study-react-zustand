import {dataStore} from "../../store/userData";

const DataTest = () => {
    const {count, addCount} = dataStore();

    return(
        <div className="data-wrap">
            <p>{count}</p>
            <button type='button' onClick={() => addCount()}>증가하기</button>
        </div>
    )
}

export default DataTest;