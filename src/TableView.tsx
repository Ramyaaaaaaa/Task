import React,{useEffect, useState} from 'react';
import {Table,Image,Input} from 'antd';
import 'antd/dist/antd.css';
import axios from "axios"
import {SearchOutlined} from "@ant-design/icons";

export const TableView = () =>{
const [dataSource,setDataSource] = useState([]);
const[totalPages,settotal]  = useState<number>(1);
const[filter,setfilter] = useState<string>("")

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key:'name',
    filterDropdown:() =>{
      return (<input type="text" value={filter} onChange={(e)=>{setfilter(e.target.value)}}/>)
      
    },
    filterIcon:() =>{
      return(<SearchOutlined/>)
    }
  },
  {
    title: 'Tagline',
    dataIndex: 'tagline',
    key: 'tagline',
  },
  {
    title:'description',
    dataIndex:'description',
    key:'description'
  },
  {
    title:"Image",
    dataIndex:"image_url",
    key:"image_url",
    render: (_: any, record: any) => (
      <>
      {
          <div style={{ cursor: "pointer" }}>
            <Image width={50} src={record.image_url} alt="image"/>
          </div>
      }
      </>
    )
 }
];
useEffect(()=>{
  fetchRecords(10);
},[])

useEffect(()=>{
if(filter){
console.log(dataSource.filter((data:any)=>(data.name === filter ?? data)
)
)}

},[filter])

console.log(dataSource,"dataSource")
const fetchRecords = (page:number) =>{
  axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`).then(res=>{ 
      setDataSource(res.data)
      settotal(res.data.length)
  })
}

return(
  <div>
    <Table columns={columns} dataSource={dataSource} pagination={{pageSize:totalPages,total:100,
    onChange:(page)=>
   { 
    fetchRecords(page)
    }
  }
  }
    />
  </div>
)
}