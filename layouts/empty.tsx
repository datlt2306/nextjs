import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import * as React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
    return (
        <>
            <div>{children}</div>
        </>
    );
}
