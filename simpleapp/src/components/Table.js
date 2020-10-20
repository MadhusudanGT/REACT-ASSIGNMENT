import MaterialTable from 'material-table'
import * as React from 'react';



      export const Table=()=>{
       const data=[
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
          ]

           const columns=[
               {
                   title:'Category',field:'category'
                },
                {
                   title:'Price',field:'price'
                },
                   {
                       title:'Stocked',field:'stocked'
                    },
                    {
                        title:'Name',field:'name'
                    },
           ]


          return(
          <div>
<MaterialTable title="MaterialTAble"
data={data}
columns={columns}
options={{
    search:true,
    paging:true,
    filtering:true,
    exportButton:true
}}
pageSize={5} checkboxSelection

/>
          </div>
          )
      }