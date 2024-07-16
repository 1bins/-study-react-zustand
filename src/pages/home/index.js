import {useNavigate} from "react-router-dom";
import {dataStore} from "../../store/userData";

const Home = () => {
    const nav = useNavigate();
    const {count, addCount} = dataStore();

    return(
        <div>
            <p>Home</p>
            <p>{count}</p>
            <button type='button' onClick={() => nav('data')}>이동하기</button>
        </div>
    )
}

export default Home;