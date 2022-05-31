import { StudentDetail } from '@/components/swr';
import * as React from 'react';

export interface ISWRPageProps {}

export default function SWRPage(props: ISWRPageProps) {
    return (
        <div>
            <h1>SWR Page</h1>
            <ul>
                <li>
                    <StudentDetail studentId={'sktwi1cgkkuif36f3'} />
                </li>
                <li>
                    <StudentDetail studentId={'sktwi1cgkkuif36f3'} />
                </li>
                <li>
                    <StudentDetail studentId={'sktwi1cgkkuif36f3'} />
                </li>
            </ul>
        </div>
    );
}
