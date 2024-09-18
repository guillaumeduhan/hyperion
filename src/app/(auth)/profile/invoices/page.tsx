'use client';
import { DataTable } from '@/components/DataTable';
import { columns } from './Columns';

export default function Invoices() {
  return <div>
    <DataTable columns={columns} data={[]} />
  </div>;
}