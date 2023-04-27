import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewHoldersCount() {
  const [holdersCount, setHoldersCount] = useState(0);

  useEffect(() => {
    const fetchHoldersCount = async () => {
      try {
        const response = await axios.get(
          "https://graphtronauts.app/api/v2/network/holders/json"
        );
        setHoldersCount(response.Data.holdersCount);
      } catch (error) {
        console.error(error);
      } 
    };
    fetchHoldersCount();
  }, []);

  return (
    <div>
      <h4>Holders Count<br></br>
        <NumberFormat value={holdersCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/>
      </h4>
    </div>
  );
}

export default NewHoldersCount;