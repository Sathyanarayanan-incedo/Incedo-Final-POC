import React from "react";
import Rating from "./Rating";

const Foods4 = () => {
    return(
        <div>
            <div className="card7">
               <center><Rating/></center><br/>
               <img src="https://cdn.cdnparenting.com/articles/2020/02/26143210/POHA-RECIPE.jpg" alt="" />
               <h3>Poha</h3>
               <br/>
               <a classname="link" href="http://localhost:4000/poha" target="_blank">Recipe</a>
            </div>
            <br/>
            <div className="card8">
               <center><Rating/></center><br/>
               <img src="https://tse3.mm.bing.net/th?id=OIP.SyfbNQMY9OvsQ30Ky4aWjAHaFj&pid=Api&P=0" alt="" />
               <h3>Pani Puri</h3>
               <br/>
               <a classname="link" target="_blank" href="http://localhost:4000/panipuri">Recipe</a>
            </div>
        </div>
    )
}

export default Foods4;