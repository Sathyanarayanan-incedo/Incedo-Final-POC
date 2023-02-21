import React,{useState} from "react";

const Rating = () => {
    const[like,setlike] = useState(0);
    const[dislike,setdislike] = useState(0);

    function add_like(){
         setlike(like+1)
    }
    function add_dislike(){
         setdislike(dislike+1)
    }
    return(
        <div className="btn">
            <button  onClick={add_like}>&#128077;{like}</button>
            <button  onClick={add_dislike}> &#128078;{dislike}</button>
        </div>
    );
}

export default Rating;