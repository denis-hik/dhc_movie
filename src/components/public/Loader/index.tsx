import Lottie from "lottie-react";
import loadingData from "../../../animations/loading.json";
import "./styled.scss";
const Loader = () => {

    return (
        <div className={"Loader-body"}>
            <Lottie className={"Loader-lottie"} animationData={loadingData} />
        </div>
    )
}

export default Loader;