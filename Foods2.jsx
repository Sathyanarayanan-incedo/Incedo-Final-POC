import React from "react";
import Rating from "./Rating";

const Foods2 = () => {
    return(
        <div>
            <div className="card3">
               <center><Rating/></center><br/>
               <img src="https://tse1.mm.bing.net/th?id=OIP.iABVK73UYywVNC4mweoCjgHaGN&pid=Api&P=0" alt="" />
               <h3>Chappathi</h3>
               <br/>
               <a classname="link" target="_blank" href="http://localhost:4000/chappathi">Recipe</a>
            </div>
            <br/>
            <div className="card4">
               <center><Rating/></center><br/>
               <img src="https://tse3.mm.bing.net/th?id=OIP.6S3Rj7TecvRdleXuFWVf4gHaFx&pid=Api&P=0" alt="" />
               <h3>Chole Bature</h3>
               <br/>
               <a classname="link" target="_blank" href="http://localhost:4000/cholebature">Recipe</a>
            </div>
        </div>
    )
}

export default Foods2;