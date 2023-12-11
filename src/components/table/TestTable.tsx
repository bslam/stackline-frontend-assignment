import React, { useState, useCallback } from 'react';
import { MouseEventHandler } from 'react';

interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

type Data = Person[];

type SortKeys = keyof Person;

type SortOrder = 'ascn' | 'desc';

interface SortableTableProps {
  data: Data;
  initialSortKey?: SortKeys;
}

const SortableTable: React.FC<SortableTableProps> = ({ data, initialSortKey = 'last_name' }) => {
  const [sortKey, setSortKey] = useState<SortKeys>(initialSortKey);
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

  const headers: { key: SortKeys; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'first_name', label: 'First name' },
    { key: 'last_name', label: 'Last name' },
    { key: 'email', label: 'Email' },
    { key: 'gender', label: 'Gender' },
    { key: 'ip_address', label: 'IP address' },
  ];

  const sortedData = useCallback(
    () =>
      data.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      }),
    [data, sortKey]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    setSortKey(key);
  };

  return (
    <div>
      <label>
        Sort by:
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value as SortKeys)}>
          {headers.map((header) => (
            <option key={header.key} value={header.key}>
              {header.label}
            </option>
          ))}
        </select>
      </label>

      <table>
        <thead>
          <tr>
            {headers.map((row) => (
              <td key={row.key}>
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
          {sortedData().map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td>{person.gender}</td>
              <td>{person.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
