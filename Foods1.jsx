import React from "react";
import Rating from "./Rating";

const Foods1 = () => {
    return(
        <div>
            <div className="card">
               <center><Rating/></center><br/>
               <img src="http://foodandremedy.com/wp-content/uploads/2016/10/Rice-Kheer-3.jpg" alt="" />
               <h3>Kheer</h3>
               <br/>
               <a classname="link" target="_blank" href="http://localhost:4000/kheer">Recipe</a>
            </div>
            <br/>
            <div className="card2">
               <center><Rating/></center><br/>
               <img src="https://tse4.mm.bing.net/th/id/OIP.Ddb4TfGrRqeV7X_68QaUZQHaHa?pid=ImgDet&rs=1" alt="" />
               <h3>Chicken Briyani</h3>
               <br/>
               <a classname="link" target="_blank" href="http://localhost:4000/briyani">Recipe</a>
            </div>
        </div>
    )
}

export default Foods1;