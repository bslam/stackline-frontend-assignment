import React, { useState, useCallback } from 'react';
import './Table.css';
import { IWeeklySales } from '../../service/api';

interface ITableProps {
  data: IWeeklySales[];
  initialSortKey?: keyof IWeeklySales;
}

type SortKeys = keyof IWeeklySales;

type SortOrder = 'ascn' | 'desc';

const Table: React.FC<ITableProps> = ({ data, initialSortKey = 'weekEnding' }) => {
  const [sortKey, setSortKey] = useState<SortKeys>(initialSortKey);
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

  const headers = [
    { key: 'weekEnding', label: 'WEEK ENDING' },
    { key: 'retailSales', label: 'RETAIL SALES' },
    { key: 'wholesaleSales', label: 'WHOLESALE SALES' },
    { key: 'unitsSold', label: 'UNITS SOLD' },
    { key: 'retailerMargin', label: 'RETAILER MARGIN' },
  ];

  const sortedData = useCallback(() => {
    const sortedArray = [...data].sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    return sortOrder === 'desc' ? sortedArray.reverse() : sortedArray;
  }, [data, sortKey, sortOrder]);

  const changeSort = (key: string) => {
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    setSortKey(key as keyof IWeeklySales);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((row) => (
              <td className='table-headers' key={row.key}>
                {row.label}{' '}
                <button
                  onClick={() => changeSort(row.key)}
                  className={`${
                    sortKey === row.key && sortOrder === 'desc' ? 'sort-button sort-reverse' : 'sort-button'
                  }`}
                >
                  ▲
                </button>
              </td>
            ))}
          </tr>
        </thead>

          <tbody>
            {sortedData().map((sales) => (
              <tr key={sales.weekEnding}>
                <td>{sales.weekEnding}</td>
                <td>{sales.retailSales}</td>
                <td>{sales.wholesaleSales}</td>
                <td>{sales.unitsSold}</td>
                <td>{sales.retailerMargin}</td>
              </tr>
            ))}
          </tbody>

        
      </table>
    </div>
  );
};

export default Table;
