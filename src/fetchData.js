import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        // ***
        // Use await para esperar uma função assíncrona
        // ***
        //const response = await axios.get('https://httpbin.org/get');
        const response = await axios.post('https://httpbin.org/post', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })// Ou use then() para executar uma função quando a função assíncrona acabar
        //.then(function (response) {
        //  console.log(response);
        //})
        //.catch(function (error) {
        //  console.log(error);
        //});     

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;