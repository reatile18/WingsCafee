import BasicChart from "./components/Basic"
import PieChartDemo from "./components/Pie"

const HomePage = ()=>{

    return <div className="w-full flex flex-wrap py-40 justify-center items-center">
        <BasicChart/>
        <PieChartDemo/>
    </div>

}

export default HomePage