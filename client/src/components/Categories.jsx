import React from "react";


const Categories = () => {


    
    return (
        <div class="container" style={{display:"flex", "border-top": "1px solid #EFF1F2", "border-bottom": "1px solid #EFF1F2"}}>
            <div class="row w-100" style={{display:"flex", "flex-wrap": "nowrap", "justifyContent": "center", margin: "0 auto", padding: 20}}>
            <a href="/signup" id="categoriesLink" >Arts</a>
            <a href="/signup" id="categoriesLink" >Daily Necessities</a>
            <a href="/signup" id="categoriesLink" >Kitchen Ideas</a>
            <a href="/signup" id="categoriesLink" >Entertainment</a>
            <a href="/signup" id="categoriesLink" >Home Decoration</a>
            <a href="/signup" id="categoriesLink" >Life Hacks</a>
            </div>

        </div>
    )
}

export default Categories