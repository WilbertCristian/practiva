import { useSelector } from "react-redux";

const Description = () => {
    const defaultState = useSelector(state => state.default);

    return (
        <>
            
            <h4>{defaultState.name}</h4>
        </>
    );
};

export default Description;