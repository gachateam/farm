import HarvestingTool from './HarvestingTool.js'
import MoneyTools from './MoneyTools'
import SeedTools from './SeedTools'

const ThanhCongCu = () => {
    return (
        <div className="cong-cu">
            <img src={require("../../../img/thanhcongcudacat.png").default} className="img-fluid" alt="logo" />
            <SeedTools />
            <MoneyTools />
            <HarvestingTool />
        </div>
    )
}

export default ThanhCongCu
