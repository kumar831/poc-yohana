import React, {useState} from "react";
import '../App.css'
function AddFamily() {
    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
    
      const [arr, setArr] = useState(inputArr);
    
      const addInput = () => {
        setArr(s => {
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        });
      };
    
      const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
      };

    return(
        <div>
            
            <div className="family-container">
					<input type="text" name="familyname" className="familyname" placeholder="Family Name" required=""/>
                    <div className="family-content">
                    <input type="text" name="familyname1" placeholder="Family A" className="familyname1" required=""/>
                    <img className="bgImg" src={require('../Bg.png')} alt="bg"/>
                    <img className="addfamilyicon" src={require('../AddIcon.png')} alt="add" onClick={addInput}/>
                    </div>
                    {arr.map((item, i) => {
                        return (
                        <input
                            onChange={handleChange}
                            value={item.value}
                            id={i}
                            type={item.type}
                            size="40"
                            placeholder="Family B"
                            className="familyname"
                        />
                        );
                    })}
                    
			</div>
        </div>
    );
}
export default AddFamily;