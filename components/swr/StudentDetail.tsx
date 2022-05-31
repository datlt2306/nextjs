import * as React from 'react';
import useSWR from 'swr';

export interface IStudentDetailProps {
    studentId: any;
}

const MILLESECOND_PER_HOUR = 60 * 60 * 1000;
export function StudentDetail({ studentId }: IStudentDetailProps) {
    const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: true,
        dedupingInterval: MILLESECOND_PER_HOUR,
    });
    function handleMutateClick() {
        mutate({ name: 'Easy front end' }, false);
    }
    return (
        <div>
            Name: {data?.name || '--'} - <button onClick={handleMutateClick}>Mutate </button>
        </div>
    );
}
