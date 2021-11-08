import React, {useState, useEffect} from 'react';
function  Services () {
  const [fake,setFake] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        const fakestore = async()=>{
          const response = await fetch("https://fakestoreapi.com/products")
          //console.log(response);
          const jsonData = await response.json();
          setFake(jsonData);
        }
        fakestore();
      }, [])

      const handleFilter = (event)=>{
        const searchWord = event.target.value;
        const newFilter = fake.filter((value)=>{
          console.log(value.title.toLowerCase().includes(searchWord.toLowerCase()));
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
    
        });
        setFilteredData(newFilter)
    }
  return(
    
    <div className="searchbarapp">
      <input type = "text" placeholder = "Enter Product name" onChange = {handleFilter} />
      
        
        {filteredData.length !== 0 && (
            <div className = "dataResult">
                {filteredData.map((value, key) => {
                    return (
                        <div className = 'dataItem' >
                            <p>{value.title}</p>
                        </div>                        
                    )
                })}
            </div>
            )} 
    </div>    
    )
  
  }
export default Services;