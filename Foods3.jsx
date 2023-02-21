import React from "react";
import Rating from "./Rating";

const Foods3 = () => {
    return(
        <div>
            <div className="card5">
               <center><Rating/></center><br/>
               <img src="https://tse4.mm.bing.net/th?id=OIP.KChmYgUtTdYUlczrM-aa_gHaHa&pid=Api&P=0" alt="" />
               <h3>Lassi</h3>
               <br/>
               <a classname="link" href="http://localhost:4000/lassi" target="_blank">Recipe</a>
            </div>
            <br/>
            <div className="card6">
               <center><Rating/></center><br/>
               <img src="https://tse4.mm.bing.net/th?id=OIP.eRCBh1SeHKhmKewhOUWadwHaHa&pid=Api&P=0" alt="" />
               <h3>Maggi</h3>
               <br/>
               <a classname="link" href="http://localhost:4000/maggi" target="_blank">Recipe</a>
            </div>
        </div>
    )
}

export default Foods3;