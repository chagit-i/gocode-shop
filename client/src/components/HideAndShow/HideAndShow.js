import { useState } from "react";
function HideAndShow(){
    
    const [string,SetHideString]=useState(true);
    return(
<div style={{padding:20}}>
    

<button onClick={()=>SetHideString(!string)}>
Button
</button>
{string ? "hi" : ""}
</div>
    );
}
export default HideAndShow;