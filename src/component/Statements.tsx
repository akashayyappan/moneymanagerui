import { AgGridReact } from 'ag-grid-react';
import { get } from '../service/httpClient';
import { useEffect, useRef, useState } from 'react';
import { iStatement } from '../model/statement';

function Statements() {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState<iStatement[]>([]);
  const colDefs: any = [
    { field: 'date' },
    { field: 'bank' },
    { field: 'balance' },
    { field: 'createOn' },
    { field: 'createdBy' },
    { field: 'description' },
    { field: 'withrawAmount' },
    { field: 'depositAmount' },
    { field: 'vendorName' }
  ]

  useEffect(() => {
    getStatements();
  }, [])

  const getStatements = async () => {
    const response = await get<iStatement[]>('statement');
    console.log(response.data);
    setRowData(response.data);
    console.log(rowData);
  }

  return (
    <AgGridReact<iStatement>
      rowData={rowData}
      columnDefs={colDefs}
      ref={gridRef} />
  )
}

export default Statements;
