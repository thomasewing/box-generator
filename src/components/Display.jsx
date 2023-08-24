import React from 'react';

const Display=({boxList})=>{
    return(
        <div style={{display: "flex"}}>
            {
                boxList.map( (box)=>{
                    return(
                        <div style={{height: box.size, width: box.size, backgroundColor: box.color, margin: 10}}>

                        </div>
                    )
                })
            }
        </div>
    );
}
export default Display;