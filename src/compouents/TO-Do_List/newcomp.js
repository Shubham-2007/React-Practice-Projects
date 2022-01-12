import React from "react";
// import { render } from "react-dom";
import './ninjas.css';

const NewComp = ({new_Comp, deleteNinja}) => {
    //console.log(this.props);
    //const { name, age } = this.props;
    // const { new_Comp } = props;  // we remove this as this is called uper other then props we input direct variable only
    const compList = new_Comp.map(newcomp => {
        if (newcomp.age > 10) {
            return (
                <div className="newComp" key={newcomp.id}>
                    <div> Name {newcomp.name}</div>
                    <div> Age {newcomp.age}</div>
                    <button onClick={() => {deleteNinja(newcomp.id)}}> Delete ninja</button>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        // <div className = "newComp">
        //     <div> Name {name}</div>
        //     <div> Age {age}</div>
        // </div>
        <div className="comp-List">
            {
                compList 
                /* new_Comp.map(new_Comp => {
                    return new_Comp.age > 20 ? (
                        <div className="newComp" key={new_Comp.id}>
                            <div> Name {new_Comp.name}</div>
                            <div> Age {new_Comp.age}</div>
                        </div>
                    ) : null;
                }) */
            }
        </div>
    )

}

export default NewComp;