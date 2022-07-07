import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import EldenService from "../service/EldenService";
import EldenList from "./EldenList";

const eldenService = new EldenService();

const Eldenrings = () => {
    const [data, setData] = useState([]);

    const getEldenrings = async () => {
        const eldenrings = await eldenService.getEldenrings();

        setData( eldenrings );
  };


  useEffect(() => {
    getEldenrings();
  }, []);

  return <EldenList eldenrings={data} />;
};

export default Eldenrings